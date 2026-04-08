import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Hi, I'm Your Name</h1>
        <p>I'm a software developer building modern web applications.</p>
      </main>
      <Footer />
    </div>
  );
}