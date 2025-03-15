
import "./header.css";
import logo from "../../assats/logo.png";

const Header = () =>{
       return(
<>
<nav className="navbar navbar-expand-lg navbar-dark cyborg-navbar ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img  src={logo}/></a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item "> 
        <a className="nav-link active " aria-current="page" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Brows">Browse</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Details
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/Streams">Streams</a></li>
            <li><a className="dropdown-item" href="/profile">Profile</a></li>
            <li><hr className="dropdown-"/>  HRER</li>
            <li><a className="dropdown-item" href="/somthingelse">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/profile">Profile</a>
        </li>
      </ul>
     
    </div>
 
</nav>
</>
       )
}
 export default Header