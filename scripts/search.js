var search = document.querySelector('.search form');
var results = document.querySelector('.results');

search.onsubmit = function () {
    results.innerHTML = '';
    const formData = new FormData(this);
    for (var hotelId = 0; hotelId < hotels.length; hotelId++) {
        const hotel = hotels[hotelId];
        if (appEqual(hotel.location, formData.get('location'))) {
            for (var roomId = 0; roomId < hotel.rooms.length; roomId++) {
                const room = hotel.rooms[roomId];
                if (roomBookable(room, formData.get('from'), formData.get('to'), formData.get('prm'))) {
                    results.appendChild(displayResult(hotel, room, hotelId, roomId, formData.get('from'), formData.get('to')));
                    break;
                }
            };
        }
    };
}