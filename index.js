
function fetchBooks() {
  
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); 
    })
    .then(data => {
      renderBooks(data); 
      return data; 
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error; 
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; 

  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
    .then(data => {
      console.log('Books data fetched:', data); 
    })
    .catch(error => {
      console.error('Error fetching books data:', error);
    });
});
