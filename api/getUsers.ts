import { baseUrl } from "./baseUrl";

export default async function getUsers(): Promise<User[]> {
  const res = await fetch(`${baseUrl}/users`);

  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
