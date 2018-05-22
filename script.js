console.log("this script is loaded")

$("#mybtn").on("click", function (event) {
    event.preventDefault();
    alert("Helllooooooo");
});


// The function sets a cookie by adding together the cookiename, the cookie value, and the expires string.

//_1_SET A COOKIE
function setCookie(cname, cvalue, exdays) {
    // PARAMS: cookie (cname), 
    // the value of the cookie (cvalue)
    // number of days until the cookie should expire (exdays).
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// _2_GET A COOKIE
function getCookie(cname) {
    var name = cname + "=";
    //Take the cookiename as parameter (cname)
    //Variable (name) with the text to search for (cname + "=").
    var decodedCookie = decodeURIComponent(document.cookie);
    //Decode the cookie string, to handle cookies with special characters, e.g. '$' 
    var ca = decodedCookie.split(';');
    //ca is our Cookie Array Split document.cookie on semicolons into an array called ca (ca = decodedCookie.split(';')). REMEMBER 'document.cookie' will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// __3 CHECK A COOKIE
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        // If the cookie is set it will display a greeting.
        alert("Welcome again " + username);
    } else {
        // If the cookie is not set, it will display a prompt box, asking for the name of the user, and stores the username cookie for 365 days, by calling the setCookie function:
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}