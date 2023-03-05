import getUsers from "@/api/getUsers";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users"
};

export default async function Users() {
  // request is performed as the website is built
  const usersData = getUsers();
  const users = await usersData;

  const content = (
    <section>
      <Link href="/">Back to Home</Link>
      <br /> <br />
      {users.map(user => (
        <p key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </section>
  );

  return content;
}
