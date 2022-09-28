import { useThemeContext } from "@context/themeContext"
import MenuIcon from "@mui/icons-material/Menu"
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { Avatar, Badge, Stack, useTheme } from "@mui/material"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import * as React from "react"
import styles from "./BottomNav.module.scss"

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents")
  const theme = useTheme()

  const { opened, sidebarToggle, notiOpneHandler, SearchOpenHandler } =
    useThemeContext()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        background: "#fff",
        height: "100%",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        "& .MuiBottomNavigationAction-label.Mui-selected": {
          color: theme.palette.text.secondary,
        },
      }}
      value={value}
      onChange={handleChange}>
      <BottomNavigationAction
        label="Search"
        value="recents"
        icon={
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: "all .2s ease-in-out",
              background: "transparent",
              color: "#000",
              "&:hover": {
                // background: theme.palette.secondary.dark,
                // color: theme.palette.secondary.light
              },
            }}
            // onClick={() => SearchOpenHandler()}
            color="inherit">
            <SearchOutlinedIcon
              stroke={1.5}
              sx={{ fontWeight: 700, fontSize: "2rem" }}
            />
          </Avatar>
        }
      />
      <BottomNavigationAction
        label="Notification"
        value="favorites"
        icon={
          <Stack
            spacing={4}
            direction="row"
            sx={{ color: "action.active" }}
            // ref={anchorRef}
            // aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true">
            <Badge
              onClick={() => notiOpneHandler()}
              className={styles.MessageColor}
              badgeContent={0}
              showZero
              classes={{ badge: styles.customBadge }}>
              <NotificationsNoneOutlinedIcon
                fontSize="large"
                className={styles.Black}
                stroke={2}
                size="2rem"
              />
            </Badge>
          </Stack>
        }
      />
      <BottomNavigationAction
        label="Chat"
        value="nearby"
        icon={
          <Stack
            spacing={4}
            direction="row"
            sx={{ color: "action.active" }}
            // ref={anchorRef}
            // aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={() => SearchOpenHandler()}>
            <Badge
              className={styles.MessageColor}
              badgeContent={12}
              classes={{ badge: styles.customBadge }}>
              <MessageOutlinedIcon
                className={styles.Black}
                sx={{ fontWeight: 700 }}
                stroke={1.5}
                size="2rem"
              />
            </Badge>
          </Stack>
        }
      />
      <BottomNavigationAction
        label="Menu"
        value="folder"
        icon={
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: "all .2s ease-in-out",
              background: "transparent",
              color: "#000",
              "&:hover": {
                // background: theme.palette.secondary.dark,
                // color: theme.palette.secondary.light
              },
            }}
            onClick={() => sidebarToggle(!opened)}
            color="inherit">
            <MenuIcon sx={{ fontWeight: 700, fontSize: "2rem" }} stroke={1.5} />
          </Avatar>
        }
      />
    </BottomNavigation>
  )
}
