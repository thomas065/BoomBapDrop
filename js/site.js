function displayMessage() {
    // get the text out of our <input> and assign it to a variable
    let msg = document.getElementById('secondNote').value;

    // alert('Hello Guardian Cohort!')
    Swal.fire(
        {
            icon: 'success',
            backdrop: false,
            title: `<strong>BoomBap!</strong>`,
            text: `It's a SMASH hit!`, // <---- replace this text with that variable
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        }
    );
}

// get the start and end numbers from the page 
function getNotes() {
    let firstNote = getElementById('firstNote').value;

    let secondNote = getElementById('secondNote').value;

}

// generate a list of all notes between the first and second
function generateNotes(first, second) {

}

// display each of those numbers on the page
function displayNumbers() {

}

 // with each number, put it on the page






// given 2 values display the numbers 1-100

// when a number is divisible by the first value, display "Boom"

// When a number is divisible by the second value, display "Bap"

// when a number is divisible by both values, display "BoomBap...Drop!"