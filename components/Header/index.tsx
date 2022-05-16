import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { Search } from "./SearchBox";

export function Header() {
  return (
    <header
      className="flex w-full max-w-[1480px] h-20 mx-auto mt-4 
  items-center px-6"
    >
      <Logo />
      <Search />
      <NotificationNav />
      <Profile />
    </header>
  );
}
