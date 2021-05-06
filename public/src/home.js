function getTotalBooksCount(books) {
  let counter = 0;
  for (let i = 0; i < books.length; i++) {
    counter++;
  }
  return counter;
}

function getTotalAccountsCount(accounts) {
  let counter = 0;
  for (let i = 0; i < accounts.length; i++) {
    counter++;
  }
  return counter;
}

/*function getBooksBorrowedCount(books) {
  let counter = 0
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      counter++
    }
  }
  return counter
}*/

function getBooksBorrowedCount(books) {
  let result = books.reduce((acc, book) => {
    return acc + (book.borrows[0].returned === false);
  }, 0);
  return result;
}

function getMostCommonGenres(books) {
  let common = [];

  for (let book of books) {
    const genre = common.find((current) => current.name === book.genre);
    if (genre) {
      genre.count++;
    } else {
      common.push({ name: book.genre, count: 1 });
    }
  }
  let topGenre = common.sort((countA, countB) =>
    countA.count < countB.count ? 1 : -1
  );
  return topGenre.slice(0, 5);
}

function getMostPopularBooks(books) {
  let popular = [];

  for (let book of books) {
    const title = popular.find(
      (currentBook) => currentBook.name === book.title
    );

    popular.push({ name: book.title, count: book.borrows.length });
  }

  let mostPopular = popular.sort((countA, countB) =>
    countA.count < countB.count ? 1 : -1
  );
  return mostPopular.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];

  let matchingAuthor = books.filter((book) =>
    authors.find((author) => author.id === book.authorId)
  );
  matchingAuthor.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    result.push({
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length,
    });
  });

  let finalResult = result.sort((countA, countB) =>
    countA.count < countB.count ? 1 : -1
  );
  return finalResult.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
