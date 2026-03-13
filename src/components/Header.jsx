"use client";

import { signOut } from "next-auth/react";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
const Header = () => {
  const headerData = [
    { id: "1", name: "Dashboard", to: "/" },
    { id: "2", name: "Jobs", to: "/jobs" },
    { id: "3", name: "Applicants", to: "/applicants" },
    { id: "4", name: "Assessment Bank", to: "/assessment-bank" },
    { id: "5", name: "Resume Bank", to: "/resume-bank" },
    { id: "6", name: "Reports", to: "/reports" },
  ];
  const pathname = usePathname();

  const icons = [
    { id: "1", icon: <IoIosNotifications /> },
    { id: "2", icon: <IoIosNotifications /> },
    { id: "3", icon: <IoIosNotifications /> },
    {
      id: "4",
      icon: <IoLogOutSharp />,

      action: () => signOut({ callbackUrl: "/login" }),
    },
  ];

  return (
    <div className="flex justify-between items-center p-2">
      <div>
        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
      </div>
      <div>
        <div className="flex gap-4 text-black">
          {headerData.map((item) => (
            <div
              key={item.id}
              className={`${pathname === item.to ? "border-b-2 border-[purple]" : ""} cursor-pointer`}
            >
              <a href={item.to}>{item.name}</a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-4 text-black">
          {icons.map((item) => (
            <div
              key={item.id}
              onClick={item.id === "4" ? item.action : undefined}
              className="cursor-pointer hover:text-red-500 transition-colors"
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
