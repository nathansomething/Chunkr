
$(document).ready(function(){
	$("#edit-chunk-container").hide();
	$(".bunch-a-chunks").hide();
	$(".document-link").click(function() {
		$("#bunch-a-chunks-" + $(this).data("number")).show();
		$("#document-table").hide();
	});
	$(".chunk").click(function() {
		$(".chunk").hide();
		$(this).show();
		$("#edit-chunk-container").show();
		$("#edit-chunk").text($(this).text());
	});
	$("#last-version").click(function() {
		alert("Going to Last Version");
	});
	$("#cancel").click(function() {
		alert("Canceling Chunk");
	});
	$("#submit").click(function() {
		alert("Chunk Sumbitted");
	});
});