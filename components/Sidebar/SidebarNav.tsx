import { NavLinkAutomacao } from "./NavLinkAutomacao";
import { NavLinkGeral } from "./NavLinkGeral";

export function SidebarNav() {
  return (
    <aside className="w-64 mr-8 hidden sm:block">
      <div className="flex items-start">
        <div>
          <p className="font-bold text-gray-400 text-2xs uppercase">Geral</p>
          <div className="mt-8 items-stretch">
            <NavLinkGeral title="Dashboard" />
            <NavLinkGeral title="Usuários" />
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold text-gray-400 text-2xs uppercase mt-8">
          Automação
        </p>
        <div className="mt-8 items-stretch">
          <NavLinkAutomacao title="Formulários" />
          <NavLinkAutomacao title="Automação" />
        </div>
      </div>
    </aside>
  );
}
