$(document).ready(function(){
/* wait for the document to load, then fire the function and do anything we want */

//alert("it works!");

$(".test").hover(function(){

	$(".test").addClass("addme")
	$(".test").html("wipe out!")
	$(".test").append(" text from js")
	$(".test").prepend("Prepend! ")
	


}) //end click




})


