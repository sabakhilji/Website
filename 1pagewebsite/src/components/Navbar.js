import React from "react";
import "./Navbar.scss";
  
  

export default function Navbar(){
    return(<div class="container-fluid">
    <nav  class="navbar navbar-inverse ">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li ><a id="len1" class="hoverable" href="#">Home</a></li>
          <li ><a id="len2" class="hoverable" href="#">About</a></li>
          <li ><a id="len3"  class="hoverable" href="#">Portfolio</a></li>
          <li><a id="len4"  class="hoverable" href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
    </div>
    )
}