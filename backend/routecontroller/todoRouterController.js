
const { TodoModel } = require("../models/todoModel");
const fs = require("fs");

const todoRouterController = async (req, res) => {
  try {
    const { titel, userID, additionalnote } = req.body;
    //console.log(userID,"userid ")
    if (!titel || !additionalnote) {
      return res.status(401).send({ error: "invalid input" });
    } else {
      let new_todo = await new TodoModel({ titel, additionalnote, userID });
      await new_todo.save();

      res.status(200).send({ success: "todo added success" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "cannot add a todo" });
  }
};

const getallTodoRouter = async (req, res) => {
  try {
    const alltodo = await TodoModel.find();
    res.status(200).send({ data: alltodo });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "please try after some time", error });
  }
};

const singleUserRouter = async (req, res) => {
  try {
    const userTodo = await TodoModel.find();
    const id = fs.readFileSync("./key.txt", "utf-8");

    let singleuserTodo = userTodo.filter((elm) => {
      return elm.userID === id;
    });
    if (singleuserTodo.length === 0) {
      return res.status(200).send({ error: "no todo found " });
    } else {
      res.status(200).send({ success: singleuserTodo });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "cannot complete req now", error });
  }
};

const deleteRouterController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const finditem = await TodoModel.findOne({ _id:id });
    if (!finditem) {
      return res.status(301).send({
        error: "item does not exists",
      });
    } else {
      await TodoModel.findByIdAndDelete({ _id:id });
      res.status(200).send({ success: "item deleted success", finditem });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "canot delete try after some time", error });
  }
};

const updateRouterController = async (req, res) => {
  try {
    const { id } = req.params;
    const { titel, additionalnote,status } = req.body;
   
    //  if(!id||!titel){
    //   return res.status(301).send({"error":"all fields nessesary to make changes"})
    //  }
    const updatedTodo = await TodoModel.findOne({ _id: id });
    const userID_in_todo = updatedTodo.userID;
    const user_making_req = req.body.userID;

    if(userID_in_todo!==user_making_req){
return res.status(301).send({"error":"youcannot change other todo"})
    }
   else{
      await TodoModel.findByIdAndUpdate({_id:id},{titel,additionalnote,status})
      res.status(200).send({"success":"todo updated successfully"})
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "cannot update ", error });
  }
};

module.exports = {
  todoRouterController,
  deleteRouterController,
  getallTodoRouter,
  singleUserRouter,
  updateRouterController,
};
