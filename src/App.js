import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [showingComplete, setshowingComplete] = useState(false);

  useEffect(() => {
    const tempTodos = localStorage.getItem('todos')
    const loadedTodos = JSON.parse(tempTodos)
    loadedTodos && setTodos(loadedTodos)
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem('todos', temp)
  }, [todos])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  return (
    <div className="font-montserrat">
      <h1 className="font-ralewayBold font-black text-center text-3xl my-3">#todo</h1>
      <Header setshowingComplete={setshowingComplete} />
      {showingComplete ? '' : <TodoForm addTodo={addTodo} />}
      <TodoList showingComplete={showingComplete} todos={todos} />
      <Footer />
    </div>
  );
}

export default App;
