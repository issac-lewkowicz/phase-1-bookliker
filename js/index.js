document.addEventListener("DOMContentLoaded", function() {
    getBooks();
   
});

function getBooks(){
    fetch('http://localhost:3000/books')
    .then(stuff => stuff.json())
    // invoke renderbooks
    .then(bookList => renderBooks(bookList));
  }

function renderBooks(books) {
    const list = document.querySelector('#list')
    books.forEach(book => {
      const li = document.createElement('li')
      li.innerHTML = book.title
      list.appendChild(li)
      li.addEventListener('click', () => infoGetter(book))
    })
    
}

//  need click event to render info below
//  thumbnail, description, list of users


function infoGetter (book) {
    const info = document.querySelector('#show-panel')
    const thumbnail = document.createElement('img')
    const description = document.createElement('p')
    description.innerText = book.description
    thumbnail.src = book.img_url
    info.appendChild(thumbnail)
    info.appendChild(description)
    console.log(info)
}
