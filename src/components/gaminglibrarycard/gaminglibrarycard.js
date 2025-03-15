import"./gaminglabrarycard.css"
import { SecondaryButton } from "../../components/index"
 const Gaminglibrarycard = (props) =>{
       return(
<div className="gamin-librarycard"> 
<ul>
      <li><img src={props.image} alt=""/></li>
      
      <li><h4>{props.title}</h4> <span>{props.category}</span></li>
      <li><h4>data</h4> <span>{props.day}</span></li>
      <li><h4> hours player</h4> <span>{props.hours_played}</span></li>
      <li><h4>currently</h4> <span>{props.downlond}</span></li>
      <SecondaryButton>downlond</SecondaryButton>
      
      
</ul>


</div>

       )
 }
 export default Gaminglibrarycard