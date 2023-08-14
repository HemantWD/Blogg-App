import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Create } from "./pages/Create";
import { UserPost } from "./pages/UserPost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/create" Component={Create} />
        <Route path="/userPost" Component={UserPost} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
