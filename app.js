const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("search-btn");
const errorDiv = document.getElementById("error");
const totalFound = document.getElementById("totalFound");


searchBtn.addEventListener("click", function () {
  const search = searchInput.value;
  if (search === "") {
    errorDiv.innerText = "Please enter a book name.";
    return;
  };
  const url = `http://openlibrary.org/search.json?q=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBooks(data.docs)) 
  searchInput.value = '';

});

const displayBooks = books => {
  const bookContainer = document.getElementById("book-container");
  bookContainer.textContent = '';
  errorDiv.innerText = "";
  if (books.length == 0) {
    errorDiv.innerText = "Opps !No book found .";
    return;
  }
  
  books.forEach(book => {
    
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    
    div.innerHTML = `
      </div>
      <!-- Body -->
      
      <div
        class="
          py-2
          d-flex
          justify-content-between
          align-items-center
          d-md-block
          text-md-left
        "
      >
        <h4></h4>
        <div class="col">
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Book Name: ${book.title}</h5>
            <p class="card-text">Author Name: ${book.author_name}</p>
            <br>
            <p class="card-text">Publisher: ${book.publisher}</p>
            <br>
            <p class="card-text">1st Publish: ${book.first_publish_year}</p>
          </div>
        </div>
      </div>
      </div>
      `;
    bookContainer.appendChild(div);
  });
}