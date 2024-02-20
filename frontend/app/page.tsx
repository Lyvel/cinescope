import Navbar from "@/components/navbar";
import Trending from "@/pages/trending";

export default function Home() {
  return (
    <main className="w-1/2 m-auto my-10">
      <Navbar />
      <Trending />
    </main>
  );
}
