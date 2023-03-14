import getUser from "@/api/getUser";
import getUserPost from "@/api/getUserPost";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import UserPosts from "./UserPosts";

interface Params {
  params: {
    userId: string;
  };
}

export async function generateMetadata({
  params: { userId }
}: Params): Promise<Metadata> {
  const userData = getUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: "`This is the page of ${user.name}"
  };
}

export default async function User({ params: { userId } }: Params) {
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
