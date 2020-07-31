//Between every two texts give a 4 sec gap
// $(window).bind("load", function() {
//
// });

$(window).bind("load", function() {

  function type(id,string){
  			var i = 0;
  			//var speed = 70;
        var speed = 2000/string.length;
    			function typeWriter(){
    			  if (i < string.length) {
    			    $(id).append(string.charAt(i));
    			    i++;
    			    setTimeout(typeWriter, speed);
    			  }
    			};
  			typeWriter();
			};

	function newText(textno,string){
        var delay = 1000;
        $("#text" + textno).fadeToggle(function(){
          $("#text" + textno)[0].innerHTML = "";
        });
        $("#text" + textno).fadeToggle();
        setTimeout(function(){
			// $("#" + slideid).append("<h2 id=" + textid2 + "><"+"/h2>");
			 type("#text" + textno,string)},delay);

	};
setTimeout(function mainFunc() {


     type("#text1","Hey Anchal!!");
//slide 1
      setTimeout(function(){
       newText("1","Thinking what this is?");
      },2000);

      setTimeout(function() {
       newText("1","I know you probably are...");
      },6000);

      setTimeout(function(){
       newText("1","...yes I made this for you :)");
      },10000);

      setTimeout(function() {
       newText("1","So sit back, relax and enjoy");
      },14000);

      setTimeout(function(){
        $('html, body').animate({scrollTop: $("#slide2").offset().top},1000);
      },20000);
//slide 2
      setTimeout(function(){
        newText("2","Do you remember the DBMS lab ?");
      },21000);

      setTimeout(function() {
        newText("2","It has been almost an year...");
      },25000);

      setTimeout(function() {
       newText("2","Look how far we have come and...");
     },29000);

      setTimeout(function() {
       newText("2","...I hope we go more for coming years");
     },33000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide3").offset().top},1000);
      },39000);
//slide 3
      setTimeout(function(){
        newText("3","You like pikachu. Don't you ?");
      },40000);

      setTimeout(function() {
        newText("3","You both are pretty similar!!");
      },44000);

      setTimeout(function() {
       newText("3","Both are cute and adorable...");
     },48000);

      setTimeout(function() {
       newText("3","...and I like both of them :* <3");
     },52000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide4").offset().top},1000);
      },56000);

//slide 4
      setTimeout(function(){
        newText("4","Remember an year a ago...");
      },57000);

      setTimeout(function() {
        newText("4","...I gave you a chocolate");
      },61000);

      setTimeout(function() {
       newText("4","This time, I thought...");
     },65000);

      setTimeout(function() {
       newText("4","...lets add some code to it.");
     },69000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide5").offset().top},1000);
      },73000);


      setTimeout(function(){
        newText("5","Maybe someday when you're free...");
      },74000);

      setTimeout(function() {
        newText("5","...we can have our coffee date.");
      },78000);

      setTimeout(function() {
       newText("5","There is still lot to talk...");
     },82000);

      setTimeout(function() {
       newText("5","...and lot to share with you.");
     },86000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide6").offset().top},1000);
      },90000);



      setTimeout(function(){
        newText("6","Thank you for being my friend...");
      },91000);

      setTimeout(function() {
        newText("6","...And I too will never forget you.");
      },95000);

      setTimeout(function() {
       newText("6","College would be so dull without you.");
     },99000);

      setTimeout(function() {
       newText("6","\" I KNOW RIGHT, I AM QUEEN\"");
     },103000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide7").offset().top},1000);
      },107000);



      setTimeout(function(){
        newText("7","Happy Birthday Anchal");
      },108000);

      setTimeout(function() {
        newText("7","Loads and loads of love :*");
      },112000);

      setTimeout(function() {
       newText("7","God bless you with lots of happiness...");
     },116000);

      setTimeout(function() {
       newText("7","...and chocolates :)");
     },122000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide8").offset().top},1000);
      },126000);



      setTimeout(function(){
        newText("8","From your nerdy dobo friend...");
      },127000);

      setTimeout(function() {
        newText("8","...Who will always love You...");
      },131000);

      setTimeout(function() {
       newText("8","...no matter how weird you get...");
     },135000);

      setTimeout(function() {
       newText("8","Kashish Khullar");
     },139000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide9").offset().top},1000);
      },143000);



      setTimeout(function(){
        newText("9","#DOBO");
      },143000);

},1000);
$('html, body').animate({scrollTop: $("body").offset().top},1000);

$(".loader").fadeOut("slow");


});
