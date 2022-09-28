import { useEffect } from "react"
import {
  AppBar,
  Box,
  CssBaseline,
  Grid,
  Toolbar,
  useMediaQuery,
} from "@mui/material"
import { styled, useTheme } from "@mui/material/styles"
import Sidebar from "@components/Sidebar/Index"
import { drawerWidth } from "@constants/ThemeConstant"
import { useThemeContext } from "@context/themeContext"
import Header from "@components/Header"
import { shouldForwardProp } from "@mui/system"
import BottomNav from "@components/Navigation/BottomNav"
import { BrowserView, MobileView } from "react-device-detect"

import styles from "./Layout.module.scss"
import SearchSheet from "@components/sheet/SearchSheet"

/*==============================
Main tage Styles
==============================*/
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: "0px",
      [theme.breakpoints.up("md")]: {
        marginLeft: "0px!important",
        marginRight: "0px!important",
        width: "100%",
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: "0px",
        width: `calc(100% - ${drawerWidth}px)`,
        // padding: "16px",
      },
      [theme.breakpoints.down("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down("md")]: {
        marginLeft: "0px",
      },
      [theme.breakpoints.up("xs")]: {
        marginRight: "0px!important",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0px",
      },
    }),
  })
)

/**
 * ? Min Layout
 */

export default function Layout({ children }) {
  const theme = useTheme()

  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"))
  const { opened, sidebarToggle, activeIDHandeler, isOpen, searchOpen } =
    useThemeContext()

  useEffect(() => {
    sidebarToggle(!matchDownMd)
  }, [matchDownMd])

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <CssBaseline />

      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        classes={{ root: styles.customBoxShadow }}
        sx={{
          transition: opened ? theme.transitions.create("width") : "none",
        }}>
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>

      <Sidebar drawerOpen={opened} drawerToggle={sidebarToggle} />

      <Main theme={theme} open={opened} className={styles.differentBg}>
        <Box sx={{ p: { xs: 0, md: 2 } }} className={styles.children}>
          {children}
        </Box>
        <footer className={styles.Footer}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className={styles.copryrightText}>
                <p>
                  © Copyright <span>Cyber Jahan Limited.</span> All Rights
                  Reserved Designed and Developed by Cyber Jahan Limited
                </p>
              </div>
            </Grid>
          </Grid>
        </footer>

        {/* <SearchSheet /> */}
      </Main>

      <Box className={styles.mobileBottomNav}>
        <BottomNav />
      </Box>
    </Box>
  )
}
