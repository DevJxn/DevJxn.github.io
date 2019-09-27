

$(document).ready(function(){


    $("a").on('click',function(event){


        if(this.hash !== ""){

            event.preventDefault();

            var hash = this.hash;

            // Jquery animate

            var position = $(hash).offset().top -150; //position to scroll

            $('html,body').animate({scrollTop: position},1500);   //scroll
            if(document.getElementById("checkbox").checked === true){
                document.getElementById("checkbox").checked = false;
            }

       }

    }); // end link function (event)

    toggleAnswer();
    toggleGiveawayCard();

}); // end function

window.onscroll = function() {onTopFunction()};

function onTopFunction(){       // function for topButton
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        document.getElementById("onTopButton").style.display = "block";
        document.getElementById("navBarSection").style.opacity = "0.9";
    }else{
        document.getElementById("onTopButton").style.display = "none";
        document.getElementById("navBarSection").style.opacity = "1";
    }

}

function toTop(){
    document.body.scrollTop = 0;
    $('html,body').animate({scrollTop: 0},1500);
}


// Slideshow

function getBundleName(pBundleName,pTriggerElement){

  // Bundle Arrays

  if(pBundleName === document.getElementById("allBundle")){
    var imageLinks = ["images/allBundleScreen.jpg",
                      "images/oceanStatsScreen.jpg",
                      "images/summerStatsScreen.jpg",
                      "images/sunsetStatsScreen.jpg",
                      "images/nyStatsScreen.jpg",
                      "images/mountainStatsScreen.jpg",
                      "images/londonStatsScreen.jpg",
                      "images/frizzyScreen.jpg",
                      "images/forestScreen.jpg",
                      "images/torontoScreen.jpg",
                      "images/circlesScreen.jpg",
                      "images/triangleScreen.jpg",
                      "images/cubeScreen.jpg",
                      "images/sidebarScreen.jpg",
                      "images/lovingFrizzyScreen.jpg",
                      "images/dividedScreen.jpg",
                      "images/palmScreen.jpg",
                      "images/camelScreen.jpg",
                      "images/treeScreen.jpg",
                      "images/autumnScreen.jpg",
                      "images/fallScreen.jpg",
                      "images/spukyScreen.jpg",
                      "images/trickScreen.jpg",
                      "images/redForestScreen.jpg"];

  }else if(pBundleName === document.getElementById("simpleStatsBundle")){
    var imageLinks = ["images/simpleBundleScreen.jpg",
                      "images/oceanStatsScreen.jpg",
                      "images/sunsetStatsScreen.jpg",
                      "images/summerStatsScreen.jpg",
                      "images/nyStatsScreen.jpg",
                      "images/londonStatsScreen.jpg",
                      "images/mountainStatsScreen.jpg",
                      "images/autumnScreen.jpg"];
  }else if(pBundleName === document.getElementById("cityBundle")){
    var imageLinks = ["images/cityBundleScreen.jpg",
                      "images/nyStatsScreen.jpg",
                      "images/torontoScreen.jpg",
                      "images/londonStatsScreen.jpg"];
  }else if(pBundleName == document.getElementById("shapesBundle")){
    var imageLinks = ["images/shapesBundleScreen.jpg",
                      "images/triangleScreen.jpg",
                      "images/circlesScreen.jpg",
                      "images/cubeScreen.jpg"];
  }else if(pBundleName == document.getElementById("autumnBundle")){
    var imageLinks = ["images/autumnBundle.jpg",
                      "images/autumnScreen.jpg",
                      "images/fallScreen.jpg",
                      "images/spukyScreen.jpg",
                      "images/trickScreen.jpg",
                      "images/redForestScreen.jpg"];
  }

  var rightButtonArray = document.getElementsByClassName("slideButtonRight");
  var leftButtonArray = document.getElementsByClassName("slideButtonLeft");
  var i = 0;

  for(i; i<rightButtonArray.length;i++){
    if(rightButtonArray[i] === pTriggerElement){
    nextImage(pBundleName,imageLinks);
    return;
    }
  }

  var j = 0;
  for(j; j<leftButtonArray.length;j++){
    if(leftButtonArray[j] === pTriggerElement){
      previousImage(pBundleName,imageLinks);
      return;
    }
  }


}




// next or previous image loop

