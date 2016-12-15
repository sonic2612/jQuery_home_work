
$(document).ready(function(){
  $("p").on("click" , myClick);
  $("button").on("click" , myIdy);
  $("button").on("click" , myIdy);
  $("#even").on("click" , myEven);
  $("#odd").on("click" , myOdd);
  // $("p, h2").on("click" , myMentor);
   $("p, h2").on("click" , function(){
   		$(this).hide();
   });
$("p").dblclick(function(){
  	$(this).hide();
   });
  });
  
function myClick(){
	$("this").hide();
}
function myIdy(){
	$("#test").hide();
}
function myEven(){
	$("p:even").hide();
}
function myOdd(){
	$("p:odd").hide();
}
// function myMentor(){
// 	$("p, h2").hide();
// }
