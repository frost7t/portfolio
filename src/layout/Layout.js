import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/navigation/Navbar";
import { useState } from "react";

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <Navbar showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
