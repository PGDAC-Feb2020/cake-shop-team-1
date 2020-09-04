const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // unblocking cors policy
app.use(express.json()); // this will help to read the data coming in body :: TEXT to JSON

const dbadduser = require("./db.add.user");
const dbread = require("./db.read");
const dbupdate = require("./db.update");
const dbAddorder = require("./db.addorder");

// created an API
// learnt how to read the input; coming from client.
// http://localhost:3000/adduser?username=hello
app.get("/adduser", async (req, res) => {
  try {
    // lets read the query parameter
    const input = req.query;

    // calling db logic :: async :: non blocking
    await dbadduser.addUser(input);
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: err.message });
  }
});
app.post("/adduser", async (req, res) => {
  try {
    const input = req.body; // before doing this // app.use(express.json());

    await dbadduser.addUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});
app.post("/addorder", async (req, res) => {
  try {
    const input = req.body; // before doing this // app.use(express.json());

    await dbAddorder.addOrder(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});
app.get("/addorder", async (req, res) => {
  try {
    const input = req.query; // before doing this // app.use(express.json());

    await dbAddorder.addOrder(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});
app.post("/Updateuser", async (req, res) => {
  try {
    const input = req.body; // before doing this // app.use(express.json());

    await dbupdate.UpdateUser(input);
    res.json({ opr: "success post" });
  } catch (err) {
    res.json({ opr: err.message });
  }
});
app.get("/Updateuser", async (req, res) => {
  try {
    // lets read the query parameter
    const input = req.query;

    // calling db logic :: async :: non blocking
    await dbupdate.UpdateUser(input);
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: err.message });
  }
});



app.get("/alluser", async (req, res) => {
  try {
    const results = await dbread.readAllUser();

    res.json(results);
  } catch (err) {
    const json = { message: err.message };
    res.json(json);
  }
});
app.post("/alluser", async (req, res) => {
  try {
    const results = await dbread.readAllUser();

    res.json(results);
  } catch (err) {
    const json = { message: err.message };
    res.json(json);
  }
});

// POST API :: FOR TESTIG POSTMAN :: ANDROID :: IOS :: BROWSER
// http://localhost:3000/adduser
app.post("/adduser", async (req, res) => {
  try {
    const input = req.body; // before doing this // app.use(express.json());

    await dbadduser.addUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});

// started teh server.
app.listen(3500);
