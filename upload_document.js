var VND_HMH_API_KEY = "b7afa888aa188c9c68b0776ce2adba80";
var CLIENT_ID = "5529a3c4-c908-430b-b37d-4d9eef2d061f.hmhco.com";
var AUTHORIZATION;

var STUDENT = "gollum";
var STAFF_PERSON = "sauron";
var GRANT_TYPE = "password";
var PASSWORD = "password";

var NOTE_HTML = "For though result and talent add are parish valley. Songs in oh other avoid it hours woman style. In myself family as if be agreed. Gay collected son him knowledge delivered put. Added would end ask sight and asked saw dried house. Property expenses yourself occasion endeavor two may judgment she. Me of soon rank be most head time tore. Colonel or passage to ability.";
var CHUNK_IDS = [];
var listOfChunks = [];

$(document).ready(function() {
	window.createFormParameters = function() {
		var documentFields = {};
		documentFields.tags = [];
		documentFields.file = $('#uiFormFile').val();
		documentFields.title = $('#uiFormTitle').val();

		createToken();
		var tag = createTag(documentFields.title);
		documentFields.tags.push(tag.id + "");
		listOfChunks = delimit(consumeEssay(), "\n");

		for (var i = 0; i < listOfChunks.length; i++) {
			documentFields.note_html = listOfChunks[i];
			$('#documentFields').val(JSON.stringify(documentFields));
			createChunk();
		}

		//retreiveChunk(CHUNK_IDS[i]);

		$('#documentChunks').html('');

		for (var j = 0; j < listOfChunks.length; j++) {
			$('#documentChunks').append(listOfChunks[j] + "<br>");
		}
	}
});

function createToken() {
	$.ajax({
		type: "POST",
		url: "http://sandbox.api.hmhco.com/v1/sample_token?client_id=" + CLIENT_ID + "&grant_type=" + GRANT_TYPE + "&username=" + STUDENT + "&password=" + PASSWORD,
		headers: {
			"Vnd-HMH-Api-Key": VND_HMH_API_KEY
		},
		contentType: "application/x-www-form-urlencoded",
		async: false,
		dataType: "json",
		success: function (data) {
			AUTHORIZATION = data.access_token;
		},
		error: function (xhr, status, error, data) {
			alert(xhr + "\n" + status + "\n" + error + "\n" + data);
		}
	});
}

function createTag(assignmentName) {
	var result = { };
	var requestBody = {
		"name": assignmentName
	};

	$.ajax({
		type: "POST",
		url: "http://sandbox.api.hmhco.com/v1/tags",
		headers: {
			"Vnd-HMH-Api-Key": VND_HMH_API_KEY,
			"Authorization": AUTHORIZATION
		},
		async: false,
		contentType: "application/json",
		data: JSON.stringify(requestBody),
		dataType: "json",
		success: function (data) {
			result.name = data.name;
			result.id = data.id;
		},
		error: function (xhr, status, error, data) {
			alert(xhr + "\n" + status + "\n" + error + "\n" + data);
		}
	});

	return result;
};

function createChunk() {
	var formData = new FormData($('#ajaxform')[0]);
	var chunkId = 0;

	$.ajax({
		type: "POST",
		url: "http://sandbox.api.hmhco.com/v1/documents",
		headers: {
			"Vnd-HMH-Api-Key": VND_HMH_API_KEY,
			"Authorization": AUTHORIZATION
		},
		async: false,
		contentType: false,
		mimeType: "multipart/form-data",
		processData: false,
		data: formData,
		dataType: "json",
		success: function (data) {
			chunkId = data.secure_token;

			CHUNK_IDS.push(chunkId);
		},
		error: function (xhr, status, error, data) {
			alert(xhr + "\n" + status + "\n" + error + "\n" + data);
		}
	});

	return chunkId;
}

function retreiveChunk(chunkId) {
	var chunkContents = "";

	$.ajax({
		type: "GET",
		url: "http://sandbox.api.hmhco.com/v1/documents/" + chunkId,
		async: false,
		headers: {
			"Vnd-HMH-Api-Key": VND_HMH_API_KEY,
			"Authorization": AUTHORIZATION
		},
		dataType: "json",
		success: function (data) {
			chunkContents = data;
		},
		error: function (xhr, status, error, data) {
			alert(xhr + "\n" + status + "\n" + error + "\n" + data);
		}
	});

	return chunkContents;

}

function consumeEssay() {
	return $('#uiFormDocText').val();
};

function delimit(unchunkedText, delimiter) {
	return unchunkedText.split(delimiter);
};

/*
 var edit_chunk = function(){
 var take_in_doc = function() {
 return $('#uiFormDocText').val();
 };

 var delimit = function(unchunkedText, delimiter) {
 var chunked_text = unchunkedText.split(delimiter);
 /*$.each(chunked_text, function(index, element) {
 $( "#document_chunks" ).append( "<div>" );
 $( "#document_chunks" ).append( element );
 $( "#document_chunks" ).append( "</div>" );

 });	*/
/*
 return chunked_text;
 };

 $("#submit").click(function(){
 var comment = take_in_doc();
 listOfChunks = delimit(comment, delimiter);

 // var newdiv1 = $( "<div id='object1'/>" ),
 // 		newdiv2 = document.createElement( "div" ),
 // 		existingdiv1 = $( comment );

 // $("#confirmation_input").append( $newdiv1, [ newdiv2, existingdiv1 ] );
 });
 };*/
