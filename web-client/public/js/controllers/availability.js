seMiProfeApp.controller('availabilityController', function ($scope, availabilityService) {
  function saveEventArray(eventArray, i) {
    availabilityService.save(eventArray).then(function () {
      if (i === 0) {
        $('#event-delete').hide();
        $("#calendar").fullCalendar('refetchEvents');
      } else if (i === 1) {
        $('#form').hide();
        $("#calendar").fullCalendar('refetchEvents');
      }
    });
  }

  function toArray(event) {
    var eventArray = $.map(event, function (item) {
      return {
        title: 'No disponible',
        start: item.start,
        end: item.end,
      };
    });

    return eventArray;
  }

  function submitCalendarForm() {
    var eventArray = toArray($('#calendar').fullCalendar('clientEvents'));
    var start = $scope.availability.start;
    var end = $scope.availability.end;
    var obj = {
      title: 'No disponible',
      start: start.toString(),
      end: end.toString(),
    };

    eventArray.push(obj);
    saveEventArray(eventArray, 1);
  }

  exports.submitCalendarForm = submitCalendarForm;

  $('#event-delete-button').click(function (id) {
    $('#calendar').fullCalendar('removeEvents', id);
    saveEventArray(toArray($('#calendar').fullCalendar('clientEvents')), 0);
  });
});
