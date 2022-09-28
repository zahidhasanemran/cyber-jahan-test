import { useThemeContext } from "@context/themeContext"
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import Link from "next/link"
import { useRouter } from "next/router"
import { forwardRef, useEffect } from "react"
import styles from "./NavItem.module.scss"

const NavItem = ({ item, level }) => {
  const router = useRouter()
  const theme = useTheme()

  const { isOpen, activeIDHandeler, sidebarToggle } = useThemeContext()
  const matchesSM = useMediaQuery(theme.breakpoints.down("lg"))

  let currentUrl = router.pathname
    .toString()
    .split("/")
    .find((id) => id === isOpen[0])

  const Icon = item.icon

  /*==============================
  Extract Icon from item object 
  ==============================*/
  const itemIcon = item?.icon && (
    <Icon
      classes={{ root: item?.submenu && styles.SvgHover }}
      className={item?.submenu && styles.SvgHover}
      stroke={1.5}
      size="1.3rem"
    />
  )

  const itemHandler = (id) => {
    activeIDHandeler(id)
    if (matchesSM) {
      sidebarToggle(false)
    }
  }

  /*==============================
  Link's target prop handle 
  ==============================*/
  let itemTarget = "_self"
  if (item.target) {
    itemTarget = "_blank"
  }

  /*==============================
  Sidebar internal or external Link tags handle  
  ==============================*/
  let listItemProps = {
    component: forwardRef((props, ref) => {
      return (
        <Link ref={ref} {...props} href={item.url} passHref={true}>
          <a
            href={item.url}
            ref={ref}
            {...props}
            className={`${
              !item?.icon ? styles.BlockLink : styles.BlockLinkAlone
            } ${isOpen[0] === item?.id && styles.Active} ${
              item?.submenu ? styles.subMenuEdit : styles.TypoFive
            } ${item?.singleMain && styles.SingleMenuHover}`}
            target={itemTarget}>
            {" "}
            {itemIcon && itemIcon} {item.title}
          </a>
        </Link>
      )
    }),
  }
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget }
  }

  //* active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id)
    if (currentIndex > -1) {
      activeIDHandeler(item.id)
    }
  }, [])

  return (
    <ListItemButton
      classes={{ root: styles.navItemRoot }}
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: `3px`,
        mb: 0.5,
        alignItems: "flex-start",
        backgroundColor: level > 1 ? "transparent !important" : "inherit",
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      selected={isOpen.findIndex((id) => id === item.id) > -1}
      onClick={() => itemHandler(item.id)}>
      <ListItemIcon sx={{ my: "auto", minWidth: !item?.icon ? 18 : 36 }}>
        {" "}
        {itemIcon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            classes={{ h5: styles.Typo5, body1: styles.Typo5 }}
            variant={
              isOpen.findIndex((id) => id === item.id) > -1 ? "h5" : "body1"
            }
            color="inherit">
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.subMenuCaption }}
              display="block"
              gutterBottom>
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  )
}

export default NavItem
