// assets
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"

// constant
const icons = {
  DashboardOutlinedIcon,
}

/**
 *? EXTRA PAGES MENU ITEMS
 */

const pages = {
  id: "pages",
  title: "",
  caption: "",
  type: "group",
  children: [
    {
      id: "forms",
      title: "Forms",
      type: "collapse",
      icon: icons.DashboardOutlinedIcon,
      main: true,
      children: [
        {
          id: "layout1",
          title: "Layout",
          type: "item",
          url: "/layout1",
          target: false,
          submenu: true,
        },
        {
          id: "layout2",
          title: "Layout 2",
          type: "item",
          url: "/layout2",
          target: false,
          submenu: true,
        },
      ],
    },
    {
      id: "components",
      title: "Components",
      type: "collapse",
      icon: icons.DashboardOutlinedIcon,
      main: true,
      children: [
        {
          id: "typography",
          title: "Typography",
          type: "item",
          url: "/",
          target: false,
          submenu: true,
        },
        {
          id: "select",
          title: "Select",
          type: "item",
          url: "/",
          target: false,
          submenu: true,
        },
      ],
    },
    {
      id: "table",
      title: "Table",
      type: "collapse",
      icon: icons.DashboardOutlinedIcon,
      main: true,
      children: [
        {
          id: "table",
          title: "Simple Table",
          type: "item",
          url: "/",
          target: false,
          submenu: true,
        },
        {
          id: "data-table",
          title: "Data Table",
          type: "item",
          url: "/",
          target: false,
          submenu: true,
        },
      ],
    },
    {
      id: "profile",
      title: "Profile",
      type: "collapse",
      icon: icons.DashboardOutlinedIcon,
      main: true,
      children: [
        {
          id: "settings",
          title: "Settings",
          type: "item",
          url: "/",
          target: false,
          submenu: true,
        },
        {
          id: "security",
          title: "Security",
          type: "item",
          url: "/",
          target: false,
          submenu: true,
        },
      ],
    },
  ],
}

export default pages
