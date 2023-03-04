import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to Home page"
};

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <h1>Hello World baby!</h1>
      <Link href="/about">Go to About Page</Link>
      <Link href="/users">Users</Link>
    </main>
  );
}
