

const fetchBooks = async () => {
    const books = fetch("http://localhost:9001/api/v1/books").then((res) => res.json());
    return books;
} 

const booksContainer = document.querySelector(".container");
console.log(booksContainer);
const displayBooks =  async() => {
    const books = await fetchBooks();
    books.items?.forEach((book) => {
        const element = document.createElement("h2");
        element.innerHTML = `${book.name}`
        booksContainer.appendChild(element);
    })
    console.log(books?.items);
}

window.addEventListener('load', displayBooks);