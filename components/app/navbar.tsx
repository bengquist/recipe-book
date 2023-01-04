import { faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Logo } from "./logo";
import { NavButton } from "./nav-button";

export function Navbar() {
  return (
    <header className="h-screen sticky top-0 w-80 bg-white p-8">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex flex-col">
        <Link href="/">
          <NavButton icon={faHome}>recipes</NavButton>
        </Link>
        <Link href="/browse">
          <NavButton icon={faBook}>browse</NavButton>
        </Link>
      </div>
    </header>
  );
}
