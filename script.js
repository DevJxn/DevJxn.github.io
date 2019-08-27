

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

       } // end if

    }); // end link function (event)

    toggleAnswer();

}); // end function

window.onscroll = function() {onTopFunction()};

function onTopFunction(){       // function for topButton
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        document.getElementById("onTopButton").style.display = "block";
    }else{
        document.getElementById("onTopButton").style.display = "none";
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
                      "images/triangleScreen.jpg"];

  }else if(pBundleName === document.getElementById("simpleStatsBundle")){
    var imageLinks = ["images/simpleBundleScreen.jpg",   //change to simple screen
                      "images/oceanStatsScreen.jpg",
                      "images/sunsetStatsScreen.jpg",
                      "images/summerStatsScreen.jpg",
                      "images/nyStatsScreen.jpg",
                      "images/londonStatsScreen.jpg",
                      "images/mountainStatsScreen.jpg"];
  }else if(pBundleName === document.getElementById("cityBundle")){
    var imageLinks = ["images/cityBundleScreen.jpg",   //change to simple screen
                      "images/nyStatsScreen.jpg",
                      "images/torontoScreen.jpg",
                      "images/londonStatsScreen.jpg"];
  }

  var rightButtonArray = document.getElementsByClassName("slideButtonRight");
  var leftButtonArray = document.getElementsByClassName("slideButtonLeft");

  for(i = 0; i<rightButtonArray.length;i++){
    if(rightButtonArray[i] === pTriggerElement){
    nextImage(pBundleName,imageLinks);
    return;
    }
  }

  for(i = 0; i<leftButtonArray.length;i++){
    if(leftButtonArray[i] === pTriggerElement){
      previousImage(pBundleName,imageLinks);
      return;
    }
  }


}




// next or previous image loop

function nextImage(pBundleName,pImageArray){

  for(i = 0; i < pImageArray.length ;i++){

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

  for(i = pImageArray.length-1; i >= 0 ; i--){

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
  for(i = 0; i<elements.length;i++){
  if(elements[i] !== document.getElementById("activeFilter")){
    if(elements[i].style.display === "block"){

      elements[i].style.display = "none";
      activeFilter.style.display = "inherit";
      var hide = false;

      switch(pTriggerElement){
        case document.getElementById("firstFilter"):
        activeFilter.innerHTML = "all products";
        activeFilter.style.background = "#6F8EE8";
        activeFilter.style.boxShadow = "3px 5px #4B6FC6";
        break;
        case document.getElementById("secondFilter"):
        activeFilter.innerHTML = "all bundles";
        activeFilter.style.background = "#D389E1";
        activeFilter.style.boxShadow = "3px 5px #AD66BB";
        break;
        case document.getElementById("thirdFilter"):
        activeFilter.innerHTML = "all clockfaces";
        activeFilter.style.background = "#6F8EE8";
        activeFilter.style.boxShadow = "3px 5px #4B6FC6";
        break;
        case document.getElementById("fourthFilter"):
        activeFilter.innerHTML = "special products";
        activeFilter.style.background = "#F83636";
        activeFilter.style.boxShadow = "3px 5px #D4001D";
        break;
        case document.getElementById("fithFilter"):
        activeFilter.innerHTML = "coming soon";
        activeFilter.style.background = "#00DE8D";
        activeFilter.style.boxShadow = "3px 5px #00B165";
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


// faqSection


function toggleAnswer(pTriggerElement){

  $(".answerPara").hide();
  $(".questionTitle").on("click",function(){

    $(this).next().slideToggle(500);

  });

}
