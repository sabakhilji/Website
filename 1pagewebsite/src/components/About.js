import React from "react";
import sabaimage from "../data/images/saba_s.jpg"
import "./About.scss"; 

export default function About(){
   return(
  <section style={{backgroundColor:"pink" ,height:"50vh"}}class="header-bg align-items-center position-relative d-flex" id="top">
        <div class="container-fluid ">
            <div class="row align-items-center ">
               <div class="col-lg-6 ">
                    <div class="header-title">
                      
                        <h1 class="font-weight-bold main-title mb-4">Hi I am Saba</h1>
                        <p class="text-sub ml-2 mb-4 pb-2">Freelance developer, having expertise in HTML,CSS ,javascript and React </p>
                        <a href="" class="btn btn-primary ml-2">Contact me <span class="ml-2 right-icon"><i class="fas fa-arrow-right"></i></span></a>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div class="mt-5 mt-lg-0">
                        <img style={{height:"50vh"}} src={sabaimage} alt="" class="img-fluid mx-auto d-block"/>
                    </div>
                </div>
   </div>
        {/* <div class="d-flex flex-row justify-content-center">
            <div class="p-2"> 
                    <div class="header-title">
                      <h1 class="font-weight-bold main-title mb-4">Hi I am Saba</h1>
                      <p class="text-sub ml-2 mb-4 pb-2">Freelance developer, having expertise in HTML,CSS ,javascript and React </p>
                      <a href="" class="btn btn-primary ml-2">Contact me <span class="ml-2 right-icon"><i class="fas fa-arrow-right"></i></span></a>
                    </div>
            </div>
            <div class="p-2">
                                  
                    <div class="mt-5 mt-lg-0">
                        <img src={sabaimage} alt="" class="img-fluid mx-auto d-block"/>
                    </div>
            </div>
</div>*/}
         
        </div>
    </section>
    
   )
}