import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export function Layout() {
  return (
    <div
      className="flex flex-col font-Cairo py-4 lg:py-[60px]
      px-4 lg:px-[34px]"
    >
      <div className="min-h-screen w-full">
        <Header />
        <main className="flex-grow py-12 md:py-[110px]">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
