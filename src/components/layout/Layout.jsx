import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
export function Layout() {

  return (
    <div
      className="flex flex-col font-poppins
      ">
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
