// Definitions

var friends = ['Josh, ', 'Jake, ', 'Garrett, ', 'Will, ', 'Java, '];
var weapons = ['pencil ', 'machete ', 'candlestick ', 'ladel ', 'firepoker ', 'letter-opener ', 'wine bottle ', 'piano wire ', 'ink quill ', 'gun ', 'club ', 'mallet ', 'frying pan ', 'box-cutter ', 'glass ', 'toaster ', 'sword ', 'statue ', 'shoe ', 'vase ']
var places = ['bathroom!', 'parlor!', 'study!', 'wine-cellar!', 'bedroom!', 'garage!', 'attic!', 'stables!', 'kitchen!', 'closet!'];

for (var i = 1; i < 101; i++) {
    createH3(i);
};
function createH3(count) {
    var h3 = document.createElement('h3');
    h3.setAttribute("id", count);
    h3.innerHTML = `Accusation ${count}`;
    document.body.appendChild(h3);
    h3.addEventListener('click', () => accuse(count));
};
function accuse(i) {
    console.log("I accuse " + friends[i % friends.length] + "with the " + weapons[i % weapons.length] + "in the " + places[i % places.length])
    alert("I accuse " + friends[i % friends.length] + "with the " + weapons[i % weapons.length] + "in the " + places[i % places.length])
};