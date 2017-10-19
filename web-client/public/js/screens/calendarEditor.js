$("#form").hide();

$(document).ready(function () {
    $('#calendar').fullCalendar({
        defaultTimedEventDuration: '24:00:00',
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
            console.log("dsasdd");
            var event = $('#calendar').fullCalendar('clientEvents');
            console.log(event)
            var eventArray = $.map(event, function (item) {
                return {
                    title: 'No disponible',
                    start: item.start,
                    end: item.end
                }
            });
            var json = JSON.stringify(eventArray);
            console.log(eventArray);
            console.log(event);
            $.ajax({
                contentType: "application/json",
                type: 'POST',
                url: 'http://localhost:3000/save-availability',
                data: JSON.stringify(eventArray)

            });

        },
        eventSources: [

            {
                url: 'http://localhost:3000/availability.json',
                type: 'GET',
                data: {},
                color: 'red',
                textColor: 'black',

            }
        ],
        eventClick: function(calEvent, jsEvent, view) {
            id= calEvent.id;

        }
    });
});