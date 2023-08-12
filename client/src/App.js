import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-96">
        <Login />
      </div>
    </>
  );
}

export default App;
