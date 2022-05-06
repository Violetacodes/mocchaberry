import { useState } from "react";
import { datatwo } from "./datatwo";
import picarrow from "./nexi3.png"
import picprevi from "./prev2.png"
import './App.css';


function About() {
    const [picture, setPicture] = useState(0);
    const {image} = datatwo[picture];



    const PreviousPic = () => {
        setPicture((picture => {
            picture--;
            if(picture < 0){
               return datatwo.length -1;
            }
            return picture;
        }))
    }
    const NextPic = () => {
        setPicture((picture => {
            picture++;
            if(picture > datatwo.length -1){
                picture = 0;
            }
            return picture;
        }))
    }
    const description = "Mochaberry is a cozy cafe and roastery located in Historic Downtown Orangeville. We have been local and independently owned since 2004. We aim to bring our community together by participating in local events, being a great meeting place for friends, family, and coworkers, providing catering services, and supporting local businesses. We strive every day to expand our menu by using more fresh ingredients to inspire more made-in-house creations! Visit us, say hello to our friendly baristas, relax on a cozy couch, try our delicious food creations, and explore our many varieties of in-house roasted coffee! INSIDE THE CAFE...Comfortable Ambience with Exposed Brick and Original Tin Ceilings, Wide Selection of In-House Roasted Coffee and Loose Leaf Tea, Enjoy the Smell of Fresh Roasted Coffee and Baked Goods, Decorated With the Work of Local Artists"
    const [showMore, setShowMore] = useState(false);
    return(

          <div className="phrase about">
            <h1>WELCOME TO MOCHABERRY</h1>
            <p> {showMore ? description : description.substring(0,380) + "...."}
            <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
            </p>
        <div className="container">
            <img src={image} width="500px" alt="cafe" />
        </div>
        <div>
        <button className="btn" onClick={PreviousPic}><img src={picprevi} width="40px" alt="arrow" /></button>
        <button className="btn" onClick={NextPic}><img src={picarrow} width="40px" alt="arrow" /></button>
        </div>
          
        </div>
    )
}

export default About;