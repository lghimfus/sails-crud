## How to use

### Run the server

```
sails lift
```

### Create a book
```
POST request to localhost:1337/api/create

example JSON body
{
   "title":"The hitchhiker's guide",
   "author":"Douglas Adams",
   "year":2012,
   "description":"This is just a description of hitchhiker's guide to the galaxy by glas Adams"
}
```

### Update a book

```
PUT request to localhost:1337/api/update/:id

example JSON body
{
   "title":"The hitchhiker's guide",
   "author":"Douglas Adams",
   "year":2012,
   "description":"This is just a description of hitchhiker's guide to the galaxy by glas Adams"
}
```

### Retrieve one book by id, retrieve all books and delete one book by id
* GET request to localhost:1337/api/get/all
* GET request to localhost:1337/api/get/:id
* DELETE request to localhost:1337/api/delete/:id
