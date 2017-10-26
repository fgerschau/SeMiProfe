var id;
$("#form").hide();
$('#event-delete').hide();
$(document).ready(function () {
    $('#calendar').fullCalendar({
        height: 'auto',
        slotLabelFormat: 'H:mm',
        defaultTimedEventDuration: '24:00:00',
        minTime: '08:00:00',
        maxTime: '21:00:00',
        slotDuration: '00:15:00',
        defaultView: 'agendaWeek',
        themeSystem: 'bootstrap3',
        editable: true,
        droppable: true,
        firstDay: 1,
        locale: 'es',
        eventColor: 'red',
        eventTextColor: 'black',
        eventDrop: function (event) {
            saveEventArray(toArray($('#calendar').fullCalendar('clientEvents')),2);
            },
        eventResize: function (event, delta, revertFunc, jsEvent, ui, view ) {
            saveEventArray(toArray($('#calendar').fullCalendar('clientEvents')),2);
            },
        eventClick: function(calEvent, jsEvent, view) {
            id = calEvent.id;
            calEvent.start.locale('es');
            try{
                $('#event-delete-info').text(" " + calEvent.start.format('LL') + " de "
                    + calEvent.start.format('LT') + " hasta " +  calEvent.end.format('LT'));
            }catch(err){
                console.log(err);
                $('#event-delete-info').text(" " + calEvent.start.format('LL') + " a las " + calEvent.start.format('LT'));
            }
            $('#event-delete').show();
        },
        eventSources: [
            {
                url: 'http://localhost:3000/availability.json',
                type: 'GET'
            }
        ]
    });
});