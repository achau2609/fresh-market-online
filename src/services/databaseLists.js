import * as dbAPI from "./databaseLists";

const collections = [
  {
    _id: {
      $oid: "65d6129033192b070a1a18cd",
    },
    ObjectName: "USER",
    Description: "User collection includes all customers and staffs information",
  },
  {
    _id: {
      $oid: "65d6139c33192b070a1a18ce",
    },
    ObjectName: "SHOPPINGCART",
    Description: "Shopping card collection includes basket and shopping card",
  },
  {
    _id: {
      $oid: "65d6bde5c837e9f2b8765161",
    },
    ObjectName: "CATEGORY",
    Description: "Category collection includes all products ailes or categories",
  },
  {
    _id: {
      $oid: "65d6bde5c837e9f2b8765162",
    },
    ObjectName: "ORDER",
    Description: "Order collection includes all customers orders and delivery information",
  },
  {
    _id: {
      $oid: "65d6bde5c837e9f2b8765162",
    },
    ObjectName: "PRODUCT",
    Description: "Product collection includes all products for sale",
  },
];

export function getCollections() {
  return collections;
}

export function getCollection(id) {
  return collections.find((m) => m._id === id);
}
