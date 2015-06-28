
var documnets = function() {
	$(".document-link").click(function() {
		$("#bunch-a-chunks-" + $(this).data("number")).show(); //.text(getChunks())
		$("#document-table").hide();
	});
};