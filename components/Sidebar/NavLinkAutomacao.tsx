import { RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

interface NavLinkAutomacaoProps {
  title: string;
}

export function NavLinkAutomacao({ title }: NavLinkAutomacaoProps) {
  return (
    <>
      <a href="#" className="flex items-center my-4">
        {title === "Automação" ? <RiGitMergeLine /> : <RiInputMethodLine />}
        <p className="ml-4 font-medium"> {title} </p>
      </a>
    </>
  );
}
 