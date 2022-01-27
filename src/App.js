import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div>
      <h1 className="font-ralewayBold font-black text-center text-3xl my-3">#todo</h1>
      <TodoForm />
      <Footer />
    </div>
  );
}

export default App;
