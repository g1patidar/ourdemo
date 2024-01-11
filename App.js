import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cartpage from "./pages/cartpage";
import Paymentpage from "./pages/paymentpage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";


// Css part
import "./css/Home.css";
import "./css/Header.css"
import "./css/Login.css"
import "./css/loginmediaqueries.css"
import "./css/Registration.css"
import "./css/registrationmediaqueries.css"


const App=()=>{

  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/cartpage" element={<Cartpage/>}/>
          <Route path="/loginpage" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>



        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
