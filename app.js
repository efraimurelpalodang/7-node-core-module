// core module
// core module adalah module bawaan dari nodeJs nya sendiri

//* file system
const fs = require('node:fs');

//* menuliskan string kedalam file secara synchronous
try {
  fs.writeFileSync('data/tes.txt', 'Hallo world secara synchronous');
} catch(e) {
  console.log(e);
}