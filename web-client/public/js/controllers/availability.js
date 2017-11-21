var availabilityController = seMiProfeApp.controller('availabilityController', function ($scope, availabilityService) {
    var id;
    var editable;
    var userId;
    var selectedUserId;
    availabilityService.getId().then(function (data) {
        userId = parseInt(data);
    });
    availabilityService.getSelectedId().then(function (data) {
        selectedUserId = parseInt(data);
        console.log(selectedUserId)
    });
    function saveEventArray(events, i) {
        var eventArray = getArray(events);
        availabilityService.save(eventArray,selectedUserId).then(function () {
            if (i === 0) {
                $('#event-delete').hide();
                $("#calendar").fullCalendar('refetchEvents');
            } else if (i === 1) {
                $('#form').hide();
                $("#calendar").fullCalendar('refetchEvents');
            }
        });
    }

    function getArray(events) {
        return $.map(events, function (item) {
            return {
                title: 'No disponible',
                start: item.start,
                end: item.end,
            };
        });
    }

    $scope.submitCalendarForm = function () {
        console.log(this.form.start.toISOString());
        var eventArray = getArray($('#calendar').fullCalendar('clientEvents'));
        var start = this.form.start;
        var end = this.form.end;
        var obj = {
            title: 'No disponible',
            start: start.toISOString(),
            end: end.toISOString(),
        };

        eventArray.push(obj);
        saveEventArray(eventArray, 1);
    };

    $('#event-delete-button').click(function () {
        $('#calendar').fullCalendar('removeEvents', id);
        saveEventArray($('#calendar').fullCalendar('clientEvents'), 0);
        id = -1;
    });
    $("#form").hide();
    $('#event-delete').hide();
    $(document).ready(setTimeout(function () {
        if(userId==selectedUserId){
            editable = true
        }else{
            editable = false
        }
        $('#calendar').fullCalendar({
            height: 'auto',
            slotLabelFormat: 'H:mm',
            defaultTimedEventDuration: '24:00:00',
            minTime: '08:00:00',
            maxTime: '21:00:00',
            slotDuration: '00:15:00',
            defaultView: 'agendaWeek',
            themeSystem: 'bootstrap3',
            editable: editable,
            droppable: editable,
            firstDay: 1,
            locale: 'es',
            eventColor: 'red',
            eventTextColor: 'black',
            eventDrop: function (event) {
                saveEventArray($('#calendar').fullCalendar('clientEvents'), 2);

            },
            eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
                saveEventArray($('#calendar').fullCalendar('clientEvents'), 2);
            },
            eventClick: function (calEvent, jsEvent, view) {
                id = calEvent.id;
                console.log(id);
                console.log(userId);
                calEvent.start.locale('es');
                try {
                    $('#event-delete-info').text(" " + calEvent.start.format('LL') + " de "
                        + calEvent.start.format('LT') + " hasta " + calEvent.end.format('LT'));
                } catch (err) {
                    console.log(err);
                    $('#event-delete-info').text(" " + calEvent.start.format('LL') + " a las " + calEvent.start.format('LT'));
                }
                $('#event-delete').show();
            },
            eventSources: [
                {
                    contentType: "application/json",
                    dataType : 'json',
                    url: 'http://localhost:3000/availability.json',
                    type: 'GET',
                    data: {
                        id: selectedUserId,
                    }
                }
            ]
        });
    },250));
});
