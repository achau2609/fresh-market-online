const Order = require("../models/orderModel");
const mongoose = require("mongoose");

const addOrder = () => {
    return
}

const getAllOrders = (req, res) => {
    let criteria = {};
    if (req.query.orderNo)
        criteria = { ...criteria, orderNo: req.query.orderNo }
    if (req.query.status)
        criteria = { ...criteria, Status: req.query.status }
    if (req.query.orderDate) {
        let date = new Date(req.query.orderDate)
        let tmr = new Date(req.query.orderDate)
        tmr.setDate(date.getDate() + 1)
        criteria = { ...criteria, orderDate: { $gte: date, $lt: tmr } }
    }


    Order.find(criteria)
        .select(['orderDate', 'orderNo', 'CustomerName', 'Status'])
        .limit(req.query.limit)
        .skip(req.query.limit * (req.query.page - 1))
        .sort({ orderNo: 'asc' })
        .then(data => {
            Order.find(criteria)
                .countDocuments({})
                .then(count => {
                    res.json({
                        count: count,
                        data: data
                    }
                    )
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "An error occurred while fetching orders", msg: err })
        })
}

const getTodaysPickupOrders = (req, res) => {

    let date = new Date().toDateString();
    date = new Date(date);

    let tmr = new Date(date);
    tmr.setDate(date.getDate() + 1);

    let criteria = {
        OrderType: 'Pickup',
        PickupDateTime: {
            $gte: date, $lt: tmr
        }
    }

    Order.find(criteria)
        .select(['orderNo', 'Status', 'CustomerName', 'Contact#', 'PickupDateTime'])
        .limit(req.query.limit)
        .skip(req.query.limit * (req.query.page - 1))
        .sort({ PickupDateTime: 'asc' })
        .then(data => {
            Order.find(criteria)
                .countDocuments({})
                .then(count => {
                    res.json({
                        count: count,
                        data: data
                    }
                    )
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "An error occurred while fetching orders", msg: err })
        })
}

const getOrder = (req, res) => {

    let selectColumns = ['_id', 'orderNo', 'CustomerName', 'DeliveryAddress', 'OrderType', 'Contact#', 'Products', 'Status', 'orderDate', 'PickupDateTime']

    Order.findOne({ orderNo: req.query.orderNo })
        .select(selectColumns)
        .then(data => {
            if (data) {
                try {
                    if (data.DeliveryAddress) {

                        let address = data.DeliveryAddress.toObject();
                        let newAddress = Object.values(address).join(', ');

                        data = data.toObject();
                        data = { ...data, DeliveryAddress: newAddress };
                    }
                    return res.json(data);

                } catch (err) {
                    console.log(err);
                    res.status(500).json({ error: "An error occurred while fetching orders", msg: err });
                }
            }
            else {
                res.status(500).json({ error: "Order not found"});
                return ;
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "An error occurred while fetching orders", msg: err });
        })
}

const updateOrderStatus = (req, res) => {

    const newOrder = req.body;
    let valid = true;

    if (!newOrder._id)
        valid = false;
    if (!newOrder.Status)
        valid = false;


    if (valid) {

        //find order
        Order.findById(newOrder._id)
            .then(data => {

                const oldOrder = data.toObject();

                if (oldOrder) {
                    //update order
                    Order.updateOne({ _id: oldOrder._id }, { Status: newOrder.Status })
                        .then(() => res.json({ message: 'Order updated successfully' })
                        )
                        .catch(err => {

                            res.status(500).json({ error: "1An error occurred while fetching orders", msg: err })
                        });
                } else {
                    res.status(500).json({ error: "Order not found" })
                    return ;
                }
            })
            .catch(err => {
                res.status(500).json({ error: "2An error occurred while fetching orders", msg: err })
            }
            );

    } else {
        console.log("Missing information");
        res.status(500).json({ error: "Missing information" })
        return ;
    }
}

module.exports = { addOrder, getAllOrders, getTodaysPickupOrders, getOrder, updateOrderStatus }
