
var xmlString = `
<hotels>
    <hotel name="Venus Hotel" location="Paris, France">
        <room number="100" floor="1" prm="true">
            <bed>140</bed>
        </room>
        <room number="101" floor="1" prm="true">
            <bed>140</bed>
        </room>
        <room number="102" floor="1" prm="true">
            <bed>140</bed>
        </room>
        <room number="103" floor="1" prm="true">
            <bed>90</bed>
            <bed>90</bed>
        </room>
        <room number="104" floor="1" prm="true">
            <bed>90</bed>
            <bed>90</bed>
        </room>
        <room number="105" floor="1">
            <bed>140</bed>
        </room>
        <room number="106" floor="1">
            <bed>140</bed>
        </room>
        <room number="107" floor="1">
            <bed>140</bed>
        </room>
        <room number="200" floor="2" prm="true">
            <bed>140</bed>
        </room>
        <room number="201" floor="2" prm="true">
            <bed>140</bed>
        </room>
        <room number="202" floor="2" prm="true">
            <bed>140</bed>
        </room>
        <room number="203" floor="2" prm="true">
            <bed>90</bed>
            <bed>90</bed>
        </room>
        <room number="204" floor="2" prm="true">
            <bed>90</bed>
            <bed>90</bed>
        </room>
        <room number="205" floor="2">
            <bed>140</bed>
        </room>
        <room number="206" floor="2">
            <bed>140</bed>
        </room>
        <room number="207" floor="2">
            <bed>140</bed>
        </room>
    </hotel>
</hotels>
`;

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var hotelData = [];
var hotelElement = xmlDoc.querySelector("hotel");
var hotelName = hotelElement.getAttribute("name");
var hotelLocation = hotelElement.getAttribute("location");
var roomElements = xmlDoc.querySelectorAll("room");
roomElements.forEach(function (roomElement) {
    var roomNumber = roomElement.getAttribute("number");
    var roomFloor = roomElement.getAttribute("floor");
    var roomPrm = roomElement.getAttribute("prm");
    if (roomPrm == 'true') {
        roomPrm = true;
    }
    else {
        roomPrm = false;
    }
    var beds = [];
    var bookings = [];
    var bedElements = roomElement.querySelectorAll("bed");
    var bookingElements = roomElement.querySelectorAll("booking");
    bedElements.forEach(function (bedElement) {
        var bedValue = bedElement.textContent;
        beds.push(bedValue);
    });
    bookingElements.forEach(function (bookingElement) {
        var bookingValue = {
            from: bookingElement.querySelector('from').textContent,
            to: bookingElement.querySelector('to').textContent
        };
        bookings.push(bookingValue);
    });
    var room = {
        number: roomNumber,
        floor: roomFloor,
        prm: roomPrm,
        beds: beds,
        bookings: bookings
    };
    hotelData.push(room);
});
var hotel = {
    name: hotelName,
    location: hotelLocation,
    rooms: hotelData,
};
var hotels = [hotel];