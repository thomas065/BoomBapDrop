
// get users input
function getNotes() {
    let firstNote = document.getElementById('firstNote').value;

    firstNote = parseInt(firstNote);

    if (Number.isInteger(firstNote)) {
        let generatedNotes = generateNotes(firstNote);

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
function generateNotes(maximum) {
    let notes = [];

    for (let n = 1; n <= maximum; n++) {
        if (n % 3 == 0) {
            if (n % 5 == 0) {
                notes.push('<div class="boom-bap">BoomBap</div>');
            } else {
                notes.push('<div class="boom">Boom</div>');
            }
        } else {
            if (n % 5 == 0) {
                notes.push('<div class="bap">Bap</div>');
            } else {
                notes.push(n);
            }
        }
    }
    return notes;
}

// display the notes on the page
function displayNotes(notes) {
    let html = '';

    for (let i = 0; i < notes.length; i++) {
        let currentNote = notes[i];

        html += `<tr><tr><td>${currentNote}</td></tr>`;
    }

    let tbody = document.getElementById('results');
    tbody.innerHTML = html;
}

// with each number, put it on the page

// given 2 values display the numbers 1-100

// when a number is divisible by the first value, display "Boom"

// When a number is divisible by the second value, display "Bap"

// when a number is divisible by both values, display "BoomBap...Drop!"
