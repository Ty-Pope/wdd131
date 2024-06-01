window.addEventListener("load", createInfo);

const articles = [
 {
  id: 1,
  title: "Septimus Heap Book One: Magyk",
  date: "July 5, 2022",
  description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
  imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
  imgAlt: "Book cover for Septimus Heap 1",
  ages: "10-14",
  genre: "Fantasy",
  stars: "⭐⭐⭐⭐",
 },
 {
  id: 2,
  title: "Magnus Chase Book One: Sword of Summer",
  date: "December 12, 2021",
  description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
  imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
  imgAlt: "Book cover for Magnus Chase 1",
  ages: "12-16",
  genre: "Fantasy",
  stars: "⭐⭐⭐⭐",
 },
 {
  id: 3,
  title: "Belgariad Book One: Pawn of Prophecy",
  date: "Feb 12, 2022",
  description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
  imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
  imgAlt: "Book cover for Pawn of Prophecy",
  ages: "12-16",
  genre: "Fantasy",
  stars: "⭐⭐⭐⭐⭐",
 },
];

/**
 * Creates book information elements and appends them to the main element.
 */
function createInfo() {
 const bookInfoDiv = document.querySelector("main");
 articles.forEach((obj) => {
  const parent = document.createElement("article");
  parent.className = "book-parent";
  bookInfoDiv.appendChild(parent);

  //Book date, age, and rating
  const bookInfo = document.createElement("p");
  bookInfo.className = "info-div";
  parent.appendChild(bookInfo);

  const date = document.createElement("p");
  date.textContent = obj.date;
  date.className = "date";
  bookInfo.appendChild(date);

  const age = document.createElement("p");
  age.textContent = obj.ages;
  bookInfo.appendChild(age);

  const genre = document.createElement("p");
  genre.textContent = obj.genre;
  bookInfo.appendChild(genre);

  const rating = document.createElement("p");
  rating.textContent = obj.stars;
  bookInfo.appendChild(rating);

  //Book title, img, and description
  const div = document.createElement("div");
  div.className = "book-div";
  parent.appendChild(div);

  const title = document.createElement("h2");
  title.textContent = obj.title;
  div.appendChild(title);

  const img = document.createElement("img");
  img.src = obj.imgSrc;
  img.alt = obj.imgAlt;
  div.appendChild(img);

  const description = document.createElement("p");
  description.textContent = obj.description;
  div.appendChild(description);

  //Filters
  const filter = document.createElement("div");
  filter.className = "filter-div";
  parent.appendChild(filter);

  const placeholder = document.createElement("p");
  placeholder.textContent = "Filters here";
  filter.appendChild(placeholder);
 });
}
