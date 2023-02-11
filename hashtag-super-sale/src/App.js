import { Login } from "./Loginpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";




function App() {
  return (
    <>
    {
      (sessionStorage.getItem("auth"))?
      <>
      <BrowserRouter>
      <Homepage/>
    <Routes>
      
    </Routes>
    </BrowserRouter>
      </>
      :
      <>
      <Login/>
      </>
    }
   
      
    </>
  );
}


export default App;