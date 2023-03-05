import getUser from "@/api/getUser";
import Link from "next/link";

interface UserProps {
  params: {
    userId: string;
  };
}

export default async function User({ params: { userId } }: UserProps) {
  const userData = getUser(userId);
  const user = await userData;

  return (
    <>
      <Link href="/users">Back to Users</Link>
      <br />
      <br />
      <h2>{user.name}</h2>
      <br />
    </>
  );
}
