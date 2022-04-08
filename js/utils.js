'use strict'


function createBooksTable() {
    var books = getBooks()
    return books.reduce((acc, book) => {
        acc += createBookRow(book)
        return acc
    }, '');
}

function createBookRow(book) {
    
    var actionsStr = `<td><button class="read" onclick="openDetails('${book.id}')">Read</button></td>
    <td><button class="update" onclick="onUpdateBtn('${book.id}')">Update</button></td>
    <td><button class="delete" onclick="onRemoveBook('${book.id}')">Delete</button></td>`

    var rowStr = `<tr>
    <td>${book.id}</td>
    <td>${book.name}</td>
    <td>${book.price}</td>
    <td>${book.rate}</td>
    ${actionsStr}
    </tr>`

    return rowStr
}