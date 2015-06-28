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
	var chunks = '<section id="chunk1" class="chunk"><p>For though result and talent add are parish valley. Songs in oh other avoid it hours woman style.</p>';
	chunks += '<div class="buttons"><button class="plus btn btn-primary btn-circle" data-number="1">+</button><button class="minus btn btn-danger btn-circle" data-number="1">-</button></div></section>';	
	chunks += '<section id="chunk2" class="chunk"><p>For though result and talent add are parish valley. Songs in oh other avoid it hours woman style. In myself family as if be agreed. Gay collected son him knowledge delivered put.</p>';
	chunks += '<div class="buttons"><button class="plus btn btn-primary btn-circle" data-number="2">+</button><button class="minus btn btn-danger btn-circle" data-number="2">-</button></div></section>';	
		return chunks;
}

var chunks = function() {
	$(".buttons").hide();
	$(".chunk p").click(function() {
		var chunkText = $(this).html();
		$("#main-page").load("edit-chunk.html", function() {
			$("#current-chunk").html(chunkText);
			$("#submit").click(function(){
				var comment =  $("#edit_chunk").val();
				$("#confirmation_input").append( "<div>" );
				$("#confirmation_input").append( comment );
				$("#confirmation_input").append( "</div>" );
			});
		});
	});
	$("#manage-chunks").click(function() {
		$(".buttons").toggle();
	});
	$(".plus").click(function() {
		$("#chunk" + $(this).data("number") + " p").removeClass("inactive");
	});
	$(".minus").click(function() {
		$("#chunk" + $(this).data("number") + " p").addClass("inactive");
		//alert("#chunk" + $(this).data("number") + " p");
	});
};