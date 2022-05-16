import { RiSearchLine } from "react-icons/ri";

export function Search() {
  return (
    <>
      <label
        className="flex flex-auto justify-between items-center py-4 px-8 ml-6 max-w-[400px] self-center 
        text-gray-200 relative bg-gray-800 rounded-full"
      >
        <input
          className="px-4 mr-4 text-gray-50 bg-gray-800 
          placeholder:text-gray-400"
          placeholder="Buscar na plataforma"
        />
        <RiSearchLine fontSize={20} />
      </label>
    </>
  );
}
