// A custom function to set cookies
function setCookie(name, value, daysToLive) {
    // Encode value in order to escape semicolons, commas, and whitespace
    var cookie = name + "=" + encodeURIComponent(value);

    if (typeof daysToLive === "number") {
        /* Sets the max-age attribute so that the cookie expires
        after the specified number of days */
        cookie += "; max-age=" + (daysToLive * 24 * 60 * 60);

        document.cookie = cookie;
    }
}

// A custom function to get cookies
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}

 // A custom function to check cookies
//  function checkCookie() {
//     // Get cookie using our custom function
//     var firstName = getCookie("firstName");

//     if(firstName != null) {
//         alert("Welcome again, " + firstName);
//     } else {
//         firstName = prompt("Please enter your first name:");
//         if(firstName != "" && firstName != null) {
//             // Set cookie using our custom function
//             setCookie("firstName", firstName, 1);
//         }
//     }
// }
