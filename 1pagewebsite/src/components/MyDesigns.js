import Drummachine from "../data/images/Drummachine.png";
import Calculator from "../data/images/Calculator.png";
import musicplayer from "../data/images/music-player.gif"
import React from "react";

const divStyle={
    backgroundColor: 'burlywood',
    height:"40vh"
}
export default function MyDesigns(){
    return(
        <div>
            <section style={{height:"80vh" }}class="header-bg align-items-center d-flex" id="projects">
            <div class="container-fluid ">
            <div class="row " style={{height:"50vh"}}>
                <div class="row1" style={{height:"50vh",top:"10px"}}>
                    <div class="col-lg-6" style={{width:"40vw",height:"40vh",margin:"auto"}}>
                    <div class="card border-primary " style={{color:"red",backgroundColor:"peachpuff",left:"300px"}}>
                    <div class="card-header " style={{height:"35px"}}  >Drum Machine</div>
                    <img class="card-img-top" style={{height:"15vh"}} src={Drummachine} alt="Card image cap"/>
                    <div class="card-body" style={{height:"35px"}}>
                    <a href="https://github.com/sabakhilji/Drum-Machine" class="btn btn-primary">Project Link</a>
                    </div>
                    </div>
                    </div>
                    <div class="col-lg-6"  style={{width:"40vw",height:"40vh",margin:"auto"}}>
                    <div class="card border-primary " style={{color:"red",backgroundColor:"peachpuff",left:"300px",bottom:"130px"}}>
                    <div class="card-header" style={{height:"35px"}}>Javascript Calculator</div>
                    <img class="card-img-top" style={{height:"15vh"}}src={Calculator} alt="Card image cap"/>
                    <div class="card-body" style={{height:"35px"}}>
                    <a href="https://github.com/sabakhilji/React-Calculator" class="btn btn-primary">Project Link</a>
                    </div>
                    </div>
                   </div>
                </div>
                <div class="row2 " style={{height:"50vh",bottom:"10px"}}>
                    <div class="col-lg-6" style={{width:"40vw",height:"40vh",margin:"auto"}}>
                    <div class="card border-primary" style={{color:"red",backgroundColor:"peachpuff"}}>
                    <div class="card-header" style={{height:"35px"}} >Music-player(in React)</div>
                    <img class="card-img-top" style={{height:"15vh"}} src={musicplayer} alt="Card image cap"/>
                    <div class="card-body"  style={{height:"35px"}}>
                    <a href="https://github.com/sabakhilji/music-player" class="btn btn-primary">Project Link</a>
                    </div>
                    </div>
                    </div>
                    <div class="col-lg-6"  style={{width:"40vw",height:"40vh",margin:"auto"}}>
                    <div class="card border-primary" style={{color:"red",backgroundColor:"peachpuff",bottom:"130px"}}>
                    <div class="card-header"  style={{height:"35px"}}>Javascript Calculator</div>
                    <img class="card-img-top" style={{height:"15vh"}} src={musicplayer} alt="Card image cap"/>
                    <div class="card-body" style={{height:"35px"}}>
                    <a href="https://github.com/sabakhilji/music-player" class="btn btn-primary">Project Link</a>
                    </div>
                    </div>
                   </div>
                </div>
            
            </div>
            </div>
            </section>
        </div>
        /*<div>
             <section style={{height:"80vh" }} id="projects">
             <div class="container">
              <div class="d-flex mt-5 justify-content-center">
                 <div class ="card border-primary " style={{color:"red",backgroundColor:"peachpuff",maxWidth:"50px"}}>
                 <div class="card-header" >Drum Machine</div>
                    <img class="card-img-top" style={{height:"20vh",width:"20vw"}} src={Drummachine} alt="Card image cap"/>
                    <div class="card-body">
                    <a href="https://github.com/sabakhilji/Drum-Machine" class="btn btn-primary">Project Link</a>
                    </div>
                    </div>
                    </div>
              </div>



             </section>

        </div>*/


    )
}