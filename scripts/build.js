const fs = require('fs');

const SOURCE_DIRECTORY = 'src/languages';
const OUTPUT_DIRECTORY = 'dist'
const LANGUAGE_FILE = `${OUTPUT_DIRECTORY}/languages.json`;

const createLanguages = () => {
  fs.readdir(SOURCE_DIRECTORY, (err, languages) => {
    const json = {languages};
    fs.writeFile(LANGUAGE_FILE, JSON.stringify(json), (err) => {
      if (err) throw err;
    });
  });
};

createLanguages();
