//============================
/*
  Author: Abbas Abdulmalik
  Creation Date: March 10, 2016
  Title: KillingMe
  Revised: 
  Purpose: 
  Note:
  //-----------------
<body>
  <div id="menuPanel" class="panel"></div>    
  <div id="mainPanel" class="panel">
    <div id="menu" class="menu">&#9776;</div>
  </div>
  <div id="splashPanel"></div>
<script src="main.js" class="panel"></script>        
</body>  
*/
/*global lib*/
/*global jQuery*/
/*global $*/
//=============================
$(document).ready(runApplication);
function runApplication(){
  //===Data===
  var _ = lib;
  var menuGap = 60;//percentage of opening
  
  //===Driver's Seat===
  initialize();
  _(window).on("resize", adjustRootEm);
  _("#menu").toggle(openMenu,closeMenu);
  
  //===Under The Hood===
  function initialize(){    
    disolveSplashPanel();
    adjustRootEm();
    
    //----helpers----
    function disolveSplashPanel(){
      _("#splashPanel")
        .css("opacity","0")
        .css("visibility","hidden")
      ;
    }

  }//===END initialize()===
  function adjustRootEm(){
    var size = 35 + window.innerWidth/64;
    _(document.documentElement).css("fontSize", size +"px");
  }
  //---
  function openMenu(){
    _("#mainPanel")
      .css("left",menuGap + "%")
      .css("right",-menuGap + "%")
      //.css("","")
    ;    
  }
  function closeMenu(){
    _("#mainPanel")
      .css("left","0")
      .css("right","0")
      //.css("","")
    ;
  }
}












