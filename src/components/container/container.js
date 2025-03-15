import "./container.css";
import{BrowserRouter as Router , Routes , Route } from"react-router-dom"// import router
import {Home ,Profile ,Pagenotfound ,Brows, Streams  ,Somthingelse} from "../Pages/index";
const Container = () =>{
       return(
<div className='container main-container'>
       
<Router>
       < Routes>
           <Route  path="/Home" element={<Home/>}/>
           <Route  path="/profile" element={<Profile/>}/>
           <Route  path="/brows" element={<Brows/>}/>
           <Route  path="/streams" element={<Streams/>}/>
           <Route  path="/somthingelse" element={<Somthingelse/>}/>
           <Route path="*" element={<Pagenotfound/>} />
       </Routes>
</Router>

</div>
       )
}
 export default Container