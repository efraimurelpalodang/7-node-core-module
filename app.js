// core module
// core module adalah module bawaan dari nodeJs nya sendiri

//* file system
const fs = require('node:fs');

//* menuliskan string kedalam file secara synchronous
// try {
//   fs.writeFileSync('data/tes.txt', 'Hallo world secara synchronous');
// } catch(e) {
//   console.log(e);
// }

//* membaca isi file secara synchronous
// const data = fs.readFileSync('data/tes.txt', 'utf-8');
// console.log(data);

//! Asynchronous
//* menuliskan string kedalam file menggunakan Asynchronous
// fs.writeFile('data/tes.txt', 'Hallo world secara asynchronous', (err) => {
//   if (err) throw err;
//   console.log('File berhasil disimpan!!');
// })

//* membaca string kedalam file menggunakan Asynchronous
// fs.readFile('data/tes.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


//! Readline
const readline = require('node:readline');
const { stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

rl.question('Masukkan nama anda : ', (nama) => {
  rl.question('Masukkan nomor hp anda : ', (noHp) => {
    const contact = { nama, noHp };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log('TERIMA KASIH SUDAH MEMASUKKAN DATA!!');

    rl.close();
  })
})