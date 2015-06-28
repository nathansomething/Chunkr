//
//$(document).ready(function(){
//	$(".page").hide();
//	$(".document-link").click(function() {
//		$("#bunch-a-chunks-" + $(this).data("number")).show();
//		$("#document-table").hide();
//	});
//	$(".chunk").click(function() {
//		$(".chunk").hide();
//		$(this).show();
//		$("#edit-chunk-container").show();
//		$("#edit-chunk").text($(this).text());
//	});
//	$("#last-version").click(function() {
//		alert("Going to Last Version");
//	});
//	$("#cancel").click(function() {
//		alert("Canceling Chunk");
//	});
//	$("#submit").click(function() {
//		alert("Chunk Sumbitted");
//	});
//});

var getChunks = function(chunkID) {
	return '<section id="chunk#1" class="chunk"><p>For though result and talent add are parish valley. Songs in oh other avoid it hours woman style. In myself family as if be agreed. Gay collected son him knowledge delivered put. Added would end ask sight and asked saw dried house. Property expenses yourself occasion endeavor two may judgment she. Me of soon rank be most head time tore. Colonel or passage to ability.</p></section>' +
		'<section id="chunk#2" class="chunk"><p>For though result and talent add are parish valley. Songs in oh other avoid it hours woman style. In myself family as if be agreed. Gay collected son him knowledge delivered put. Added would end ask sight and asked saw dried house. Property expenses yourself occasion endeavor two may judgment she. Me of soon rank be most head time tore. Colonel or passage to ability.</p></section>';
}

var chunks = function() {
	$(".chunk").click(function() {
		var chunkText = $(this).html();
		$("#main-page").load("edit-chunk.html", function() {
			$("#current-chunk").html(chunkText);
			$("#current-chunk").addClass("edit");
		});
	});
};