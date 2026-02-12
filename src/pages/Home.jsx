import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import BookGrid from "../components/BookGrid";

export default function Home() {
  const { searchQuery } = useOutletContext();

  const [books, setBooks] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      setBooks(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
      setError(null);
    } catch (err) {
      setError("Kunne ikke hente bøker.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch on first load + whenever searchQuery changes
  useEffect(() => {
    const url = searchQuery
      ? `https://gutendex.com/books?search=${searchQuery}`
      : "https://gutendex.com/books";

    fetchBooks(url);
  }, [searchQuery]);

  return (
    <div>
      {loading && <p style={{ color: "white" }}>Laster bøker...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <>
          <BookGrid
            books={books}
            title={searchQuery ? `Søkeresultater for "${searchQuery}"` : "Trending Books"}
          />

          <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
            {prevPage && (
              <button onClick={() => fetchBooks(prevPage)}>Forrige</button>
            )}
            {nextPage && (
              <button onClick={() => fetchBooks(nextPage)}>Neste</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
