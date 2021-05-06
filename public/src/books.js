function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
 let booksCheckedOut = books.filter((book) => book.borrows[0].returned === false)
 let booksCheckedIn = books.filter((book) => book.borrows[0].returned === true)
 let borrowStatus = [booksCheckedOut, booksCheckedIn]

 return borrowStatus
}

function getBorrowersForBook(book, accounts) {
  let borrow = book.borrows
  let result = borrow.map((status) => {
    let borrowInfo = findAuthorById(accounts, status.id)
    borrowInfo.returned = status.returned
    return borrowInfo
  }).slice(0, 10) // limits list to 10
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
