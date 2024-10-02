import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineSubject } from "react-icons/md";
import { SiWritedotas } from "react-icons/si";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { BiSolidInstitution } from "react-icons/bi";
import { SiRoamresearch } from "react-icons/si";
import { FaRegKeyboard } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { MdOutlineBusAlert } from "react-icons/md";
import { GiFlatPlatform } from "react-icons/gi";

const AdminNavs = [
    {
        id: "/",
        name: "Dashboard",
        icon: <MdOutlineSpaceDashboard />,
        path: "/"
    },
    {
        id: "/categories",
        name: "Categories",
        icon: <MdOutlineSubject />,
        path: "/categories"
    },
    {
        id: "/writers",
        name: "Writers",
        icon: <SiWritedotas />,
        path: "/writers"
    },
    {
        id: "/publisher",
        name: "Publisher",
        icon: <MdOutlinePublishedWithChanges />,
        path: "/publisher"
    },
    {
        id: "/teacher",
        name: "Teacher",
        icon: <PiChalkboardTeacherBold />,
        path: "/teacher"
    },
    {
        id: "/institution",
        name: "Institution",
        icon: <BiSolidInstitution />,
        path: "/institution"
    },
    {
        id: "/research-paper",
        name: "Research Paper",
        icon: <SiRoamresearch />,
        path: "/research-paper"
    },
    {
        id: "/keyword",
        name: "Keyword/Tags",
        icon: <FaRegKeyboard />,
        path: "/keyword"
    },
    {
        id: "/coupon",
        name: "Coupon",
        icon: <RiCoupon3Fill />,
        path: "/coupon"
    },
    {
        id: "/sales",
        name: "Sales",
        icon: <MdOutlineBusAlert />,
        path: "/sales"
    },
    {
        id: "/platform-charge",
        name: "Platform Charge",
        icon: <GiFlatPlatform />,
        path: "/platform-charge"
    },
]

const ModeratorNavs = [
    {
        id: "/",
        name: "Dashboard",
        icon: <MdOutlineSpaceDashboard />,
        path: "/"
    },
    {
        id: "/keyword",
        name: "Keyword/Tags",
        icon: <FaRegKeyboard />,
        path: "/keyword"
    },
]

export { AdminNavs, ModeratorNavs };