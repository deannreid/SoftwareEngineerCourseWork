// Version: 1.0
// Last Modified: 2021.05.01
// Description: Helper functions for Dean's Portfolio

// Log Helper Function to simplify console.log
    // Usage: log('inside coolFunc', this, arguments);
function log() {
    console.log.apply(console, arguments);
}

// Function to get the current date
function getCurrentDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1; // January is 0
    var year = date.getFullYear();
    return month + "/" + day + "/" + year;
}

// Function to get the current time
function getCurrentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return hours + ":" + minutes + ":" + seconds;
}

// Function to get the current date and time
function getCurrentDateTime() {
    return getCurrentDate() + " | " + getCurrentTime();
}
