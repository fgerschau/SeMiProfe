
$(document).ready(function() {
    $('#calendar').fullCalendar({
        defaultView : 'agendaWeek',
        themeSystem:'bootstrap3',
        editable:true,
        droppable:true,
        firstDay:1,
        locale: 'es',
        eventResourceEditable: true,
        eventColor: 'red',
        eventTextColor: 'black',
        eventDrop: function(event) {
            console.log("dsasdd");
            var event = $('#calendar').fullCalendar('clientEvents');
            var eventArray = $.map(event,function (item) {
                return{
                    title: 'No disponible',
                    start: item.start.toString(),
                    end: item.end.toString()
                }
            });
            var json = JSON.stringify(eventArray);
            console.log(eventArray);
            console.log(event);
            $.ajax({
                contentType: "application/json",
                type: 'POST',
                url : 'http://localhost:3000/save-availability',
                data : JSON.stringify(eventArray)

            });

        },


        eventSources: [

            {
                url: 'http://localhost:3000/availability.json',
                type: 'GET',
                data: {
                },
                error: function() {
                    alert('there was an error while fetching events!');
                },
                color: 'red',   // a non-ajax option
                textColor: 'black', // a non-ajax option

            }
            ]

    });
    //Guardar eventos del calendario en base de datos.
    /* $('.bot').click(function(){
        var url = '/heik'
        $('#calendar').fullCalendar('updateEvents',$('#calendar').fullCalendar('clientEvents'));
        var event = $('#calendar').fullCalendar('clientEvents');
        var eventArray = $.map(event,function (item) {
            return{
                id: item.id,
                resourceId : item.resourceId,
                title: 'No disponible',
                start: item.start,
                end: item.end
            }
        });
        var json = JSON.stringify(eventArray);
        console.log(eventArray.toString());
        console.log(event);
            $.ajax({
                type: 'POST',
                dataType: 'json',
                contentType: "application/json; charset=UTF-8",
                url : url,
                data : json,

            });

    }); */

});