/* eslint-disable indent */
import styles from "./NavGroup.module.scss"
import { useTheme } from "@mui/material/styles"
import { Divider, List, Typography } from "@mui/material"
import NavItem from "../NavItem"
import NavCollapse from "../NavCollapse"

/**
 * ? Sidebar Menu List Group
 */
const NavGroup = ({ item }) => {
  const theme = useTheme()

  //TODO useMemo
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} menu={menu} level={1} />
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        )
    }
  })

  return (
    <>
      <List
        classes={{ padding: styles.listPaddingNone }}
        subheader={
          item.title && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.menuCaption }}
              display="block"
              gutterBottom>
              {item.title}
              {item.caption && (
                <Typography
                  variant="caption"
                  sx={{ ...theme.typography.subMenuCaption }}
                  display="block"
                  gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }>
        {items}
      </List>
    </>
  )
}

export default NavGroup
