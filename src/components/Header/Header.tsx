"use client";

import { useBreakpoint } from "@/utils/hooks";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";

const Header = () => {
  const isMobile = useBreakpoint(600);

  return <>{isMobile ? <MobileSidebar /> : <NavbarMenu />}</>;
};

export default Header;
