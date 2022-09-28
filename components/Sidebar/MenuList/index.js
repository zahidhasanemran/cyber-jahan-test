/* eslint-disable indent */
import { Typography } from "@mui/material"
import NavGroup from "./NavGroup"
import menuItem from "@constants/menu-items"

// NavItem Switch //TODO useMemo
const navItems = menuItem.items.map((item) => {
  switch (item.type) {
    case "group":
      return <NavGroup key={item.id} item={item} />
    default:
      return (
        <Typography key={item.id} variant="h6" color="error" align="center">
          Menu Items Error
        </Typography>
      )
  }
})

/**
 *? SIDEBAR MENU LIST
 */
const MenuList = () => <>{navItems}</>

export default MenuList
