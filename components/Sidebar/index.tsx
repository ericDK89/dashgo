import { useEffect, useState } from "react";
import { SidebarNav } from "./SidebarNav";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { NavLinkGeral } from "./NavLinkGeral";
import { NavLinkAutomacao } from "./NavLinkAutomacao";
import { useRouter } from "next/router";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setIsOpen(false)
  }, [router.asPath])

  return (
    <>
      <SidebarNav />
      <nav className="sm:hidden">
        {isOpen ? (
          <RiCloseLine
            fontSize={20}
            className="fixed left-6 top-11 cursor-pointer z-20"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <RiMenuLine
            fontSize={20}
            className="fixed left-6 top-11 cursor-pointer z-20"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        <aside
          className={`bg-gray-800 fixed duration-500 flex-col w-60 px-8 
          pt-24 ease-in top-0 md:h-auto h-screen z-10 ${
          !isOpen ? "left-[-100%] " : "left-0"
        }`}
        >
          <div className="flex items-start">
            <div>
              <p className="font-bold text-gray-400 text-2xs uppercase">
                Geral
              </p>
              <div>
                <NavLinkGeral title="Dashboard" />
                <NavLinkGeral title="Usuários" />
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-gray-400 text-2xs uppercase mt-8">
              Automação
            </p>
            <div>
              <NavLinkAutomacao title="Formulários" />
              <NavLinkAutomacao title="Automação" />
            </div>
          </div>
        </aside>
      </nav>
    </>
  );
}
