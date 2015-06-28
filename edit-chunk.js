var edit_chunk = function(){
	// var unchunked_text = "test text";
	// alert(unchunked_text);
	alert("hiiiieee");
	var take_in_text = function() {
		return $("#edit_chunk").val();
	};

	
	$("#submit").click(function(){
		alert("hiiiieee");
		alert(take_in_text());
		document.getElementById("confirmation_input").innerHTML = take_in_text();
	});
};