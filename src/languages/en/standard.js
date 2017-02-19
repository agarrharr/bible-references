import {generateArrayFrom1ToN} from 'utilities';

const BOOKS = {
  GENESIS: 'GENESIS',
};

const ABBREV = {
  GENESIS: 'GEN',
};

const PARTS = {
  OLD: 'OLD_TESTAMENT',
};

const SECTIONS = {
  PENTATEUCH: 'PENTATEUCH',
};

const books = [
  {
    book: BOOKS.GENESIS,
    abbreviation: ABBREV.GENESIS,
    chapters: generateArrayFrom1ToN(50),
    part: PARTS.OLD,
    section: SECTIONS.PENTATEUCH,
  },
];


const verses;

const groups;
