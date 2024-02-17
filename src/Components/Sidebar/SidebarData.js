import { MdOutlineDashboard } from "react-icons/md";
import { IoPawOutline } from "react-icons/io5";
import { TbHealthRecognition } from "react-icons/tb";
import { PiSyringe } from "react-icons/pi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { RxCalendar } from "react-icons/rx";
import { LuSettings } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";

export const SidebarData = [
  {
    title: "MENU",
    items: [
      {
        title: "Dashboard",
        path: "/",
        icon: <MdOutlineDashboard />,
      },
      {
        title: "Pet Profile",
        path: "/pet-profile",
        icon: <IoPawOutline />,
      },
    ],
  },
  {
    title: "ANALYTICS",
    items: [
      {
        title: "Health monitoring",
        path: "/health-monitoring",
        icon: <TbHealthRecognition />,
      },
      {
        title: "Vaccination schedule",
        path: "/vaccination-schedule",
        icon: <PiSyringe />,
      },
    ],
  },
  {
    title: "SCHEDULE",
    items: [
      {
        title: "Chat",
        path: "/chat",
        icon: <HiOutlineChatBubbleBottomCenterText />,
      },
      {
        title: "Appointments",
        path: "/appointment",
        icon: <RxCalendar />,
      },
    ],
  },
  {
    title: "HELP",
    items: [
      {
        title: "Settings",
        path: "/settings",
        icon: <LuSettings />,
      },
      {
        title: "Documentation",
        path: "/documentation",
        icon: <GrDocumentText />,
      },
    ],
  },
];
