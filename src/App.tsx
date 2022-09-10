import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home/Home";
import Print from "./components/routes/Print/Print";
import About from "./components/routes/About/About";
import Branding from "./components/routes/Branding/Branding";
import Customers from "./components/routes/Customers/Customers";
import SignIn from "./components/routes/SignIn/SignIn";
import WebDesign2 from "./components/routes/WebDesign/WebDesign2";
import Contact from "./components/routes/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/print" element={<Print />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/branding" element={<Branding />}></Route>
        <Route path="/web" element={<WebDesign2 />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
