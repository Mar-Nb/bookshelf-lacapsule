export default function Review({
  text,
  book,
  name,
  stars,
}: {
  text: string;
  book: string;
  name: string;
  stars: number;
}) {
  return (
    <div
      className="min-w-0 max-w-md bg-white rounded-xl text-ellipsis overflow-hidden shadow-md"
      style={{ flex: "O O 100%" }}
    >
      <div className="flex items-center justify-between bg-gray-300 px-4 py-2">
        <p className="text-sm text-gray-600 overflow-hidden">{text}</p>
        <p>Etoiles</p>
      </div>
    </div>
  );
}
