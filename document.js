

var documents = function() {
	$(".document-link").click(function() {
		$("#main-page").load("chunks.html", function() {
			$("#bunch-a-chunks").html(getChunks(0));
			chunks();
		});
	});
	
};


