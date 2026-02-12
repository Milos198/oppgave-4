import BookCard from "./BookCard";
import "./BookGrid.css";

export default function BookGrid({ books, title = "Trending books" }) {
  return (
    <section className="book-grid-section">
      <h2 className="book-grid-title">{title}</h2>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
