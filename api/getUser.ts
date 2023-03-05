import { baseUrl } from "./baseUrl";

export default async function getUser(userId: string): Promise<User> {
  const res = await fetch(`${baseUrl}/users/${userId}`);

  if (!res.ok) throw new Error("failed to fetch user");
  return res.json();
}
