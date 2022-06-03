import { testimonials } from "../data/testimonials"
import React from "react";
export default function Testimonials(){
    return(<div>
        <section id="skills" style={{height:"30vh"}}>
        <div class="container-fluid">
            <p style={{padding:"auto",fontSize:"30px",marginTop:"20px"}}> <mark>Skills</mark></p>
           
            <div class="progress">
            <div class="progress-bar bg-info progress-bar-striped " role="progressbar" style={{width: "80%", ariavaluenow:"50", ariavaluemin:"0", ariavaluemax:"100"}}>HTML</div>
            </div>
             <br></br>
            <div class="progress">
            <div class="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{width: "70%", ariavaluenow:"50", ariavaluemin:"0", ariavaluemax:"100"}}>CSS/SCSS</div>
            </div>
            
            </div>
       
        </section>
        </div>
    )
}