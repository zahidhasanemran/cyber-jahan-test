/* eslint-disable indent */
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { useState } from "react"
import NavItem from "../NavItem"
import styles from "./NavCollapse.module.scss"

/**
 * ?  Collapsable menu title and caption
 */
const NavCollapse = ({ menu, level }) => {
  const theme = useTheme()

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleClick = () => {
    setOpen(!open)
    setSelected(!selected ? menu.id : null)
  }

  /*==============================
   menu collapse & item
  ==============================*/
  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case "collapse":
        return <NavCollapse key={item.id} menu={item} level={level + 1} />
      case "item":
        return <NavItem key={item.id} item={item} level={level + 1} />
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        )
    }
  })

  const Icon = menu.icon
  const menuIcon = menu.icon ? (
    <Icon
      strokeWidth={1.5}
      size="1.3rem"
      style={{ marginTop: "auto", marginBottom: "auto" }}
    />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: selected === menu.id ? 8 : 6,
        height: selected === menu.id ? 8 : 6,
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  )

  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: `3px`,
          mb: "10px",
          alignItems: "flex-start",
          backgroundColor: level > 1 ? "transparent !important" : "inherit",
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`,
        }}
        selected={selected === menu.id}
        onClick={handleClick}>
        <ListItemIcon sx={{ my: "auto", minWidth: !menu.icon ? 18 : 36 }}>
          {menuIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              classes={{ root: styles.TypoFive }}
              variant={selected === menu.id ? "h5" : "body1"}
              color="inherit"
              sx={{ my: "auto" }}>
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography
                variant="caption"
                sx={{ ...theme.typography.subMenuCaption }}
                display="block"
                gutterBottom>
                {menu.caption}
              </Typography>
            )
          }
        />
        {open ? (
          <ExpandLessIcon
            stroke={1.5}
            size="1rem"
            htmlColor="#4759f1"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        ) : (
          <ExpandMoreIcon
            stroke={1.5}
            size="1rem"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          classes={{ padding: styles.listPaddingNone }}
          sx={{
            position: "relative",
            paddingY: "0px",
          }}>
          {menus}
        </List>
      </Collapse>
    </>
  )
}

export default NavCollapse
