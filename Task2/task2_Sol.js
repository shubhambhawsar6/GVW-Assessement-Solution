function validation(pin)
{
    var pin = document.getElementById('pin').value;

    pinRegexPattern = /^\d{7}|\d{9}|\d{10}$/;

    if (pin.match(pinRegexPattern)) {
        alert("Pin Number is Validated!");
        return true;
    }

    else {
        alert("You have entered an invalid Pin!");
        return false;
    }
}