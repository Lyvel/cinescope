import Search from "@/components/pages/search-results";

/**
 * A page component for displaying search results.
 * @param {Object} props - The props object containing the parameters for the search query.
 * @param {Object} props.params - An object containing the search query title as a string.
 * @param {string} props.params.title - The title of the search query.
 * @returns {JSX.Element} JSX representing the search page component.
 */

export default async function SearchPage({
  params,
}: {
  params: { title: string };
}) {
  return (
    <main className="main-container">
      <Search params={params} />
    </main>
  );
}
