import  "./mostp.css";
import Card from "../card/card";

import {Sectionheader  , Sectionwrapper}from "../../components/index";
import Mostepopularedata from "../../Data/Mostepopularedata";
const Mostepopulare  = () =>{
const cards = Mostepopularedata.map(card =>{
       return(
<Card  key ={card.id}  image={card.image} title ={card.title} category ={card.category} rate={card.rate} downlond={card.downlond}/>
       )
})
return(
<>
<Sectionwrapper>
      <div className="section-header">
      <Sectionheader>  Most popular</Sectionheader>
        </div>
       <div className="most-popular-items">
       {cards}
       </div> 
</Sectionwrapper>
 </>
       )
}
export default Mostepopulare