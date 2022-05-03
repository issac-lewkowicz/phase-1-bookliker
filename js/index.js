document.addEventListener("DOMContentLoaded", function() {

    function getBooks(){
      return  fetch('http://localhost:3000/books')
        .then(stuff => stuff.json())
        .then(bookList => bookList);
    }
    console.log(getBooks())
});
