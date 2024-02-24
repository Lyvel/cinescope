"use client";

import { useRouter } from "next/navigation";

export default function EmptySearch() {
  const router = useRouter();
  router.push("/");
  return (
    <h1 className="m-auto text-9xl font-bold flex justify-center items-center">
      404
    </h1>
  );
}
