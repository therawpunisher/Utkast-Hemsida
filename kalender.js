document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'sv', // Svenska
        initialView: 'timeGridWeek', // Tidsschema
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridDay,timeGridWeek,dayGridMonth'
        },
        firstDay: 1, // Starta veckan på måndag
        slotMinTime: '08:00:00', // Startar vid 08:00
        slotMaxTime: '17:00:00', // Slutar vid 17:00
        slotDuration: '00:30:00', // 30-minutersintervaller
        slotLabelFormat: { // 24-timmarsformat
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false
        },
        buttonText: { // Översätt knappar
            today: 'Idag',
            month: 'Månad',
            week: 'Vecka',
            day: 'Dag',
            prev: 'Föregående',
            next: 'Nästa'
        },
        events: [
            {
                title: 'Fotvårdsbehandling',
                start: '2025-04-01T09:00:00',
                end: '2025-04-01T10:00:00'
            },
            {
                title: 'Lymfmassage',
                start: '2025-04-02T13:00:00',
                end: '2025-04-02T14:30:00'
            }
        ]
    });

    calendar.render(); // Visa kalendern
});
