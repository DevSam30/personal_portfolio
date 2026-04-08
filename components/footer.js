export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "2rem 0", borderTop: "1px solid #ccc" }}>
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  );
}