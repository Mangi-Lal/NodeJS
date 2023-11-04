#!/usr/bin/env node

const note = process.argv[2]

const newNote = {
    content: note,
    id: Date.now()
}

console.log(newNote);
// console.log('Mangi Lal');

// const Alert = alert("oops....");

// console.log(Alert);

// console.log(process.argv);