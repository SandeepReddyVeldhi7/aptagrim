"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { Bell, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { HEADER_NAV } from "@/src/constants";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center p-4 bg-bg ">
      <div>
        <h1 className="text-2xl font-bold ">Dashboard</h1>
      </div>

      <nav>
        <div className="flex gap-4 ">
          {HEADER_NAV.map((item) => (
            <div
              key={item.id}
              className={`pb-2 transition-colors ${
                pathname === item.to
                  ? "border-b-2 border-primary text-primary font-semibold"
                  : "hover:text-primary"
              } cursor-pointer`}
            >
              <Link href={item.to}>{item.name}</Link>
            </div>
          ))}
        </div>
      </nav>

      <div className="flex  text-xl">
        <button
          className="hover:text-primary transition-colors  rounded-md hover:bg-bg-secondary"
          title="Notifications"
        >
          <Bell />
        </button>
        <button
          className="hover:text-primary transition-colors p-2 rounded-md hover:bg-bg-secondary"
          title="Notifications"
        >
          <Bell />
        </button>
        <button
          className="hover:text-primary transition-colors  rounded-md hover:bg-bg-secondary"
          title="Notifications"
        >
          <Bell />
        </button>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="hover:text-error transition-colors p-1 rounded-md hover:bg-bg-secondary"
          title="Logout"
        >
          <LogOut />
        </button>
      </div>
    </header>
  );
};

export default Header;
