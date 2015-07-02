

var documents = function() {
	$(".document-link").click(function() {
		$("#main-page").load("chunks.html", function() {
			$("#bunch-a-chunks").html(getChunks(0));
			chunks();
		});
	});
<<<<<<< HEAD
	
=======
	$("#input-text").click(function() {
		$("#main-page").load("input-text.html");
	});
>>>>>>> 6a6f76a1fff5bfffddeff6c98ae2c9a5c9fa386c
};


