const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
  constructor() {
    this._id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
  }
}

class Company {
  constructor() {
    this._id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.phrase = faker.company.bs();
  }
}

app.post("/api/users/new", (req, res) => {
  res.json(new User());
});

app.post("/api/companies/new", (req, res) => {
  res.json(new Company());
});

app.post("/api/user/company", (req, res) => {
  res.json([new User(), new Company()]);
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
