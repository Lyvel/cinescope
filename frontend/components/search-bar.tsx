import { FaSearch } from "react-icons/fa";
export default function SearchBar() {
  return (
    <div className="bg-[#333333] flex justify-between items-center py-2 px-4 rounded-full">
      <input type="text" className="bg-[#333333] outline-none" />
      <FaSearch className="text-stone-500" />
    </div>
  );
}
