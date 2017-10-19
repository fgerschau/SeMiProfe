$('#addAvailabilityButton').click(function(){
    $('#form').show();
});

function submitCalendarForm(){
    var start = document.forms["availability-form"]["start"].value;
    var end = document.forms["availability-form"]["end"].value;
    var obj = {
        title: "No disponible",
        start: start.toString(),
        end: end.toString()
    }
    var event = JSON.stringify(obj);
    $.ajax({
        contentType: "application/json",
        type: 'POST',
        url : 'http://localhost:3000/add-availability',
        data : event,
        success: function(text) {
            $("#calendar").fullCalendar('refetchEvents');
        }
    });
}
