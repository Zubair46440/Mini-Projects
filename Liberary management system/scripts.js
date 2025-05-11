const issueForm = document.getElementById('issue-form');
const returnForm = document.getElementById('return-form');
const recordList = document.getElementById('record-list');

let currentPage = 0;
const maxResults = 10;

async function fetchBooks() {
  const query = document.getElementById("searchQuery").value.trim() || "fiction";
  const startIndex = currentPage * maxResults;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=${maxResults}`;

  const loading = document.getElementById("loading");
  const bookList = document.getElementById("bookList");
  loading.style.display = "block";
  bookList.innerHTML = "";

  try {
    const response = await fetch(url);
    const data = await response.json();
    loading.style.display = "none";

    if (data.items) {
      displayBooks(data.items);
      updatePagination(data.totalItems);
    } else {
      bookList.innerHTML = "<p>No books found. Try another search.</p>";
    }
  } catch (err) {
    loading.style.display = "none";
    alert("Error fetching books. Try again later.");
  }
}

function displayBooks(books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach(book => {
    const info = book.volumeInfo;
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${info.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193?text=No+Image'}" alt="Book Cover" />
      <h3>${info.title || "No Title"}</h3>
      <p><strong>Author:</strong> ${info.authors?.join(", ") || "Unknown"}</p>
      <p><strong>Genre:</strong> ${info.categories?.join(", ") || "N/A"}</p>
    `;

    bookList.appendChild(card);
  });
}

function updatePagination(totalItems) {
  const totalPages = Math.ceil(totalItems / maxResults);
  document.getElementById("prevPage").disabled = currentPage === 0;
  document.getElementById("nextPage").disabled = currentPage >= totalPages - 1;
}

function changePage(delta) {
  currentPage += delta;
  fetchBooks();
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("📨 Message sent! We'll get back to you shortly.");
});