import { useMemo, useState } from "react";
import StreamForm from "../components/StreamForm";
import StreamList from "../components/StreamList";

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function StreamListPage({ mode = "all" }) {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const filteredItems = useMemo(() => {
    if (mode === "active") return items.filter((i) => !i.completed);
    if (mode === "completed") return items.filter((i) => i.completed);
    return items;
  }, [items, mode]);

  function addItem(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    const newItem = {
      id: makeId(),
      text: trimmed,
      completed: false,
      createdAt: Date.now(),
    };

    setItems((prev) => [newItem, ...prev]);
    setText(""); // clears input after submit
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function toggleComplete(id) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  }

  function editItem(id, newText) {
    const trimmed = newText.trim();
    if (!trimmed) return;

    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, text: trimmed } : i))
    );
  }

  return (
    <div>
      <h2 style={{ margin: "8px 0 12px" }}>
        {mode === "all" ? "All Events" : mode === "active" ? "Active Events" : "Completed Events"}
      </h2>

      <StreamForm text={text} setText={setText} onAdd={addItem} />

      <div style={{ marginTop: 16 }}>
        <StreamList
          items={filteredItems}
          onDelete={deleteItem}
          onToggle={toggleComplete}
          onEdit={editItem}
        />
      </div>
    </div>
  );
}
