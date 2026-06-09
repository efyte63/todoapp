import usermodel from "../database/usermodel.js";
import todoModel from "../database/todo.js"

export async function addtodos(req, res) {
    const { addtodo } = req.body;
    const id = req.userid;

    const findid = await todoModel.findOne({
        userid: id
    });

    if (!findid) {
        await todoModel.create({
            userid: id,              // ✅ fixed
            todos: [addtodo]
        });

        return res.json({
            msg: "todo created"
        });
    } else {
        let todolist = findid.todos;   // ✅ changed to let

        todolist = [...todolist, addtodo];

        await findid.updateOne({
            todos: todolist
        });

        return res.json({
            msg: "todo updated"
        });
    }
}

export async function removetodos(req, res) {
  const { removetodo } = req.body;
  const id = req.userid;

  const findid = await todoModel.findOne({
    userid: id
  });

  if (!findid) {
    return res.json({
      msg: "no todos found"
    });
  } else {
    let todolist = findid.todos;

    // ✅ remove item
    todolist = todolist.filter(todo => todo !== removetodo);

    await findid.updateOne({
      todos: todolist
    });

    return res.json({
      msg: "todo removed"
    });
  }
}

export async function gettodos(req, res) {
  const id = req.userid;

  const findtodos = await todoModel.findOne({
    userid: id
  });

  if (!findtodos) {
    return res.json({
      msg: "no todos found",
      todos: []
    });
  }

  return res.json({
    msg: "todos fetched",
    todos: findtodos.todos
  });
}



