cef.on("vehspeedo_name", (name) =>
{
    $("#placeName").html(name);
});

cef.on("vehspeedo", (kmh/*, heal, kms, fuel*/) =>
{
    $("#numSpeed").html(kmh);
    /*$("#yeetHealth").css('width', heal+'%');
    $("#gearNum").html(kms);
    $("#yeetFuel").css('width', fuel+'%');*/
});