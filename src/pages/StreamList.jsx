import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

// Image imports (exact filenames)
import stripImg from "../assets/images/strip.webp";
import movieImg from "../assets/images/movie.webp";
import playImg from "../assets/images/play.webp";
import stopImg from "../assets/images/stop.webp";

export default function StreamList() {
  const [title, setTitle] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    const cleaned = title.trim();
    if (!cleaned) return;

    // Requirement: log input to console
    console.log("StreamList item added:", cleaned);

    setTitle("");
  };

  const handleViewList = () => {
    // Placeholder behavior
    console.log("View List clicked (list display will be implemented later).");
  };

  return (
    <section className="card">
      {/* Header */}
      <h1 className="pageTitle">Your StreamList</h1>
      <p className="pageSubtitle">
        Create a personal cloud-based streaming list of movies or programs you want to watch.
      </p>

      {/* Add + View List controls */}
      <form onSubmit={handleAdd}>
        <div className="formRow">
          <label className="srOnly" htmlFor="title">
            Title
          </label>

          <input
            id="title"
            className="textInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Interstellar, The Bear, The Matrix..."
            autoComplete="off"
          />

          <button className="primaryBtn" type="submit">
            <FaPlusCircle /> Add
          </button>
        </div>

        {/* View List directly under Add */}
        <div style={{ marginTop: "8px" }}>
          <button
            type="button"
            className="primaryBtn"
            onClick={handleViewList}
          >
            View List
          </button>
        </div>
      </form>

      {/* Film strip + movie graphic */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginTop: "18px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={stripImg}
          alt="Film strip"
          style={{
            width: "260px",
            height: "auto",
            opacity: 0.85,
            borderRadius: "8px",
          }}
        />

        <img
          src={movieImg}
          alt="Movie graphic"
          style={{
            width: "260px",
            height: "auto",
            opacity: 0.85,
            borderRadius: "8px",
          }}
        />
      </div>

      {/* Play / Stop icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "16px",
        }}
      >
        <img
          src={playImg}
          alt="Play"
          style={{ width: "30px", height: "30px", opacity: 0.85 }}
        />
        <img
          src={stopImg}
          alt="Stop"
          style={{ width: "30px", height: "30px", opacity: 0.85 }}
        />
      </div>
    </section>
  );
}