function nextImage(pBundleName,pImageArray){
  var i = 0;
  for(i; i < pImageArray.length ;i++){

      if(pImageArray[i] === pBundleName.getAttribute("src")){

        if(pImageArray[i+1] !== undefined){
          pBundleName.setAttribute("src",pImageArray[i+1]);
          return;
        }else{
          pBundleName.setAttribute("src",pImageArray[0]);
          return;
        }
      }
  }
}


function previousImage(pBundleName,pImageArray){

  var i = pImageArray.length-1;
  for(i; i >= 0 ; i--){

      if(pImageArray[i] === pBundleName.getAttribute("src")){

        if(pImageArray[i-1] !== undefined){
          pBundleName.setAttribute("src",pImageArray[i-1]);
          return;
        }else{
          pBundleName.setAttribute("src",pImageArray[pImageArray.length-1]);
          return;
        }
      }
  }

}


//filterSection

function openFilter(pTriggerElement){

  var activeFilter = document.getElementById("activeFilter");

  var elements = document.getElementsByClassName("filter");
  var i = 0
  for(i; i<elements.length;i++){
  if(elements[i] !== document.getElementById("activeFilter")){
    if(elements[i].style.display === "block"){

      elements[i].style.display = "none";
      activeFilter.style.display = "inherit";
      var hide = false;

      switch(pTriggerElement){
        case document.getElementById("firstFilter"):
        activeFilter.innerHTML = "all products";
        activeFilter.style.background = "linear-gradient(90deg, rgba(27,144,220,1) 0%, rgba(0,87,156,1) 100%)";
        activeFilter.style.boxShadow = "3px 5px rgba(0,87,156,1)";
        break;
        case document.getElementById("secondFilter"):
        activeFilter.innerHTML = "all bundles";
        activeFilter.style.background = "linear-gradient(90deg, rgba(227,46,188,1) 0%, rgba(162,0,130,1) 100%)";
        activeFilter.style.boxShadow = "3px 5px rgba(162,0,130,1)";
        break;
        case document.getElementById("thirdFilter"):
        activeFilter.innerHTML = "all clockfaces";
        activeFilter.style.background = "linear-gradient(90deg, rgba(27,144,220,1) 0%, rgba(0,87,156,1) 100%)";
        activeFilter.style.boxShadow = "3px 5px rgba(0,87,156,1)";
        break;
        case document.getElementById("fourthFilter"):
        activeFilter.innerHTML = "special products";
        activeFilter.style.background = "linear-gradient(90deg, rgba(227,46,188,1) 0%, rgba(162,0,130,1) 100%)";
        activeFilter.style.boxShadow = "3px 5px rgba(162,0,130,1)";
        break;
        case document.getElementById("fithFilter"):
        activeFilter.innerHTML = "coming soon";
        activeFilter.style.background = "linear-gradient(90deg, rgba(35,229,35,1) 0%, rgba(0,139,0,1) 100%)";
        activeFilter.style.boxShadow = "3px 5px rgba(0,139,0,1)";
        break;
      }

      activeFilter.style.color = "white";

    }else{
      activeFilter.innerHTML = "all products";
      activeFilter.style.background = "#DADDE2";
      activeFilter.style.color = "black";
      activeFilter.style.boxShadow = "3px 5px #B1BDC5";
      activeFilter.style.display = "none";

      elements[i].style.display = "block";
    }
  }
}
  if(hide === false){
    toggleCard(activeFilter.innerHTML);
  }
}


function toggleCard(pType){

  switch(pType){
    case "all products":
      $(".mainCardBundle").show();
      $(".mainCard").show();
      $(".mainCardSoon").show();
    break;
    case "all bundles":
    $(".mainCardBundle").show();
    $(".mainCard").hide();
    $(".mainCardSoon").hide();
    break;
    case "all clockfaces":
    $(".mainCardBundle").hide();
    $(".mainCardSoon").hide();
    $(".mainCard").show();
    break;
    case "special products":
    $(".mainCardBundle").hide();
    $(".mainCard").hide();
    $(".mainCardSoon").hide();
    $(".markedButton").parent().show();
    break;
    case "coming soon":
    $(".mainCardBundle").hide();
    $(".mainCard").hide();
    $(".mainCardSoon").show();
    break;
  }
}

//giveaway Section

function toggleGiveawayCard(){

  $(".giveawayHidden").hide();
  $(".giveawayCardMain i").on("click",function(){

    $(this).parent().siblings(".giveawayHidden").slideToggle(500);

  });

}


// faqSection


function toggleAnswer(){

  $(".answerPara").hide();
  $(".questionTitle").on("click",function(){

    $(this).next().slideToggle(500);

  });

}
