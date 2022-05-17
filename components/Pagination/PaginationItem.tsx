interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <button
        className="px-3 py-2 rounded hover:ring-2 ring-pink-400 transition-all
        bg-pink-500 mr-2 active:ring-offset-2 ring-offset-pink-300"
      >
        {number}
      </button>
    );
  }

  return (
    <button
      className="px-3 py-2 bg-gray-700 mr-2 text-gray-50 transition-all
      hover:bg-gray-500 rounded hover:ring-2 ring-pink-400"
    >
      {number}
    </button>
  );
}
