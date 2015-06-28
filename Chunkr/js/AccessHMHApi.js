/**
 * Created by Jesse on 6/27/15.
 */

var VND_HMH_API_KEY = "b7afa888aa188c9c68b0776ce2adba80";
var CLIENT_ID = "5529a3c4-c908-430b-b37d-4d9eef2d061f.hmhco.com";
var AUTHORIZATION;

var STUDENT = "gollum";
var STAFF_PERSON = "sauron";
var GRANT_TYPE = "password";
var PASSWORD = "password";


$(document).ready(function() {
    window.createFormParameters = function() {
        var documentFields = {};
        documentFields.tags = [];

        /*
        If someone wants to put in their own list of tags, they can enter numbers separated by strings.
        The default is to assign the same tag to each chunk that was part of a whole document.

        //var tags = $('#uiFormTags').val().split(",");

        for (var i = 0; i < tags.length; i++) {
            tags[i].trim();
            documentFields.tags.push(tags[i]);
        };
        */

        documentFields.file = $('#uiFormFile').val();
        documentFields.title = $('#uiFormTitle').val();

        createToken();
        var tag = createTag(documentFields.title);
        documentFields.tags.push(tag.id + "");

        for (var i = 0; i < 3; i++) {
            documentFields.note_html = i + " chunky chunks of text";
            $('#documentFields').val(JSON.stringify(documentFields));
            createChunk();
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

    $.ajax({
        type: "POST",
        url: "http://sandbox.api.hmhco.com/v1/documents",
        headers: {
            "Vnd-HMH-Api-Key": VND_HMH_API_KEY,
            "Authorization": AUTHORIZATION
        },
        contentType: false,
        mimeType: "multipart/form-data",
        processData: false,
        data: formData,
        dataType: "json",
        success: function (data) {
            alert("title: " + data.title +
                "\ntags: { tagName: " + data.tags[0].name + ", tagId: " + data.tags[0].id + "}" +
                "\nnote_html: " + data.note_html);
        },
        error: function (xhr, status, error, data) {
            alert(xhr + "\n" + status + "\n" + error + "\n" + data);
        }
    });
}

