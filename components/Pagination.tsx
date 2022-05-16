export function Pagination() {
  return (
    <div className="flex mt-8 justify-between items-center">
      <div>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </div>
      <div>
        <button
          className="px-3 py-2 rounded hover:ring-2 ring-pink-400 transition-all
          bg-pink-500 mr-2 active:ring-offset-2 ring-offset-pink-300"
        >
          1
        </button>

        <button
          className="px-3 py-2 bg-gray-700 mr-2 text-gray-50 transition-all
       hover:bg-gray-500 rounded hover:ring-2 ring-pink-400"
        >
          2
        </button>

        <button
          className="px-3 py-2 bg-gray-700 mr-2 text-gray-50 transition-all 
       hover:bg-gray-500 rounded hover:ring-2 ring-pink-400"
        >
         3
        </button>

        <button
          className="px-3 py-2 bg-gray-700 mr-2 text-gray-50 transition-all 
       hover:bg-gray-500 rounded hover:ring-2 ring-pink-400"
        >
          4
        </button>
      </div>
    </div>
  );
}
