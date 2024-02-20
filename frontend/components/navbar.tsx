import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-10">
      <h1 className="text-xl font-bold">CineScope</h1>
      <ul className="flex text-xl font-light gap-10">
        <li>
          <Link href={"/"}>Trending</Link>
        </li>
        <li>
          <Link href={"#"}>Top Rated</Link>
        </li>
        <li>
          <Link href={"#"}>Upcoming</Link>
        </li>
        <li>
          <Link href={"#"}>Now Playing</Link>
        </li>
      </ul>
    </nav>
  );
}
