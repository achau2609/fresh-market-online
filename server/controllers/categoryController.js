const Category = require("../models/categoryModel");

const getCategories = (req, res) => {
    Category.aggregate([
        {
          '$match': {
            'ParentCategory': {
              '$exists': 1
            }
          }
        }, {
          '$sort': {
            'categoryName': 1
          }
        }, {
          '$group': {
            '_id': '$ParentCategory', 
            'categories': {
              '$push': {
                'item': '$CategoryName'
              }
            }
          }
        }, {
          '$project': {
            'ParentCategory': '$_id', 
            'categories': '$categories.item', 
            '_id': 0
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



module.exports = { getCategories }