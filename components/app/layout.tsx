import { ReactNode } from "react";
import { Navbar } from "./navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex w-full max-w-screen justify-center align-center bg-light-tan">
      <Navbar />
      <main className="w-full max-w-screen-xl p-10 pl-14">{children}</main>
    </div>
  );
}
