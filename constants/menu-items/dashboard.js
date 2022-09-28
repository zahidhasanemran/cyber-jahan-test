import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"

// constant
const icons = { DashboardOutlinedIcon }

/**
 *? DASHBOARD MENU ITEMS
 */

const dashboard = {
  id: "dashboard",
  title: "",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/",
      main: true,
      icon: icons.DashboardOutlinedIcon,
      breadcrumbs: false,
      singleMain: true,
    },
  ],
}

export default dashboard
