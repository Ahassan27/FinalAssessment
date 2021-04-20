function validate(event) {
    // TODO - write custom validation logic to validate the longitude and latitude
    // values. The latitude value must be a number between -90 and 90; the
    // longitude value must be a number between -180 and 180. If either/both are
    // invalid, show the appropriate error message in the form, and stop the
    // form from being submitted. If both values are valid, allow the form to be
    // submitted.
    //let lat = 0;
    //let lng = 0;
    let lati = document.getElementById("lat_one").value;
    let longi = document.getElementById("long_one").value;
    let errorMessage = document.getElementById("errorTextLat");
    let errorMessage_one = document.getElementById("errorTextLong");
    let valid = true;
    let valid_one = true;

    if (lati <= -90 || lati >= 90  || isNaN(lati)){
        valid = false;
        errorMessage.append("must be a valid number between -90 and 90");

    }
    if (valid === false){
        event.preventDefault();
    }
    if (longi <= -180 || longi >= 180 || isNaN(longi)){
        valid_one = false;
        errorMessage_one.append("must be a valid number between -180 and 180");
        }
   if (valid_one === false){
       event.preventDefault();
   }

    //console.log('TODO - validate the longitude, latitude values before submitting');
}
console.log(validate())

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
    const form = document.querySelector('form');
    form.onsubmit = validate;
};
