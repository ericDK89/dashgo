import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <aside className="w-64 mr-8">
      <div className="flex items-start">
        <div>
          <p className="font-bold text-gray-400 text-2xs uppercase">Geral</p>
          <div className="mt-8 items-stretch">
            <a href="#" className="flex items-center">
              <RiDashboardLine fontSize={20} />
              <p className="ml-4 font-medium">Dashboard</p>
            </a>
            <a href="#" className="flex items-center my-4">
              <RiContactsLine fontSize={20} />
              <p className="ml-4 font-medium">Usuários</p>
            </a>
          </div>
        </div>
      </div>
      <div>
          <p className="font-bold text-gray-400 text-2xs uppercase mt-8">Automação</p>
          <div className="mt-8 items-stretch">
            <a href="#" className="flex items-center">
              <RiInputMethodLine fontSize={20} />
              <p className="ml-4 font-medium">Formulários</p>
            </a>
            <a href="#" className="flex items-center my-4">
              <RiGitMergeLine fontSize={20} />
              <p className="ml-4 font-medium">Automação</p>
            </a>
          </div>
        </div>
    </aside>
  );
}
