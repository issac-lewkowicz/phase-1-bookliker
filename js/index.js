document.addEventListener("DOMContentLoaded", function() {
    getBooks();
   
});

function getBooks(){
    fetch('http://localhost:3000/books')
    .then(stuff => stuff.json())
    // invoke renderbooks
    .then(bookList => renderBooks(bookList))
  }

function renderBooks(books) {
    const list = document.querySelector('#list');
    books.forEach(book => {
      const li = document.createElement('li');      
      li.addEventListener('click', () => infoGetter(book));
      
      li.textContent = book.title;
      list.appendChild(li);
      
    })
    
}

//  need click event to render info below
//  thumbnail, description, list of users


function infoGetter (book) {
    const info = document.querySelector('#show-panel');
    info.innerHTML = "";
    const thumbnail = document.createElement('img');
    const title = document.createElement('h1');
    const subtitle = document.createElement('h2');
    const author = document.createElement('h3');
    const description = document.createElement('p');
    description.textContent = book.description;
    thumbnail.src = book.img_url;
    title.textContent = book.title;
    subtitle.textContent = book.subtitle;
    author.textContent = book.author;
    info.append(thumbnail, title, subtitle, author, description );
    console.log(info);
}
