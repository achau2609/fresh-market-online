import * as usersAPI from "./users";


const users = [{
  "_id": {
    "$oid": "65d6129033192b070a1a18cd"
  },
  "FirstName": "John",
  "LastName": "Doe",
  "Email": "john.doe@example.com",
  "ContactNumber": "998-555-1234",
  "Secret": "*****",
  "Customer": {
    "Address": [
      {
        "Address1": "100 Main St",
        "City": "Metropolis",
        "State": "NY",
        "Zip": "10001"
      }
    ]
  }
},
{
  "_id": {
    "$oid": "65d6139c33192b070a1a18ce"
  },
  "FirstName": "Jane",
  "LastName": "Smith",
  "Email": "jane.smith@example.com",
  "ContactNumber": "333-333-3333",
  "Secret": "*****",
  "Staff": {
    "Position": "Inventory Manager",
    "HireDate": {
      "$date": "2023-01-01T00:00:00.000Z"
    }
  }
},
{
  "_id": {
    "$oid": "65d6bde5c837e9f2b8765161"
  },
  "FirstName": "David",
  "LastName": "Johnson",
  "Email": "david.johnson@example.com",
  "ContactNumber": "+1 (555) 987-6543",
  "Secret": "customer_secret_2",
  "Customer": {
    "Address": [
      {
        "Address1": "456 Elm St",
        "City": "Smallville",
        "State": "USA",
        "Zip": "10001"
      }
    ]
  }
},
{
  "_id": {
    "$oid": "65d6bde5c837e9f2b8765162"
  },
  "FirstName": "Maria",
  "LastName": "Rodriguez",
  "Email": "maria.r@example.com",
  "ContactNumber": "+1 (555) 789-0123",
  "Secret": "customer_secret_3",
  "Customer": {
    "Address": []
  }
},
{
  "_id": {
    "$oid": "65d6bde5c837e9f2b8765160"
  },
  "FirstName": "Emily",
  "LastName": "Chen",
  "Email": "emilychen@example.com",
  "ContactNumber": "+1 (555) 123-4567",
  "Secret": "customer_secret_1",
  "Customer": {
    "Address": [
      {
        "Address1": "123 Main St",
        "City": "Anytown",
        "State": "USA",
        "Zip": "10001"
      },
      {
        "Address1": "202 Maple St",
        "City": "Countryside",
        "State": "USA",
        "Zip": "10001"
      }
    ]
  }
},
{
  "_id": {
    "$oid": "65d6bde5c837e9f2b8765163"
  },
  "FirstName": "James",
  "LastName": "Smith",
  "Email": "james.smith@example.com",
  "ContactNumber": "+1 (555) 234-5678",
  "Secret": "customer_secret_4",
  "Customer": {
    "Address": [
      {
        "Address1": "101 Pine St",
        "City": "Villagetown",
        "State": "USA",
        "Zip": "10001"
      },
      {
        "Address1": "303 Cedar St",
        "City": "Hillside",
        "State": "USA",
        "Zip": "10001"
      },
      {
        "Address1": "404 Birch St",
        "City": "Suburbia",
        "State": "USA",
        "Zip": "10001"
      }
    ]
  }
},
{
  "_id": {
    "$oid": "65d6bde5c837e9f2b8765164"
  },
  "FirstName": "Sarah",
  "LastName": "Lee",
  "Email": "sarahlee@example.com",
  "ContactNumber": "+1 (555) 345-6789",
  "Secret": "customer_secret_5",
  "Customer": {
    "Address": [
      {
        "Address1": "202 Maple St",
        "City": "Countryside",
        "State": "USA",
        "Zip": "10001"
      },
      {
        "Address1": "505 Walnut St",
        "City": "Metropolis",
        "State": "USA",
        "Zip": "10001"
      },
      {
        "Address1": "606 Spruce St",
        "City": "Riverside",
        "State": "USA",
        "Zip": "10001"
      },
      {
        "Address1": "707 Sycamore St",
        "City": "Lakeside",
        "State": "USA",
        "Zip": "10001"
      }
    ]
  }
},
{
  "_id": {
    "$oid": "65d6be55c837e9f2b8765165"
  },
  "FirstName": "Becky",
  "LastName": "Lam",
  "Email": "becky.lam@example.com",
  "ContactNumber": "444-444-4444",
  "Secret": "*****",
  "Staff": {
    "Position": "Staff",
    "HireDate": "2022-11-15T00:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "65d6be55c837e9f2b8765166"
  },
  "FirstName": "Anna",
  "LastName": "Johnson",
  "Email": "anna.johnson@example.com",
  "ContactNumber": "555-555-5555",
  "Secret": "*****",
  "Staff": {
    "Position": "Delivery Driver",
    "HireDate": "2023-05-20T00:00:00.000Z"
  }
}];


export function getUsers(){
  return users;
}

export function getUser(id){
  return users.find(m=> m._id === id);
}