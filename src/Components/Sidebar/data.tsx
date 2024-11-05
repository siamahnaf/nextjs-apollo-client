import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineSubject } from "react-icons/md";
import { SiWritedotas } from "react-icons/si";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { BiSolidInstitution } from "react-icons/bi";
import { SiRoamresearch } from "react-icons/si";
import { RiCoupon3Fill } from "react-icons/ri";
import { MdOutlineBusAlert } from "react-icons/md";
import { GiFlatPlatform } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import { TiImage } from "react-icons/ti";
import { MdOutlineHomeMax } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoListCircle } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { TbCarouselHorizontal } from "react-icons/tb";

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
    {
        id: "/products",
        name: "Products",
        icon: <FaStore />,
        path: "/products"
    },
    {
        id: "/orders",
        name: "Orders",
        icon: <IoListCircle />,
        path: "/orders"
    },
    {
        id: "/reviews",
        name: "Reviews",
        icon: <MdReviews />,
        path: "/reviews"
    },
    {
        id: "/withdraw-request",
        name: "Withdraw Request",
        icon: <FaMoneyCheckAlt />,
        path: "/withdraw-request"
    },
    {
        id: "/banner",
        name: "Banner",
        icon: <TiImage />,
        path: "/banners"
    },
    {
        id: "/home-page",
        name: "Home Page's Section",
        icon: <MdOutlineHomeMax />,
        path: "/home-page"
    },
    {
        id: "/feedback",
        name: "Feedback",
        icon: <TbCarouselHorizontal />,
        path: "/feedback"
    },
    {
        id: "/custom-request",
        name: "Custom Request",
        icon: <FaQuestionCircle />,
        path: "/custom-request"
    },
    {
        id: "/seller-request",
        name: "Seller Request",
        icon: <FaCartShopping />,
        path: "/seller-request"
    },
    {
        id: "/user-list",
        name: "User List",
        icon: <FaUsers />,
        path: "/user-list"
    },
    {
        id: "/admin-panel",
        name: "Admin Panel",
        icon: <MdOutlineAdminPanelSettings />,
        path: "/admin-panel"
    },
    {
        id: "/site-settings",
        name: "Site Settings",
        icon: <FaSitemap />,
        path: "/site-settings"
    },
    {
        id: "/site-terms",
        name: "Site Terms",
        icon: <MdOutlinePrivacyTip />,
        path: "/site-terms"
    },
    {
        id: "/profile-settings",
        name: "Profile Settings",
        icon: <IoMdSettings />,
        path: "/profile-settings"
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
        id: "/products",
        name: "Products",
        icon: <FaStore />,
        path: "/products"
    },
    {
        id: "/reviews",
        name: "Reviews",
        icon: <MdReviews />,
        path: "/reviews"
    },
    {
        id: "/banner",
        name: "Banner",
        icon: <TiImage />,
        path: "/banners"
    },
    {
        id: "/home-page",
        name: "Home Page's Section",
        icon: <MdOutlineHomeMax />,
        path: "/home-page"
    },
    {
        id: "/feedback",
        name: "Feedback",
        icon: <TbCarouselHorizontal />,
        path: "/feedback"
    },
    {
        id: "/custom-request",
        name: "Custom Request",
        icon: <FaQuestionCircle />,
        path: "/custom-request"
    },
    {
        id: "/seller-request",
        name: "Seller Request",
        icon: <FaCartShopping />,
        path: "/seller-request"
    },
    {
        id: "/user-list",
        name: "User List",
        icon: <FaUsers />,
        path: "/user-list"
    },
    {
        id: "/site-settings",
        name: "Site Settings",
        icon: <FaSitemap />,
        path: "/site-settings"
    },
    {
        id: "/site-terms",
        name: "Site Terms",
        icon: <MdOutlinePrivacyTip />,
        path: "/site-terms"
    },
    {
        id: "/profile-settings",
        name: "Profile Settings",
        icon: <IoMdSettings />,
        path: "/profile-settings"
    },
]

export { AdminNavs, ModeratorNavs };