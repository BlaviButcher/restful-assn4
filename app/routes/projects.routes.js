// NO MENTION IN ASSIGNMENT SPECS OF ERROR HANDLING

module.exports = (app, express) => {
  var router = express.Router();

  const projects = require("../controllers/projects.controller");

  // Outputs verb to the console
  router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
  });

  // Postman tested GET localhost:3000/projects/ - returns all projects
  router.get("/", (req, res) => {
    projects.getAll(req, res);
  });

  // Postman tested GET localhost:3000/projects/:id - returns project with given id
  router.get("/:id", (req, res) => {
    projects.getID(req, res);
  });

  // Postman tested GET localhost:3000/projects/:name - returns project with given name
  router.get("/name/:name", (req, res) => {
    projects.getName(req, res);
  });

  // Postman tested POST localhost:3000/projects/new - creates a new project
  router.post("/new", (req, res) => {
    projects.createProject(req, res);
  });

  // Postman tested PUT localhost:3000/projects/:id - updates project with given id
  router.put("/:id", (req, res) => {
    projects.updateProject(req, res);
  });

  // Postman tested DELETE localhost:3000/projects/:id - deletes project with given id
  router.delete("/:id", (req, res) => {
    projects.deleteProject(req, res);
  });

  // Postman tested DELETE localhost:3000/projects/ - deletes all projects
  router.delete("/", (req, res) => {
    projects.deleteAll(req, res);
  });

  app.use("/projects", router);
};
