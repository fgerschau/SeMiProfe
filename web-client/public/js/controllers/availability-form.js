
$('#addAvailabilityButton').click(function(){
    $('#form').show();
});
$('#event-delete-button').click(function(){
    $('#calendar').fullCalendar('removeEvents',id);
    saveEventArray(toArray($('#calendar').fullCalendar('clientEvents')),0);
});
function submitCalendarForm(){
    var eventArray = toArray($('#calendar').fullCalendar('clientEvents'));
    var start = document.forms["availability-form"]["start"].value;
    var end = document.forms["availability-form"]["end"].value;
    var obj = {
        title: "No disponible",
        start: start.toString(),
        end: end.toString()
    }
    eventArray.push(obj);
    saveEventArray(eventArray,1);
}
function saveEventArray(eventArray,i){
    $.ajax({
        contentType: "application/json",
        type: 'POST',
        url: 'http://localhost:3000/save-availability',
        data: JSON.stringify(eventArray),
        success: function(){
            if(i==0){
                $('#event-delete').hide();
                $("#calendar").fullCalendar('refetchEvents');
            }if(i==1){
                $('#form').hide();
                $("#calendar").fullCalendar('refetchEvents');
            }
        }
    });
}
function toArray(event){
    var eventArray = $.map(event, function (item) {
        return {
            title: 'No disponible',
            start: item.start,
            end: item.end
        }
    });
    return eventArray;
}
