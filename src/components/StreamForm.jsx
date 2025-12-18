export default function StreamForm({ text, setText, onAdd }) {
  return (
    <form onSubmit={onAdd} style={{ display: "flex", gap: 8 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add an event"
        style={{
          flex: 1,
          padding: 12,
          borderRadius: 12,
          border: "1px solid #cfd6e4",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 14px",
          borderRadius: 12,
          border: "1px solid #cfd6e4",
          background: "white",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        <span className="material-symbols-outlined">add</span>
        Add
      </button>
    </form>
  );
}

