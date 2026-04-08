import Link from "next/link";

export default function Navbar(){
    return(
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
            <Link href="/">Home</Link> |{" "}
            <Link href="/about">About</Link> |{" "}
            <Link href="/projects">Projects</Link> |{" "}
            <Link href="/contacts">Contacts</Link>
        </nav>
    );
}