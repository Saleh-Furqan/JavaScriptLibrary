/*
let myLibrary = [
    {
        title: "Hello World",
        author: "Saleh",
        pages: "69",
        read: true
    }
];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
  // do stuff here
}
*/

class Book {
	constructor(title, author, isbn, pages, read) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.pages = pages;
		this.read = read;
	}
}

class UI {
	static displayBooks() {
		const StoredBooks = [
			{
				title: "Book1",
				author: "John Doe",
				isbn: "3633363336",
				pages: "3633",
				read: "yes",
			},
			{
				title: "Book2",
				author: "Jane Doe",
				isbn: "6366636636",
				pages: "6366",
				read: "no",
			},
		];

		const books = StoredBooks;

		books.forEach((book) => UI.addBookToList(book));
	}

	static addBookToList(book) {
		const list = document.querySelector("#book-list");
		const row = document.createElement("tr");
		row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>${book.pages}</td>
            <td>${book.read}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
        `;

		list.appendChild(row);
	}

	static deleteBook(el) {
		if (el.classList.contains("delete")) {
			el.parentElement.parentElement.remove();
		}
	}

	static clearFields() {
		document.querySelector("#title").value = "";
		document.querySelector("#author").value = "";
		document.querySelector("#isbn").value = "";
		document.querySelector("#pages").value = "";
		document.querySelector("#read").value = "";
	}
}

document.addEventListener("DOMContentLoaded", UI.displayBooks);

document.querySelector("#book-form").addEventListener("submit", (e) => {
	e.preventDefault;

	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const isbn = document.querySelector("#isbn").value;
	const pages = document.querySelector("#pages").value;
	const read = document.querySelector("#read").value;

	if (title === "" || author === "" || isbn === "" || pages === "") {
		alert("Please Fill In All Fields");
	} else {
		const book = new Book(title, author, isbn, pages, read);

		UI.addBookToList(book);

		UI.clearFields();
	}
});

document.querySelector("#book-list").addEventListener("click", (e) => {
	UI.deleteBook(e.target);
});
