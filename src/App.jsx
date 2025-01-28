
import Landpage from "./components/Landpage";
import Mainpage from "./components/Mainpage";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Aboutus from "./components/Aboutus";

const App = () => {
  
  return (
   <div>
    <Routes>
    <Route path="/" element={<Mainpage/>}/>
    <Route path="land" element={<Landpage/>}/>
    <Route path="signin" element={<Signin/>}/>
    <Route path="aboutus" element={<Aboutus/>}/>

    </Routes>
    
    
   </div>
  )
}

export default App