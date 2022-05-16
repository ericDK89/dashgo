import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <header
      className="flex w-full max-w-[1480px] h-20 mx-auto mt-4 
      items-center px-6"
    >
      <p className="text-3xl font-bold tracking-tight w-64">
        dashgo<span className="text-pink-500 ml-1">.</span>
      </p>

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

      <div className="flex items-center ml-auto pr-8 border-gray-700 border-r">
        <RiNotificationLine fontSize={20} className="mr-8" />
        <RiUserAddLine fontSize={20} />
      </div>

      <div className="flex ml-8 items-center">
        <div className="mr-4 text-right">
          <p>Eric Macedo</p>
          <p className="text-gray-300 text-sm">ericthr42@gmail.com</p>
        </div>
        <img
          className="inline-block h-12 w-12 rounded-full"
          src="http://github.com/ericDK89.png"
          alt="Perfil"
        />
      </div>
    </header>
  );
}
