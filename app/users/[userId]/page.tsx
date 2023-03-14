import getUser from "@/api/getUser";
import getUserPost from "@/api/getUserPost";
import Link from "next/link";
import { Suspense } from "react";

import UserPosts from "./UserPosts";

interface UserProps {
  params: {
    userId: string;
  };
}

export default async function User({ params: { userId } }: UserProps) {
  const userData = getUser(userId);
  const userPostData = getUserPost(userId);

  const user = await userData;

  return (
    <>
      <Link href="/users">Back to Users</Link>
      <br />
      <br />
      <h2>{user.name}</h2>
      <br />

      <Suspense fallback="Loading...">
        {/* @ts-expect-error Server Component*/}
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
}
