function appEqual(value1, value2) {
    return value1.replace(/[^a-zA-Z]/g, "").toLowerCase() == value2.replace(/[^a-zA-Z]/g, "").toLowerCase();
}

function roomBookable(room, from, to, prm) {
    if (prm && !room.prm)
        return false;
    var returnValue = true;
    room.bookings.forEach((booking) => {
        if (booking.from > from && booking.from < to)
            returnValue = false;
        if (booking.to > from && booking.to < to)
            returnValue = false;
    });
    return returnValue;
}

function displayResult(hotel, room, hotelId, roomId, from, to) {
    const div = document.createElement('div');
    const title = document.createElement('h2');
    const a = document.createElement('a');
    title.innerHTML = hotel.name;
    a.innerHTML = 'Book it now';
    a.href = `book?hotel=${hotelId}&room=${roomId}&from=${from}&to=${to}`;
    div.appendChild(title);
    div.appendChild(a);
    return div;
}