seMiProfeApp.controller('availabilityController', function ($scope, availabilityService, userService) {
  var id;
  var editable;
  var userId;
  var selectedUserId;

  $scope.init = function (selectedUser) {
    if (selectedUser && selectedUser.id) {
      selectedUserId = selectedUser.id;
    }

    userService.getLoggedUser().then(function (user) {
      if (user && user.id) {
        userId = user.id;
      }
    });
  };

  function saveEventArray(events, i) {
    var eventArray = getArray(events);
    availabilityService.save(eventArray, selectedUserId).then(function () {
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
    var eventArray = getArray($('#calendar').fullCalendar('clientEvents'));
    var start = this.form.start;
    var end = this.form.end;
    var obj = {
      title: 'Disponible',
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
  $('#form').hide();
  $('#event-delete').hide();
  $(document).ready(setTimeout(function () {
    if (userId === selectedUserId) {
      editable = true
    } else {
      editable = false
    }
    $('#calendar').fullCalendar({
      height: 'parent',
      slotLabelFormat: 'H:mm',
      defaultTimedEventDuration: '24:00:00',
      minTime: '08:00:00',
      maxTime: '23:00:00',
      slotDuration: '00:15:00',
      defaultView: 'agendaWeek',
      themeSystem: 'bootstrap3',
      editable: editable,
      droppable: editable,
      firstDay: 1,
      locale: 'es',
      eventColor: 'green',
      eventTextColor: 'black',
      eventDrop: function (event) {
        saveEventArray($('#calendar').fullCalendar('clientEvents'), 2);
      },
      eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
        saveEventArray($('#calendar').fullCalendar('clientEvents'), 2);
      },
      eventClick: function (calEvent, jsEvent, view) {
        id = calEvent.id;
        calEvent.start.locale('es');
        try {
          $('#event-delete-info').text(' ' + calEvent.start.format('LL') + ' de '
              + calEvent.start.format('LT') + " hasta " + calEvent.end.format('LT'));
        } catch (err) {
          console.log(err);
          $('#event-delete-info').text(' ' + calEvent.start.format('LL') + ' a las ' + calEvent.start.format('LT'));
        }

        $('#event-delete').show();
      },
      eventSources: [{
        contentType: 'application/json',
        dataType: 'json',
        url: apiUrl + '/availability',
        type: 'GET',
        data: {
          id: selectedUserId,
        },
      }],
    });
  }, 250));
});
