// function displayMessage() {
//     // get the text out of our <input> and assign it to a variable
//     let msg = document.getElementById('secondNote').value;

//     // alert('Hello Guardian Cohort!')
// }

// get users input
function getNotes() {
    let firstNote = document.getElementById('firstNote').value;

    firstNote = parseInt(firstNote);

    if (Number.isInteger(firstNote)) {
        let generatedNotes = generateNotes(firstNote);

        displayNotes(generatedNotes);

    //     Swal.fire({
    //         backdrop: false,
    //         title: `<strong>BoomBap!</strong>`,
    //         text: `It's a SMASH hit!`, // <---- replace this text with that variable
    //         imageUrl: 'https://unsplash.it/400/200',
    //         imageWidth: 400,
    //         imageHeight: 200,
    //         imageAlt: 'Custom image',
    //         timerProgressBar: true,
    //     });
    // } else {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Yikes, that hurt my ears',
    //         backdrop: false,
    //     });
    }
}

// generate a list of all notes
function generateNotes(first) {
    let notes = [];

    for (let n = first; n <= 100; n++) {
        if (n % 3 == 0) {
            notes.push('Boom')
        } else {
            notes.push(n)
        }
    }
    return notes;
}

// display the notes on the page
function displayNotes(notes) {

    let html = "";

    for (let i = 0; i < notes.length; i++) {
    let currentNote = notes[i];

    // if (currentNote % 3 == 0) {
    //     if (currentNote % 5 == 0) {
    //         'BoomBap'
    //     } else {
    //         'Bap'
    //     }
    // } else {
    //     if (currentNote % 5 == 0) {
    //         'Boom'
    //     } else {
    //         currentNote
    //     }
    // }
    html += `<tr><td>${currentNote}</td></tr>`
}

    let tbody = document.getElementById('results');
    tbody.innerHTML = html;
}

// with each number, put it on the page

// given 2 values display the numbers 1-100

// when a number is divisible by the first value, display "Boom"

// When a number is divisible by the second value, display "Bap"

// when a number is divisible by both values, display "BoomBap...Drop!"
