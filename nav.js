/**
 * 
 */

$(document).ready(function() {
	$("#login").click(function() {
		$("#main-page").load("home.html");
		$("nav").show();
	});
	$("#my-documents-link").click(function() {
		$("#main-page").load("my-documents.html", function() {
			documents();
		});
	});
	$("#chunks-feed-link").click(function() {
		$("#main-page").load("chunks-feed.html");
	});
	$("#my-account-link").click(function() {
		$("#main-page").load("my-account.html");
	});
	$("#about-link").click(function() {
		$("#main-page").load("about.html");
	});
	$("#home-link").click(function() {
		$("#main-page").load("home.html");
	});
	$("#input-text").click(function() {
		$("#main-page").load("upload_document.html");
	});
});