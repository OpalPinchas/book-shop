'use strict'

var gBooks



function getBooks() {
    gBooks = loadFromStorage('booksDB')
    if (!gBooks || gBooks.length === 0) {
        gBooks = createBooks()
    }

    saveToStorage('booksDB', gBooks)
    return gBooks
}


function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(book => book.id === bookId)

    gBooks.splice(bookIdx, 1)
    saveToStorage('booksDB', gBooks)
}

function addBook(name, price) {
    if (!price) price = 50
    if (!name) name = 'new book'
    var book = createBook(name, price)
    gBooks.push(book)
    saveToStorage('booksDB', gBooks)

}

function updateBook(price) {
    var bookId = loadFromStorage('bookToUpdate')
    var bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks[bookIdx].price = price
    saveToStorage('booksDB', gBooks)
}

function bookToUpdate(bookId) {
    saveToStorage('bookToUpdate', bookId)
}

function getBookById(bookId) {
    return gBooks.find(book => book.id === bookId)
}

function updateRate(value, bookId) {
    var bookIdx = gBooks.findIndex(book => book.id === bookId)
    var newRate = gBooks[bookIdx].rate + value
    if (newRate < 0 || newRate > 10) return
    gBooks[bookIdx].rate = newRate
    saveToStorage('booksDB', gBooks)
}



function createBooks() {
    var books = [
        createBook('book 1', 20,),
        createBook('book 2', 30),
        createBook('book 3', 40),
        createBook('book 4', 50)
    ]
    return books
}

function createBook(name, price) {
    return {
        id: makeId(),
        name,
        price,
        rate: 0
    }
}

function makeId(length = 3) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var txt = '';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}