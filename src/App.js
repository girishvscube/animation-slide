import "./App.css";
import Sidenavbar from "./components/Sidenavbar";

function App() {
  return (
    <div className="mx-auto mt-8 flex flex-col">
      <Sidenavbar></Sidenavbar>

      <h1 className="text-red-600 text-center text-2xl ">hello side navbar</h1>
    </div>
  );
}

export default App;
