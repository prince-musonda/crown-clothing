import Home from "./routes/home/home.component";
import { Routes,Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";

const Shop = ()=>{
  return(
    <h1>This is the shop</h1>
  )
}
const App = ()=>{
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
    
  )
}

export default App