const bookData = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    rating: 4.5,
    price: 15.99,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.8,
    price: 19.99,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    rating: 4.7,
    price: 24.99,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.6,
    price: 12.99,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.9,
    price: 18.99,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    rating: 4.3,
    price: 14.99,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    rating: 4.2,
    price: 16.99,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fantasy",
    rating: 4.8,
    price: 20.99,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.7,
    price: 17.99,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    rating: 4.9,
    price: 22.99,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.9,
    price: 29.99,
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Mystery",
    rating: 4.4,
    price: 21.99,
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian",
    rating: 4.5,
    price: 14.99,
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    rating: 4.6,
    price: 18.99,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    rating: 4.7,
    price: 20.99,
  },
  {
    title: "The Odyssey",
    author: "Homer",
    genre: "Classics",
    rating: 4.5,
    price: 15.99,
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic",
    rating: 4.2,
    price: 16.99,
  },
  {
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    genre: "Historical Fiction",
    rating: 4.8,
    price: 23.99,
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science Fiction",
    rating: 4.6,
    price: 19.99,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    rating: 4.4,
    price: 17.99,
  },
];
// let findBook = bookData.filter((a) => {
//   return a.title.length > 20;
// });


// let findBookSorted = findBook.sort((a, b) => {
//   return a.price-b.price
// });

// console.log(findBookSorted)

// Book title iin character length ni 10 aas ihiin awdag function bich, tedgeeriin price range iig ni oor function oor garga

let bookExp=bookData.filter((a)=>{
  return a.price>12
});
let bookExpRate=bookExp.filter((a)=>{
  return a.rating>4.7
})
console.log(bookExpRate)

// 12 oos ih vnetei nomnuudaas rating ni 4.7 oos deesh rating tei nomnuudiig oldog function bich