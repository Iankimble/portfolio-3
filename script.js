window.onscroll = function() {myFunction()};

var navbarScroll = document.getElementById("navBar");
var sticky = navbarScroll.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarScroll.classList.add("sticky")
  } else {
    navbarScroll.classList.remove("sticky");
  }
}



/*Scroll to skills*/
$("#skills").click(function () {

    $('html, body').animate({
        scrollTop: $("#webTech").offset().top
    }, 1000);
});

/*Scroll to Portfolio*/
$("#portfolio").click(function () {

    $('html, body').animate({
        scrollTop: $("#portfolioTop").offset().top
    }, 1000);
});


/*Scrool to About*/
$("#about").click(function() {
    $("html, body").animate({
        scrollTop: $("#headerTitle").offset().top
    }, 1000);
});

/*Scroll to Contact*/
$("#contact").click(function () {
    $('html, body').animate({
        scrollTop: $("#inquireHeader").offset().top
    }, 1000);
});



/* Links to websites*/

/*link to fst brk*/
$("#fblink").click(function(){
    console.log("fb link");
    window.open("https://iankimble.github.io/fbcg/");
});

/*link to food app*/
$("#foodlink").click(function(){
    console.log("foodlink");
    window.open("https://mhmeluskey.github.io/groupproject1/index.html");
});

/*link to 21 vice*/
$("#21link").click(function(){
    console.log("21vicelink");
    window.open("https://twenty-one-dice.herokuapp.com/");
});