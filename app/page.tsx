import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to Home page"
};

export default function Home() {
  return (
    <main>
      <h1>Hello World baby!</h1>
      <Link href="/about">Go to About Page</Link>
    </main>
  );
}
