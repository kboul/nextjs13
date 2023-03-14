import { baseUrl } from "./baseUrl";

export default async function getUserPost(userId: string): Promise<Post[]> {
  const res = await fetch(`${baseUrl}/posts?userId=${userId}`);

  if (!res.ok) throw new Error("failed to fetch user post");
  return res.json();
}
