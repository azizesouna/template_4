import "./gaminglabrary.css";
import {Gaminglibrarycard, Sectionheader  , Sectionwrapper}from "../../components/index"
import Gaminglabrarydata from "../../Data/gaminglabrarydata"
const Gaminglabrary = () =>{
      const cards = Gaminglabrarydata.map(card =>{
            return(
     <Gaminglibrarycard key ={card.id}  image={card.image} title ={card.title} category ={card.category} day={card.day} hours_played={card.hours_played} downlond={card.currently}/>
      )})
       return(
              <>
<Sectionwrapper>
      <div className="gamin-librarycards">
      <Sectionheader>   Gaming  labrary</Sectionheader>
        </div>
       <div className="most-popular-items">
       {cards}
       </div> 
</Sectionwrapper>
 </>
       )}
export default Gaminglabrary