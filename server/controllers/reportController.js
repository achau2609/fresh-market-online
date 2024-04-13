const Order = require("../models/orderModel");
const { Product } = require("../models/productModel");

const getSalesReport = (req, res) => {
  const startDate = new Date(req.query.startDate);
  let endDate = new Date(req.query.endDate);

  if (isNaN(startDate) || isNaN(endDate)) {
    res.status(406).json({ error: "Invalid parameters" });
    return;
  }

  // endDate = 00:00 of the next month
  endDate.setUTCMonth(endDate.getUTCMonth() + 1);
  // finding xAxis
  const dateDifferenceInMonths = (dateInitial, dateFinal) =>
    Math.max(
      (dateFinal.getUTCFullYear() - dateInitial.getUTCFullYear()) * 12 +
      dateFinal.getUTCMonth() -
      dateInitial.getUTCMonth(),
      0
    );

  // get xAxis array
  let xAxis = Array.from({ length: (dateDifferenceInMonths(startDate, endDate)) }, (_, i) => 0 + i);


  xAxis = xAxis.map((i) => {
    let temp = new Date(Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), 1));
 //   console.log('temp: ' + temp.toUTCString());
    temp.setUTCMonth(temp.getUTCMonth() + i);
  //  console.log(`temp i: ${i} date: ${temp.toUTCString()}`);
    let month = temp.getUTCMonth() + 1;
    return `${temp.getUTCFullYear()}-${month.toString().padStart(2, '0')}`;
  });

  const pipeline = [
    {
      '$match': {
        'Status': 'Completed',
        'orderDate': {
          '$gte': new Date(startDate),
          '$lte': new Date(endDate)
        }
      }
    }, {
      '$unwind': {
        'path': '$Products',
        'preserveNullAndEmptyArrays': false
      }
    }, {
      '$set': {
        'sales': {
          '$multiply': [
            '$Products.Quantity', '$Products.ProductPrice'
          ]
        },
        'timeframe': {
          '$dateToString': {
            'format': '%Y-%m',
            'date': '$orderDate'
          }
        }
      }
    }, {
      '$group': {
        '_id': {
          'timeframe': '$timeframe',
          'orderType': '$OrderType'
        },
        'Sales': {
          '$sum': '$sales'
        }
      }
    }, {
      '$set': {
        'timeframe': '$_id.timeframe',
        'orderType': '$_id.orderType',
        'Sales': {
          '$round': [
            '$Sales', 2
          ]
        }
      }
    }, {
      '$unset': '_id'
    }, {
      '$sort': {
        'timeframe': 1
      }
    }, {
      '$group': {
        '_id': '$orderType',
        'data': {
          '$push': {
            'label': '$timeframe',
            'Sales': { '$round': ["$Sales", 2] },
          }
        }
      }
    }
  ]

  Order.aggregate(pipeline)
    .then((data) => {

      let result = []

      data.forEach(orderType => {

        let tempObj = {};
        tempObj.label = orderType._id;
        let sales = [];
        for (let i = 0; i < xAxis.length; i++) {

          const found = orderType.data.find((element) => {

            return element.label == xAxis[i]
          });
          found ? sales.push(found.Sales) : sales.push(0);
        }
        tempObj.data = sales;
        result.push(tempObj);
      })

      /*     output format
          {
            label: 'Delivery',
            data: [30.83, 45.38, 86.36, 76.15, 87.17, 65.57, 75.10],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
    */

      return res.json({ label: xAxis, data: result });
    })
    .catch(err => res.status(500).json({ error: "Something went wrong", msg: err }));
}

const getInventoryReport = (req, res) => {

  if (!req.query.limit || !req.query.page) {
    res.status(406).json({ error: "Invalid parameters" });
    return;
  }

  let sort = { 'ProductName': 1, 'Quantity': 1 };

  if (req.query.sort == 2)
    sort = { 'Quantity': 1, 'ProductName': 1 }

  const displayFields = ['_id', 'ProductName', 'Quantity', 'CategoryId']

  Product.find({})
    .select(displayFields)
    .sort(sort)
    .limit(req.query.limit)
    .skip(req.query.limit * (req.query.page - 1))
    .then(data => {
      // get total count
      Product.find({})
        .countDocuments({})
        .then(count => {
          res.json({
            count: count,
            data: data
          }
          )
        })
    })
}

const getProductReport = (req, res) => {

  const startDate = new Date(req.query.startDate);
  const endDate = new Date(req.query.endDate);

  if (isNaN(startDate) || isNaN(endDate)) {
    res.status(406).json({ error: "Invalid parameters" });
    return;
  }

  const pipeline = [
    {
      '$match': {
        'Status': 'Completed',
        'orderDate': {
          '$gte': new Date(startDate),
          '$lte': new Date(endDate)
        }
      }
    }, {
      '$unwind': {
        'path': '$Products',
        'preserveNullAndEmptyArrays': false
      }
    }, {
      '$project': {
        'Products._id': 1,
        'Products.ProductName': 1,
        'Products.ProductPrice': 1,
        'Products.Quantity': 1
      }
    }, {
      '$set': {
        'sales': {
          '$multiply': [
            '$Products.Quantity', '$Products.ProductPrice'
          ]
        }
      }
    }, {
      '$group': {
        '_id': {
          'ProductName': '$Products.ProductName',
          '_id': '$Products._id'
        },
        'Sales': {
          '$sum': '$sales'
        }
      }
    }, {
      '$set': {
        'ProductName': '$_id.ProductName',
        '_id': '$_id._id',
        'Sales': {
          '$round': [
            '$Sales', 2
          ]
        }
      }
    }, {
      '$sort': {
        'Sales': -1
      }
    }
  ]

  Order.aggregate(pipeline)
    .then(data => {
      if (data) {
        return res.json(data);
      } else {
        res.status(404).json({ error: "Not found." });
        return;
      }
    })
    .catch(err => res.status(500).json({ error: "Something went wrong." }))

}


module.exports = { getSalesReport, getInventoryReport, getProductReport };
