function ActivateGeoLocation()
{
    OutputBox = document.getElementById("GeoLocationLog");

    OutputBox.innerHTML = "Start: <br/>";

    if (navigator.geolocation) {
        OutputBox.innerHTML += "GeoLocation Supported.. <br/>";

        var options = {
            enableHighAccuracy: true,
            timeout: 3000,
            maximumAge: 20000
        };

        navigator.geolocation.getCurrentPosition(showPosition, showError, options);
    }
    else OutputBox.innerHTML += "GeoLocation Not Supported!";
};

function showError(error) {
    OutputBox = document.getElementById("GeoLocationLog");
    OutputBox.innerHTML += error.message;
};

function showPosition(position) {
    OutputBox = document.getElementById("GeoLocationLog");

    var datetime = new Date(position.timestamp).toLocaleString();
    OutputBox.innerHTML += "Latitude: " + position.coords.latitude + "<br />"
        + "Longitude: " + position.coords.longitude + "<br />"
        + "Timestamp: " + datetime; + "<br />";
};

function SetTestLocalStorage() {

    var LogBox = document.getElementById("LocalStorageLog")
    if (supports_html5_storage()) {
        window.addEventListener('storage', RespondToChange, false);

        var value = localStorage.getItem("TestValue");
        LogBox.innerHTML += "The Value is :" + value + " </br>";
        localStorage.setItem("TestValue", "THIS HAS NOW BEEN SET");
        var value = localStorage.getItem("TestValue");
        LogBox.innerHTML += "The Value is :" + value + " </br>";

    } else {
        LogBox.innerHTML += "<p> Not Supported </p>";       
    }
}

function RespondToChange(e) {
    var LogBox = document.getElementById("LocalStorageLog");
    var value = localStorage.getItem("TestValue");
    LogBox.innerHTML += "The Value has change outside of page it is now:" + value + " </br>";
}

function RemoveTestLocalStorage()
{

    var LogBox = document.getElementById("LocalStorageLog")
    if (supports_html5_storage()) {

        var value = localStorage.getItem("TestValue");
        LogBox.innerHTML += "The Value is :" + value + " </br>";
        LogBox.innerHTML += "REMOVING VALUE... </br>";
        localStorage.removeItem("TestValue");
        var value = localStorage.getItem("TestValue");
        LogBox.innerHTML += "The Value is :" + value + " </br>";

    } else {
        LogBox.innerHTML += "<p> Not Supported </p>";
    }
}

function SetTestSessionStorage() {

    var LogBox = document.getElementById("SessionStorageLog")
    if (supports_html5_storage()) {

        var value = sessionStorage.getItem("TestValue");
        LogBox.innerHTML += "The Value is :" + value + " </br>";
        sessionStorage.setItem("TestValue", "THIS Session storage HAS NOW BEEN SET");
        var value = sessionStorage.getItem("TestValue");
        LogBox.innerHTML += "The Value is :" + value + " </br>";

    } else {
        LogBox.innerHTML += "<p> Not Supported </p>";
    }
}

function RemoveTestSessionStorage() {

    var LogBox = document.getElementById("SessionStorageLog")
    if (supports_html5_storage()) {

        var value = sessionStorage.getItem("TestValue");
        LogBox.innerHTML += "The Value is :" + value + " </br>";
        LogBox.innerHTML += "REMOVING Session storage VALUE... </br>";
        sessionStorage.removeItem("TestValue");
        var value = sessionStorage.getItem("TestValue");
        LogBox.innerHTML += "The Value is :" + value + " </br>";

    } else {
        LogBox.innerHTML += "<p> Not Supported </p>";
    }
}

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}