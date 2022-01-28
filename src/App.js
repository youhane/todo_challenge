import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="font-montserrat">
      <h1 className="font-ralewayBold font-black text-center text-3xl mt-6 mb-20">#todo</h1>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
