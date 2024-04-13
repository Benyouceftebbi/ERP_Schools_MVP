"use client";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
  CalendarDays,
  LandPlot,
  Users2,
  Medal,
  CircleDollarSign,
  Trophy,
} from "lucide-react";
import SidebarItem from "./item";



const items = [
  {
    name: "لوحة القيادة",
    path: "/Home/firstpage",
    icon: LayoutDashboard,
  },
  {
    name: "التقويم",
    path: "/Home/calendar",
    icon: CalendarDays,
  },
  {
    name: "الفصول",
    path: "/Home/classes",
    icon: LandPlot,
  },
  {
    name: "مُعَلِّمُون",
    path: "/Home/coaches",
    icon: Users2,
  },
  {
    name: "طلاب",
    path: "/Home/players",
    icon: CircleUserRound,
  },
  // {
  //   name: "الحجز",
  //   path: "/Home/matches",
  //   icon: Medal,
  // },
  // {
  //   name: "البطولات",
  //   path: "/Home/tournaments",
  //   icon: Trophy,
  // },
  {
    name: "الفواتير",
    path: "/Home/payment",
    icon: CircleDollarSign,
    items: [
      {
        name: "الفواتير",
        path: "/Home/payment",
      },
      {
        name: "المدفوعات",
        path: "/Home/payment/coaches",
      },
    ],
  },
  {
    name: "الإعدادات",
    path: "/Home/settings",
    icon: Settings,
  },
];


const Sidebar = () => {
  return (

    <div className="fixed top-0 right-0 min-h-screen w-64 bg-white shadow-lg  p-4">
      <div className="flex flex-col space-y-10 w-full">
     <img className="h-50 w-fit" src="/logo-expanded.png" alt="Logo" /> 
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;