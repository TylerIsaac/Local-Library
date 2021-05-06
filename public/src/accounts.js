const findAccountById = (accounts, id) => {
  return accounts.find((account) => account.id === id);
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
    nameA.name.last.toLowerCase() < nameB.name.last.toLowerCase() ? -1 : 1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  for (let i = 0; i < books[0].borrows.length; i++) {
    counter++;
  }
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  let taken = [];
  books.forEach((book) => {
    if (book.borrows.find((item) => item.id === account.id && !item.returned)) {
      taken.push(book);
    }
  });
  taken.forEach((book) => {
    let findAuthor = authors.find((person) => person.id === book.authorId);
    book["author"] = findAuthor;
  });
  return taken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
