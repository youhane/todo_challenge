import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [showingComplete, setshowingComplete] = useState(false);

  return (
    <div className="font-montserrat">
      <h1 className="font-ralewayBold font-black text-center text-3xl my-3">#todo</h1>
      <Header setshowingComplete={setshowingComplete} />
      {showingComplete ? '' : <TodoForm />}
      <TodoList showingComplete={showingComplete} />
      <Footer />
    </div>
  );
}

export default App;
