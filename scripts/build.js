const fs = require('fs');

const SOURCE_DIRECTORY = 'src/languages';
const OUTPUT_DIRECTORY = 'dist'
const LANGUAGE_FILE = `${OUTPUT_DIRECTORY}/languages.json`;
const getBooksFile = (lang) => `${OUTPUT_DIRECTORY}/${lang}/books.json`;

const languages = fs.readdirSync(SOURCE_DIRECTORY);

const createLanguages = () => {
  const output = JSON.stringify({languages});
  fs.writeFileSync(LANGUAGE_FILE, output);
};

const createBooks = () => {
  languages.map((lang) => {
    // TODO: get output from src/en/niv books function
    fs.writeFileSync(getBooksFile(lang), 'test');
  });
};

createLanguages();
createBooks();
