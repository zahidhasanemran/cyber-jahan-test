import { Avatar, Box, ButtonBase } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import LanguageSwitch from "@components/LanguageSwitch"
import LogoSection from "../LogoSection"
import MessageSection from "./MessageSection"
import NotificationSection from "./NotificationSection"
import ProfileSection from "./ProfileSection"
import SearchSection from "./SearchSection"

import { drawerWidth } from "@constants/ThemeConstant"
import { useThemeContext } from "@context/themeContext"
// import MenuIcon from "@mui/icons-material/DensityMedium"
import MenuIcon from "@mui/icons-material/Menu"
import styles from "./Header.module.scss"
import React from "react"

/**
 * ? MAIN NAVBAR / HEADER
 */

const Header = () => {
  const theme = useTheme()
  const { opened, sidebarToggle } = useThemeContext()

  console.count("Header")

  return (
    <>
      {/*===================================
      logo & sidebar toggler button
      ====================================*/}
      <Box
        sx={{
          width: "auto",
          display: "flex",
        }}>
        <Box component="div">
          <LogoSection />
        </Box>
        {/*===================================
        Bar sidebar toggle  button - Large Medium devices 
        ====================================*/}
        <ButtonBase
          className={styles.barPosition}
          sx={{
            borderRadius: "12px",
            overflow: "hidden",
            display: { xs: "none", lg: "block" },
          }}
          LinkComponent={"div"}
          disableRipple={true}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: "all .2s ease-in-out",
              background: "transparent",
              color: "#585858",
            }}
            onClick={() => sidebarToggle(!opened)}
            color="inherit">
            <MenuIcon stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      {/*===================================
      header search 
      ====================================*/}
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <SearchSection />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <LanguageSwitch />
      </Box>

      <NotificationSection />
      <MessageSection />
      <ProfileSection />
      {/*===================================
        Bar sidebar toggle  button - Mobile
        ====================================*/}
      <ButtonBase
        className={styles.barPositionMobile}
        sx={{ overflow: "hidden", display: { sm: "block", lg: "none" } }}
        LinkComponent={"div"}
        disableRipple={true}>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            transition: "all .2s ease-in-out",
            background: "transparent",
            color: "#585858",
          }}
          onClick={() => sidebarToggle(!opened)}
          color="inherit">
          <MenuIcon sx={{ fontSize: "30px" }} stroke={1.5} size="1.3rem" />
        </Avatar>
      </ButtonBase>
    </>
  )
}

export default Header
