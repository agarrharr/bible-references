import {generateArrayFrom1ToN} from 'utilities';

const BOOKS = {
  GENESIS: {
    BOOK: 'Genesis',
    ABBREV: 'Gen',
  },
};

const PARTS = {
  OLD: 'Old Testament',
  NEW: 'New Testament',
};

const SECTIONS = {
  PENTATEUCH: 'Pentateuch',
};

const books = [
  {
    book: BOOKS.GENESIS.BOOK,
    abbreviation: BOOK.GENESIS.ABBREV,
    chapters: generateArrayFrom1ToN(50),
    part: PARTS.OLD,
    section: SECTIONS.PENTATEUCH,
  },
];


const verses;

const groups;
