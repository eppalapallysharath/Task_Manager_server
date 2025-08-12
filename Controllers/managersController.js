const { UserModel } = require("../Models/authModel.js");
const { TaskModel } = require("../Models/taskModel.js");

exports.createTicket = async (req, res, next) => {
  try {
    const { title, description, assignTo } = req.body;
    const userId = req.userInfo._id;

    const createTask = await TaskModel.create({
      title: title,
      description: description,
      assignTo: assignTo,
      createdBy: userId,
    });
    res
      .status(200)
      .json({ message: "Task created successfully", task: createTask });
  } catch (error) {
    console.log(error);
    const err = { statusCode: 400, message: "something went wrong" };
    next(err);
  }
};

exports.getAllTickets = async (req, res, next) => {
  try {
    const tickets = await TaskModel.find()
      .where({
        createdBy: req.userInfo._id,
      })
      .populate("assignTo")
      .populate("createdBy");
    res.json({ message: "your assigned tasks", data: tickets });
  } catch (error) {
    console.log(error);
    const err = { statusCode: 400, message: "something went wrong" };
    next(err);
  }
};

exports.getTicketByID = async (req, res, next) => {
  try {
    const { ticketID } = req.params;
    const task = await TaskModel.findById(ticketID)
      .populate("createdBy")
      .populate("assignTo");
    res.json({ message: "Task Information ", data: task });
  } catch (error) {
    console.log(error);
    const err = { statusCode: 400, message: "something went wrong" };
    next(err);
  }
};

exports.getAllEmployees = async (req, res, next) => {
  try {
    const employees = await UserModel.find().where({ role: "employee" });
    res.json({ message: "employees information", data: employees });
  } catch (error) {
    console.log(error);
    const err = { statusCode: 400, message: "something went wrong" };
    next(err);
  }
};
