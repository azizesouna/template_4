import Navitem from "./Navitem.css"
const Navitem = (props) =>{
        return(
             <li className="nav-item"> {props.children}</li>
        )
}
const NavitemDropdawn  = (props) =>{
       return(
              <li className="nav-item dropDown" > {props.children}</li>
       )
}
export default Navitem
export{NavitemDropdawn }
