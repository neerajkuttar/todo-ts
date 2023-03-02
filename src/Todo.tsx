import React, { useState } from "react";
import { BiSquareRounded } from "react-icons/bi";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

const initialTodos: Todo[] = [
  { id: 1, text: "Clean my computer", checked: false },
  { id: 2, text: "Buy a keyboard", checked: false },
  { id: 3, text: "Write an article about @xstate/test", checked: true },
];

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<string>("");
  const [tbutton, setTbutton] = useState(false);
 
  const todos1 = todos.filter(checkfalse)
  function checkfalse(todos: { checked: boolean; }){
    return todos.checked == false
  }

  const todos2 = todos.filter(checktrue)
  function checktrue(todos: { checked: boolean; }){
    return todos.checked == true
  }

  const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };


  const handleNewTodoSubmit = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: newTodo.trim(),
          checked: false,
        },
      ]);
      setNewTodo("");
    }
  };

  const handleTodoToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="m-14 space-y-3">
      <h1 className=" text-2xl "> XTodo</h1>
      <h2 className=" font-bold text-2xl">Things to get done</h2>
      <button  className="bg-yellow-500 text-white px-3 py-1  rounded-md ">
        Refresh
      </button>
      <h2 className="text-xl "> Things to do </h2>
      {todos1.length==0 && <div>No todos here</div> }

      <ul className="">
        {todos1.map((todo) => (

        <li
          className=" text-md"
          key={todo.id}
          onClick={() => handleTodoToggle(todo.id)}
        >
          <div className=" flex items-center">

            <div>

              <BiSquareRounded />
            </div>
            <div> {todo.text} </div>
          </div>
        </li>
         
        ))}
      </ul>
      {tbutton ? (
        <div className=" border-2  p-4 space-y-3 mr-4">
          <h2 className="text-xl"> Create a todo</h2>
          <div className="w-full">
            <input
              className="border-2 mb-3 p-2 w-1/2 rounded-md "
              type="text"
              value={newTodo}
              placeholder="Write an article about XState"
              onChange={handleNewTodoChange}
            />
          </div>
          <button
            className="hover:bg-yellow-600 bg-yellow-500 p-2 px-4 rounded-md text-white"
            onClick={handleNewTodoSubmit}
          >
            Save
          </button>
          <button
            className="border-2 border-gray-400 p-2 px-4 ml-4 rounded-md"
            onClick={() => setTbutton(false)}
          >
            Cencel
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={(e) => setTbutton(true)}
            className=" bg-yellow-500 text-white rounded-full py-2 px-5"
          >
            + Add a todo
          </button>{" "}
        </div>
      )}

<h2 className="text-xl "> Things done </h2>
{todos2.length==0 && <div>No todos here</div> }

<ul className="">
  
  {todos2.map((todo) => (

  <li
    className=" text-md"
    key={todo.id}
    onClick={() => handleTodoToggle(todo.id)}
  >
    <div className=" flex items-center">

      <div>

        <BiSquareRounded />
      </div>
      <div> {todo.text} </div>
    </div>
  </li>
   
  ))}
</ul>
    </div>
  );
};

export default Todo;
