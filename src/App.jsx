import StreamList from "./components/StreamList";

export default function App() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "16px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <StreamList />
    </div>
  );
}
