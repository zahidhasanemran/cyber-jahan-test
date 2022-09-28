import SearchSection from "@components/Header/SearchSection"
import LanguageSwitch from "@components/LanguageSwitch/index"
import { drawerWidth } from "@constants/ThemeConstant"
import { useThemeContext } from "@context/themeContext"
import { Box, Drawer, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { BrowserView, MobileView } from "react-device-detect"
import PerfectScrollbar from "react-perfect-scrollbar"
import MenuList from "./MenuList"
import styles from "./Sidebar.module.scss"

/**
 *? SIDEBAR DRAWER
 */

const Sidebar = () => {
  const theme = useTheme()
  const { opened, sidebarToggle } = useThemeContext()
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"))

  const drawer = (
    <>
      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 80px)",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: matchUpMd ? "30px" : "110px",
            background: "#fff!important",
          }}>
          <MenuList />
          <Box sx={{ display: { xs: "block", lg: "none", marginTop: "40px" } }}>
            <SearchSection />
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                lg: "none",
                width: "100%",
                marginTop: "20px",
              },
            }}>
            <LanguageSwitch />
          </Box>
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2, pt: "110px" }}>
          <MenuList />
        </Box>
      </MobileView>
    </>
  )

  const container =
    typeof window !== undefined ? () => window.document.body : undefined

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        zIndex: 1,
      }}
      aria-label="mailbox folders">
      <Drawer
        container={container}
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        id="mobileSidebar"
        open={opened}
        classes={{ root: styles.zProps }}
        onClose={() => sidebarToggle(false)}
        PaperProps={{
          classes: { root: styles.paperRootZindex },
        }}
        ModalProps={{
          sx: {
            "& .MuiModal-root.MuiDrawer-root": {
              zIndex: 1,
            },
          },
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#fff!important",
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "80px",
            },
          },
        }}
        color="inherit">
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Sidebar
