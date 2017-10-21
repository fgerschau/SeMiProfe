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
        lazyFetch: false,
        editable: true,
        droppable: true,
        firstDay: 1,
        locale: 'es',
        eventResourceEditable: true,
        eventColor: 'red',
        eventTextColor: 'black',
        eventDrop: function (event) {
            saveEvents();
        },
        eventResize: function (event, delta, revertFunc, jsEvent, ui, view ) {
            saveEvents();
        },
        eventClick: function(calEvent, jsEvent, view) {
            id = calEvent.id;
            calEvent.start.locale('es')
            console.log($('#calendar').fullCalendar('clientEvents'));
            try{
                $('#event-delete-info').text(" " + calEvent._id + " " + calEvent.start.format('LL') + " de "
                    + calEvent.start.format('LT') + " hasta " +  calEvent.end.format('LT'));
            }catch(err){
                console.log(err);
                $('#event-delete-info').text(calEvent.title + " el " + calEvent.start.day() + "-" + calEvent.start.month() +
                    "-" + calEvent.start.year() + " de " + calEvent.start.hours() + ":" + calEvent.start.minutes());
            }
            $('#event-delete').show();
        },
        eventSources: [
            {
                url: 'http://localhost:3000/availability.json',
                type: 'GET',
                data: {},
                color: 'red',
                textColor: 'black',
            }
        ]
    });
});