const Category = require("../models/categoryModel");

const getCategories = (req, res) => {
  Category.aggregate([
    {
      '$match': {
        'ParentCategory': {
          '$exists': 0
        }
      }
    }, {
      '$lookup': {
        'from': 'CATEGORY',
        'localField': 'CategoryName',
        'foreignField': 'ParentCategory',
        'as': 'Children'
      }
    }, {
      '$project': {
        '_id': 1,
        'ParentCategory': '$CategoryName',
        'categories': {
          '$sortArray': {
            'input': '$Children',
            'sortBy': {
              'CategoryName': 1
            }
          }
        }
      }
    }, {
      '$project': {
        'ParentCategory': 1,
        'categories': '$categories.CategoryName'
      }
    }, {
      '$sort': {
        'ParentCategory': 1
      }
    }
  ])
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "An error occurred while fetching orders", msg: err })
    })
}

const addCategory = (req, res) => {

  if (!req.isAdmin)
    return res.status(401).json({ err: 'Unauthorized' });

  const newCategory = req.body.categoryName;

  if (!newCategory)
    return res.status(400).json({ err: 'Invalid Parameter' });

  let existCat = findCategoryByName(newCategory)
  if (existCat)
    return res.status(400).json({ err: 'Category exists' });


  Category.create({ CategoryName: newCategory })
    .then((data) => res.json({ msg: 'Success' }))
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err })
    })
}

const findCategoryByName = (name) => {

  let cat = {};
  Category.findOne({ 'CategoryName': name })
    .then(data => {
      cat = data
    });
  return cat;
}

const updateCategories = async (req, res) => {

  if (!req.isAdmin)
    return res.status(401).json({ err: 'Unauthorized' });

  const newCategories = req.body.categories;

  if (!newCategories)
    return res.status(400).json({ err: 'Invalid Parameter' });

  await Category.deleteMany({});

  let categoriesToAdd = []

  newCategories.forEach(element => {

    categoriesToAdd.push({ CategoryName: element.id })

    element.children.forEach((child) => categoriesToAdd.push({ CategoryName: child.id, ParentCategory: child.parentId }))
  })


  Category.insertMany(categoriesToAdd)
    .then(data => res.json({ msg: 'Success' }))
    .catch(err => res.status(500).json({ err: err })
    );

}

module.exports = { getCategories, addCategory, updateCategories }