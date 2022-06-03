import React from "react";
import "./ContactForm.scss"
export default function ContactForm(){
    return(
        <div>
            <section id="ContactForm">
             <div id="container-fluid">
                 <div class="row">
                     <div class="col-sm-6" style={{height:"40vh"}}>
                     <iframe
                     width="100%"
                     height="100%"
                     title="map" 
                     marginHeight={0}
                     marginWidth={0}
                     
                    frameborder={0} src="https://www.google.com/maps/embed/v1/place?q=pershing+field+park&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>

                     </div>
                     <div style={{position:"relative"}} class="col-sm-6">
                     <form style={{position:"absolute",top: "50%",left: "50",margin: "-25px 0 0 -25px"}} class="cf">
                     <div class="half left cf">
                    <label for="input-name">Name</label>
                    <input type="text" id="input-name" placeholder="Name"/>
                    <label for="input-email">Email</label>
                    <input type="email"  label="E-mail" id="input-email" placeholder="Email address" />
                    <label for="input-subject">Subject</label>
                    <input type="text" label="Message" id="input-subject" placeholder="Subject"/>
                    </div>
                    <div class="half right cf">
                    <label for="input-message"></label>
                    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                    </div>  
                     <input type="submit" value="Submit" id="input-submit"     />
                    </form>
                     </div>
                 </div>

             </div>

            </section>
        </div>
    )
}