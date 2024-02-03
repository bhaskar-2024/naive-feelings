import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";
import Card from "./components/Card";
import CardContainer from "./components/Home";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <LandingPage></LandingPage>
   
    
    <CardContainer></CardContainer>
    <Contact></Contact>
    <Navbar></Navbar>
    <AboutMe></AboutMe> */}
    {/* <CreatePost/> */}
    {/* <LoginForm></LoginForm> */}
    <Signup></Signup>
    </>
  );
}

export default App;
