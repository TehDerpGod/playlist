/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sunflower","Slow Dancing In the Dark","Test Drive","Stand By Me"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = ["https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Ff8df6f94846dc4a8f2e1b94d7abd1cb5.1000x1000x1.jpg","https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F4e80f6db69b69e16924ed12981b59a0a.1000x1000x1.png","https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fc69da94504800247639f676890153fa9.1000x1000x1.jpg","http://image.iheart.com/WMG4/Thumb_Content/Full_PC/WMG/Dec11/121911/20120103_1217_25/075679963673/075679963673.jpg"];
var artists = ["Post Malone","Joji","Joji","Prince Royce"];
var song_lengths = ["2:42","3:30","3:00","3:30"];
var links = ["https://www.youtube.com/watch?v=ApXoWvfEYVU","https://www.youtube.com/watch?v=5xwmensMDn0","https://www.youtube.com/watch?v=s5-FY5M4PqE","https://www.youtube.com/watch?v=UqWexqEIn68"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
