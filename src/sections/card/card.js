import"./card.css";
import {FaStar ,FaDownload} from"react-icons/fa"
const Card = (props) =>{
       return(
              <div className="most-popular-item">
              <div className="card-wrpaper">
             <img className=" most-popular-item-image"src={props.image}/>
              <div className=" most-popular-item-content">
            <h4 className="most-popular-item-title"> {props.title}
                   <br/>
                   <spen> {props.category}</spen></h4>
                   <ul>
                          <li>  <span style={{color:"var(--color-icons)"}}><FaStar/> </span>  <span>{props.rate}</span></li>
                      <li>  <span style={{color:"var(--color-downlond)"}}><FaDownload /></span>  <span>{props.downlond}</span></li>
                   </ul>    
               </div>
     
             </div>
            </div>
       )
}
 export default Card