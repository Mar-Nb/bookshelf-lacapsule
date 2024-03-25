import Image from "next/image";

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
      className="min-w-0 max-w-md bg-gray-300 px-4 py-2 rounded-xl text-ellipsis overflow-hidden shadow-md text-black"
      style={{ flex: "O O 100%" }}
    >
      <p className="font-bold mb-2">{book}</p>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-600 text-justify">
          {text}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="flex gap-4 justify-start items-center w-full">
          <Image
            src="https://placehold.co/56x56/png"
            alt={`profile pic ${name}`}
            width={56}
            height={56}
            className="rounded-full"
          />

          <div className="flex flex-col gap-1">
            <span className="font-bold">{name}</span>
            <p className="text-sm">Etoiles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
