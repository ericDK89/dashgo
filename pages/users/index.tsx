import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <div>
      <Header />
      <div className="flex w-full my-6 max-w-[1480px] mx-auto px-6">
        <Sidebar />

        <div className="flex-1 rounded-lg bg-slate-800 p-8">
          <div className="flex mb-8 justify-between items-center">
            <h2 className="text-lg font-normal">Usuários</h2>
            <a
              className="text-sm bg-pink-500 flex items-center p-2 
              cursor-pointer rounded-lg"
            >
              <RiAddLine className="mr-1" fontSize={20} /> Criar novo usuário
            </a>
          </div>

          <div className="relative sm:rounded-lg ">
            <table className="w-full text-sm text-left text-gray-500">
              <thead
                className="text-2xs text-gray-300 uppercase border-b 
                border-b-gray-700 "
              >
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 rounded"
                      />
                      <label htmlFor="checkbox-all-search" className=""></label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Usuários
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Data de cadastro
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b border-b-gray-700">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 rounded"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-bold text-gray-50">
                    <p>Eric Macedo</p>
                    <p className="text-gray-300 text-xs font-normal">
                      ericthr42@gmail.com
                    </p>
                  </th>
                  <td className="px-6 py-4 text-gray-50 font-bold">
                    04 maio, 2022
                  </td>
                  <td
                    className="px-6 pt-7 flex items-center justify-center
                      "
                  >
                    <a
                      href="#"
                      type="button"
                      className="font-medium text-pink-400 rounded-md
                      uppercase flex items-center tracking-wider hover:text-pink-300 
                      transition-colors"
                    >
                      <RiPencilLine
                        className="mr-1 text-pink-400"
                        fontSize={16}
                      />
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
