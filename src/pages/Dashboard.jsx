export default function Dashboard() {
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          margin: "40px auto",
          gap: "1rem",
        }}
      >
        <h2>Search for GITHUB Users</h2>
        <input type="text" required />

        <input type="submit" value="SEARCH" />
      </form>
    </div>
  );
}
