import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
export function Layout() {
  return (
    <div
      className="flex flex-col font-Sora py-[60px]
      px-4 lg:px-8"
    >
      <div className="min-h-screen w-full">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
