import Nav from "./nav";
import "./adminlayout.css"
import Menu from "./menu";
import Footer from "../footer";

export default function admin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="admin-layout">
        <Nav/>
        <Menu/>
        {children}
    </main>
  );
}
