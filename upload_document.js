var edit_chunk = function(){
	// var unchunked_text = "test text";
	// alert(unchunked_text);
	// alert("hiiiieee");
	var take_in_text = function() {
		return $("#upload_document").val();
	};

	var delimit = function(unchunked_text, delimiter) {
		var chunked_text = unchunked_text.split(delimiter)
		$.each(chunked_text, function(index, element) {
			$( "#document_chunks" ).append( "<div>" );
			$( "#document_chunks" ).append( element );
			$( "#document_chunks" ).append( "</div>" );

		});	
	};


	
	$("#submit").click(function(){
		var comment = take_in_text();
		delimit(unchunked_text, delimiter);


		// var newdiv1 = $( "<div id='object1'/>" ),
  // 		newdiv2 = document.createElement( "div" ),
  // 		existingdiv1 = $( comment );
 
		// $("#confirmation_input").append( $newdiv1, [ newdiv2, existingdiv1 ] );
	});
};
