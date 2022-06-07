const db = require("./db");

// Project object constructor
const Project = function (id, name, description, startDate, endDate) {
  return {
    id: id,
    projectName: name,
    projectDesc: description,
    startDate: startDate,
    endDate: endDate,
  };
};

// gets all projects
Project.getAll = (req, res) => {
  db.query("SELECT * FROM projects", (error, results, fields) => {
    if (error) throw error;
    res.status(200).json(results);
  });
};

// gets project by id
Project.getID = (req, res) => {
  db.query(
    "SELECT * FROM projects WHERE id = ?",
    [req.params.id],
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
};

//get project by name
Project.getName = (req, res) => {
  console.log(req.params.name);
  db.query(
    "SELECT * FROM projects WHERE projectname = ?",
    [req.params.name],
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
};

// create project and insert into db
Project.createProject = (req, res) => {
  const project = new Project(
    req.body.id,
    req.body.projectname,
    req.body.projectdesc,
    req.body.startdate,
    req.body.enddate
  );
  db.query(
    "INSERT INTO projects (projectname, projectdesc, startdate, enddate) VALUES (?, ?, ?, ?)",
    [
      project.projectName,
      project.projectDesc,
      project.startDate,
      project.endDate,
    ],
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
};

// update a project already in db by id
Project.updateProject = (req, res) => {
  const project = new Project(
    req.params.id,
    req.body.projectname,
    req.body.projectdesc,
    req.body.startdate,
    req.body.enddate
  );
  db.query(
    "UPDATE projects SET projectname = ?, projectdesc = ?, startdate = ?, enddate = ? WHERE id = ?",
    [
      project.projectName,
      project.projectDesc,
      project.startDate,
      project.endDate,
      project.id,
    ],
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
};

// delete project by id
Project.deleteProject = (req, res) => {
  db.query(
    "DELETE FROM projects WHERE id = ?",
    [req.params.id],
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
};

// delete all projects
Project.deleteAll = (req, res) => {
  db.query("DELETE FROM projects", (error, results, fields) => {
    if (error) throw error;
    res.status(200).json(results);
  });
};

module.exports = Project;
