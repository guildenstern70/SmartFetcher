
var apiVersion = 'http://fakestoresapi.mybluemix.net/api/version';

$(function() {
    $.ajax({
        url: apiVersion,
        crossDomain: true,
        dataType: "json",
        success: function (result)
        {
            $('#version').text(result.version);
        }
    });
});


$('#loadGoogle').click(function ()
{

    $('#googleText').text('Loading Google...');

    $.ajax({
        url: "/api/get-google", success: function (result)
        {
            $('#googleText').text(JSON.stringify(result));
        }
    });

});

$("#loadApple").click(function ()
{

    $('#appleText').text('Loading Apple...');

    $.ajax({
        url: "/api/get-apple", success: function (result)
        {
            $('#appleText').text(JSON.stringify(result));
        }
    });

});