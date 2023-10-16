
// get users input
function getNotes() {
    let bars = document.getElementById('bars').value;
    let startNote = document.getElementById('startNote').value;
    let stopNote = document.getElementById('stopNote').value;

    bars = parseInt(bars);
    startNote = parseInt(startNote);
    stopNote = parseInt(stopNote);

    if (Number.isInteger(startNote) && Number.isInteger(stopNote) && Number.isInteger(bars)
        && (startNote != 0)
        && (stopNote != 0)) {
        let generatedNotes = generateNotes(startNote, stopNote, bars);

        displayNotes(generatedNotes);

        Swal.fire({
            showConfirmButton: false,
            backdrop: false,
            title: `<strong>BoomBap!</strong>`,
            text: `It's a SMASH hit!`, // <---- replace this text with that variable
            imageUrl: '/img/bbSuccess.svg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            timerProgressBar: true,
            timer: 1250,
        });
    } else {
        Swal.fire({
            showConfirmButton: false,
            icon: 'error',
            title: 'Yuck, that hurt my ears',
            backdrop: false,
            imageUrl: '/img/bbReaction.svg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            timerProgressBar: true,
            timer: 1250,
        });
    }
}

// generate a list of all notes
function generateNotes(start, stop, maximum) {
    let notes = [];

    for (let i = 1; i <= maximum; i++) {
        if (i % start == 0 && i % stop == 0) {
            notes.push('<div class="boom-bap">BoomBap</div>');
        } else if (i % start == 0) {
            notes.push('<div class="boom">Boom</div>');
        } else if (i % stop == 0) {
            notes.push('<div class="bap">Bap</div>');
        } else {
            notes.push(i);
        }
    }
    return notes;
}

// display the notes on the page
function displayNotes(notes) {
    let html = '';

    for (let i = 0; i < notes.length; i++) {
        let currentNote = notes[i];

        html += `<div>${currentNote}</div>`;
    }

    let tbody = document.getElementById('results');
    tbody.innerHTML = html;
}

// with each number, put it on the page

// given 2 values display the numbers 1-100

// when a number is divisible by the first value, display "Boom"

// When a number is divisible by the second value, display "Bap"

// when a number is divisible by both values, display "BoomBap...Drop!"
