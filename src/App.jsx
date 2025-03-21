import React from "react";
import BookCard from "./cart/BookCard";

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", publication_year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", publication_year: 1960 },
  { title: "1984", author: "George Orwell", genre: "Dystopian", publication_year: 1949 },
];

const App = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">📚 Digital Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;
