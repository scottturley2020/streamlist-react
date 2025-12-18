import { useMemo, useState } from "react";

// Image imports
import stripImg from "../assets/images/strip.webp";
import movieImg from "../assets/images/movie.webp";
import playImg from "../assets/images/play.webp";
import stopImg from "../assets/images/stop.webp";

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function StreamList() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const [filter, setFilter] = useState("all"); // all | active | completed

  const filteredItems = useMemo(() => {
    if (filter === "active") return items.filter((i) => !i.completed);
    if (filter === "completed") return items.filter((i) => i.completed);
    return items;
  }, [items, filter]);

  const handleAdd = (e) => {
    e.preventDefault();
    const cleaned = title.trim();
    if (!cleaned) return;

    setItems((prev) => [
      {
        id: makeId(),
        text: cleaned,
        completed: false,
      },
      ...prev,
    ]);

    setTitle(""); // clear input
  };

  const toggleComplete = (id) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, completed: !i.completed } : i
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditText(item.text);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const saveEdit = (id) => {
    const cleaned = editText.trim();
    if (!cleaned) return;

    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, text: cleaned } : i))
    );

    setEditingId(null);
    setEditText("");
  };

  return (
    <section className="card">
      {/* Header */}
      <h1 className="pageTitle">Your StreamList</h1>
      <p className="pageSubtitle">
        Create a personal cloud-based streaming list of movies or programs you want to watch.
      </p>

      {/* Add form */}
      <form onSubmit={handleAdd}>
        <div className="formRow">
          <input
            className="textInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Interstellar, The Bear, The Matrix..."
          />

          <button className="primaryBtn" type="submit">
            <span className="material-symbols-outlined">add_circle</span>
            Add
          </button>
        </div>
      </form>

      {/* Filter buttons */}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            type="button"
            className="primaryBtn"
            onClick={() => setFilter(f)}
            style={{ opacity: filter === f ? 1 : 0.6 }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* List */}
      <div style={{ marginTop: 16 }}>
        {filteredItems.length === 0 ? (
          <div style={{ padding: 12, border: "1px dashed #cfd6e4", borderRadius: 12 }}>
            No items yet. Add your first event above.
          </div>
        ) : (
          filteredItems.map((item) => {
            const isEditing = editingId === item.id;

            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: 12,
                  borderRadius: 12,
                  border: "1px solid #cfd6e4",
                  marginBottom: 8,
                }}
              >
                {/* Complete */}
                <button
                  onClick={() => toggleComplete(item.id)}
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className="material-symbols-outlined">
                    {item.completed ? "check_circle" : "radio_button_unchecked"}
                  </span>
                </button>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  {!isEditing ? (
                    <span
                      style={{
                        fontWeight: 700,
                        textDecoration: item.completed ? "line-through" : "none",
                        opacity: item.completed ? 0.6 : 1,
                      }}
                    >
                      {item.text}
                    </span>
                  ) : (
                    <input
                      className="textInput"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  )}
                </div>

                {/* Actions */}
                {!isEditing ? (
                  <>
                    <button
                      onClick={() => startEdit(item)}
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => saveEdit(item.id)}
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      <span className="material-symbols-outlined">save</span>
                    </button>
                    <button
                      onClick={cancelEdit}
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Images inside card (original layout) */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 24 }}>
        <img src={stripImg} alt="Film strip" width="260" />
        <img src={movieImg} alt="Movie graphic" width="260" />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 16 }}>
        <img src={playImg} alt="Play" width="30" />
        <img src={stopImg} alt="Stop" width="30" />
      </div>
    </section>
  );
}


