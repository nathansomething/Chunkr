/**
 * 
 */

$(document).ready(function(){
	$("#home").load("home.html");
	$("#my-documents-link").click(function() {
		$(".page").hide();
		$("#my-documents").show().load("my-documents.html");
		documnets();
	});
	$("#chunks-feed-link").click(function() {
		$(".page").hide();
		$("#chunks-feed").show().load("chunks-feed.html");
	});
	$("#my-account-link").click(function() {
		$(".page").hide();
		$("#my-account").show().load("my-account.html");
	});
	$("#about-link").click(function() {
		$(".page").hide();
		$("#about").show().load("about.html");
	});
	$("home-link").click(function() {
		$(".page").hide();
		$("#home").show().load("home.html");
	});
})