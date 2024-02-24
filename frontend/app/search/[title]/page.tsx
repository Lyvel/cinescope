import Search from "@/components/pages/search-results";

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
