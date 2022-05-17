import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

interface NavLinkGeralProps {
  title: string;
}

const icons = [RiDashboardLine, RiGitMergeLine, RiInputMethodLine];

export function NavLinkGeral({ title }: NavLinkGeralProps) {
  return (
    <>
      <a href="#" className="flex items-center my-4">
        {title === "Dashboard" ? <RiDashboardLine /> : <RiContactsLine />}
        <p className="ml-4 font-medium">{title}</p>
      </a>
    </>
  );
}
