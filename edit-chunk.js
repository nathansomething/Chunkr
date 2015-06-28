var edit_chunk = function(){
	// var unchunked_text = "test text";
	// alert(unchunked_text);
	// alert("hiiiieee");
	
	var take_in_text = function() {
		return $("#edit_chunk").val();
	};

	
	$("#submit").click(function(){
		// alert("hiiiieee");
		// alert(take_in_text());
		// document.getElementById("confirmation_input").innerHTML = take_in_text();
		var comment = take_in_text();
		var delimiter = "/n"
		$( "#confirmation_input" ).append( "<div>" );
		$( "#confirmation_input" ).append( comment );
		$( "#confirmation_input" ).append( "</div>" );

		// var newdiv1 = $( "<div id='object1'/>" ),
  // 		newdiv2 = document.createElement( "div" ),
  // 		existingdiv1 = $( comment );
 
		// $("#confirmation_input").append( $newdiv1, [ newdiv2, existingdiv1 ] );
	});
};




// var DBInterface = { 
// 	var db = localStorage;
// 	store: function put(k, v) {
// 		db.setValue(k, v);
// 	},
// 	load: function get(k) {
// 		return db.getValue(k)
// 	}
// };
