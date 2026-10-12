import { useState } from "react";
import "./App.css";

const initialBar = {
  name: "Sample Social Club",
  hours: "Thursday–Saturday, 8 PM–2 AM",
  cover: "5",
  event: "Friday Dance Night",
  music: "DJ Sample — Pop and Hip-Hop",
};

function App() {
  const [page, setPage] = useState("Live");

  // Read the saved bar when the app first opens.
  const [bar, setBar] = useState(() => {
    try {
      const savedBar = localStorage.getItem("barcast-bar");

      if (savedBar) {
        const parsedBar = JSON.parse(savedBar);

        // Only load data that contains the expected text fields.
        const fields = ["name", "hours", "cover", "event", "music"];

        if (
          parsedBar &&
          fields.every((field) => typeof parsedBar[field] === "string")
        ) {
          return {
            name: parsedBar.name,
            hours: parsedBar.hours,
            cover: parsedBar.cover,
            event: parsedBar.event,
            music: parsedBar.music,
          };
        }
      }
    } catch {
      // Use sample information if saved data cannot be read.
    }

    return { ...initialBar };
  });

  // Keep form edits separate from the saved bar.
  const [draft, setDraft] = useState({ ...bar });
  const [message, setMessage] = useState("");

  const pages = [
    "Live",
    "Explore",
    "Bar Details",
    "My Plan",
    "Profile",
    "Report the Vibe",
  ];

  function changePage(name) {
    setPage(name);
    setMessage("");
  }

  function updateField(event) {
    const { name, value } = event.target;

    setDraft((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  }

  function saveBar(event) {
    // Submit without reloading the page.
    event.preventDefault();

    if (!draft.name.trim() || !draft.hours.trim()) {
      setMessage("Please enter a bar name and hours.");
      return;
    }

    const coverFee = Number(draft.cover);

    if (
      draft.cover.trim() === "" ||
      !Number.isFinite(coverFee) ||
      coverFee < 0
    ) {
      setMessage("Please enter a valid cover fee of $0 or more.");
      return;
    }

    const updatedBar = {
      name: draft.name.trim(),
      hours: draft.hours.trim(),
      cover: coverFee.toFixed(2),
      event: draft.event.trim(),
      music: draft.music.trim(),
    };

    try {
      // Browser storage keeps the information after a refresh.
      localStorage.setItem("barcast-bar", JSON.stringify(updatedBar));

      setBar(updatedBar);
      setDraft({ ...updatedBar });
      setMessage("Changes saved! Open Bar Details to see them.");
    } catch {
      setMessage(
        "Could not save. Your browser storage may be unavailable."
      );
    }
  }

  return (
    <main>
      <h1>BarCast</h1>
      <p>Find your next night out.</p>

      <nav aria-label="Main navigation">
        {pages.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => changePage(name)}
            aria-current={page === name ? "page" : undefined}
          >
            {name}
          </button>
        ))}
      </nav>

      <section>
        <h2>{page}</h2>

        {page === "Live" && (
          <p>Live crowd levels and wait times will appear here.</p>
        )}

        {page === "Explore" && (
          <button
            type="button"
            onClick={() => changePage("Bar Details")}
          >
            View {bar.name}
          </button>
        )}

        {page === "Bar Details" && (
          <article>
            <h3>{bar.name}</h3>

            <p>
              <strong>Hours:</strong> {bar.hours}
            </p>

            <p>
              <strong>Cover fee:</strong>{" "}
              ${Number(bar.cover).toFixed(2)}
            </p>

            <p>
              <strong>Event:</strong> {bar.event || "None listed"}
            </p>

            <p>
              <strong>DJ / Music:</strong>{" "}
              {bar.music || "None listed"}
            </p>
          </article>
        )}

        {page === "My Plan" && (
          <p>Your saved bars will appear here.</p>
        )}

        {page === "Profile" && (
          <>
            <h3>Venue Manager Demo</h3>

            <p>
              Edit the sample bar below. This prototype does not
              include manager login or permission checks yet.
            </p>

            <form onSubmit={saveBar}>
              <div>
                <label htmlFor="bar-name">Bar name</label>
                <input
                  id="bar-name"
                  name="name"
                  type="text"
                  value={draft.name}
                  onChange={updateField}
                  required
                />
              </div>

              <div>
                <label htmlFor="bar-hours">Hours</label>
                <input
                  id="bar-hours"
                  name="hours"
                  type="text"
                  value={draft.hours}
                  onChange={updateField}
                  required
                />
              </div>

              <div>
                <label htmlFor="bar-cover">Cover fee ($)</label>
                <input
                  id="bar-cover"
                  name="cover"
                  type="number"
                  min="0"
                  step="0.01"
                  value={draft.cover}
                  onChange={updateField}
                  required
                />
              </div>

              <div>
                <label htmlFor="bar-event">Event</label>
                <input
                  id="bar-event"
                  name="event"
                  type="text"
                  value={draft.event}
                  onChange={updateField}
                />
              </div>

              <div>
                <label htmlFor="bar-music">DJ / Music</label>
                <input
                  id="bar-music"
                  name="music"
                  type="text"
                  value={draft.music}
                  onChange={updateField}
                />
              </div>

              <button type="submit">Save Changes</button>

              <p role="status">{message}</p>
            </form>
          </>
        )}

        {page === "Report the Vibe" && (
          <p>The crowd-level reporting form will go here.</p>
        )}
      </section>
    </main>
  );
}

export default App;