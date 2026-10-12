import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Live");

  const pages = [
    "Live",
    "Explore",
    "Bar Details",
    "My Plan",
    "Profile",
    "Report the Vibe",
  ];

  return (
    <main>
      <h1>BarCast</h1>
      <p>Find your next night out.</p>

      <nav aria-label="Main navigation">
        {pages.map((name) => (
          <button
            key={name}
            onClick={() => setPage(name)}
            aria-current={page === name ? "page" : undefined}
          >
            {name}
          </button>
        ))}
      </nav>

      <section>
        <h2>{page}</h2>
        <p>Welcome to the {page} page.</p>
      </section>
    </main>
  );
}

export default App;