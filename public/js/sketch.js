$(".list-wrapper").click(function(){
    alert("Sorry, the link is currently unavailable!");
});

$("#nav-events").click(function(){
    alert("Sorry, the page is currently unavailable!");
    // $("#event-section").scrollIntoView();
});


$(window).on("load",function(){
    // alert("window loaded");
    // $(".heading").css("visibility", "visible").fadeIn("slow");
    $(".heading").fadeIn("slow");
    $(".heading").fadeIn(1000);
    $(".heading-2").fadeIn("slow");
    $(".heading-2").delay(300).fadeIn(1000);
    $(".paragraph").fadeIn("slow");
    $(".paragraph").delay(600).fadeIn(1000);
    $("#button-outside").delay(1000).fadeIn(1000);
});

// ------------ scroll function ----------------
 
// $( window ).scroll(function() {
//     alert("You just scrolled");
//   });

// ------------ keypress function ----------------

// $(document).keypress(function(event){
//     var keycode = (event.keyCode ? event.keyCode : event.which);
//     console.log(keycode);
//     if(keycode == '65'){
//         alert('Sorry, the search function is not available now');    
//     }
// });

// ------------ mouseover function ----------------

// $(".list-wrapper").mouseover(function(){
//     $(".heading-5").css("color","#ffffff");
// })
// $(".list-wrapper").mouseout(function(){
//     $(".heading-5").css("color","#c81912");
// })