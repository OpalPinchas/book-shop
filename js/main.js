'use strict'


function renderBooks() {
    var strHTML = createBooksTable()
    document.querySelector('.books').innerHTML = strHTML
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onCreateBook(elBtn) {
    elBtn.setAttribute('hidden', true)
    document.querySelector('.add-book').removeAttribute('hidden')
}

function onAddBook(ev) {

    ev.preventDefault()
    const elName = ev.target[0]
    const elPrice = ev.target[1]

    addBook(elName.value, +elPrice.value)
    renderBooks()

    elName.value = ''
    elPrice.value = ''
    document.querySelector('.add-book').setAttribute('hidden', true)
    document.querySelector('.create-book').removeAttribute('hidden')

}

function onUpdateBtn(bookId) {
    bookToUpdate(bookId)
    document.querySelector('.update-book').removeAttribute('hidden')
}

function onUpdateBook(ev) {

    ev.preventDefault()
    const elPrice = ev.target[0]
    if (!elPrice.value) {
        document.querySelector('.update-book').setAttribute('hidden', true)
        return
    }
    
    updateBook(elPrice.value)
    renderBooks()

    elPrice.value = ''
    document.querySelector('.update-book').setAttribute('hidden', true)

}

function openDetails(bookId) {

    var ElDetails = document.querySelector('.details-modal')
    renderDetails(bookId)
    ElDetails.removeAttribute('hidden')

}

function closeDetails() {
    var ElDetails = document.querySelector('.details-modal')
    ElDetails.setAttribute('hidden', true)
}

function renderDetails(bookId) {
    var book = getBookById(bookId)
    var ElDetails = document.querySelector('.details-modal')

    ElDetails.querySelector('.name').innerText = book.name
    ElDetails.querySelector('.price').innerHTML = book.price
    ElDetails.querySelector('.rate').innerHTML = book.rate
    ElDetails.querySelector('.rate-count').innerHTML = book.rate

    var elBtns = ElDetails.querySelectorAll('.rate-btn')
    elBtns[0].setAttribute('onclick', `onRate(-1, '${bookId}')`)
    elBtns[1].setAttribute('onclick', `onRate(1, '${bookId}')`)

}

function onRate(value, bookId) {
    updateRate(value, bookId)
    renderRate(bookId)
}

function renderRate(bookId) {
    var book = getBookById(bookId)
    document.querySelector('.rate-count').innerHTML = book.rate
    renderBooks()
}
