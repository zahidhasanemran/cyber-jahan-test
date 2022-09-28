import MainCard from "@components/cards/MainCard"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { useRouter } from "next/router"
import User1 from "public/images/users/user-round.svg"
import { useEffect, useRef, useState } from "react"
import PerfectScrollbar from "react-perfect-scrollbar"
import styles from "./ProfileSection.module.scss"

/**
 *? PROFILE MENU
 */

const ProfileSection = () => {
  const theme = useTheme()
  const navigate = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [open, setOpen] = useState(false)
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null)

  /*==============================
  All event handler 
  ==============================*/
  const handleLogout = async () => {
    console.log("Logout")
  }
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }
  const handleListItemClick = (event, index, route = "") => {
    setSelectedIndex(index)
    handleClose(event)
    if (route && route !== "") {
      // navigate(route); //TODO navigate her
    }
  }
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  const prevOpen = useRef(open)

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }
    prevOpen.current = open
  }, [open])

  return (
    <>
      {/*===================================
      Profile Avater
      ====================================*/}
      <Chip
        sx={{
          height: "48px",
          alignItems: "center",
          transition: "all .2s ease-in-out",
          borderColor: "none",
          '&[aria-controls="menu-list-grow"], &:hover': {
            border: "none",
            color: theme.palette.primary.light,
          },
          "& .MuiChip-label": {
            fontWeight: "600",
            color: "#012970 ",
            fontSize: "18px",
            display: { xs: "none", md: "block" },
            "&:hover": {},
          },
        }}
        classes={{ root: styles.borderNone, clickable: styles.bgRemoveOnHover }}
        icon={
          <Avatar
            classes={{ root: styles.customAvaterSize }}
            src={User1?.src}
            sx={{
              ...theme.typography.mediumAvatar,
              margin: "8px 0 8px 8px !important",
              cursor: "pointer",
            }}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label="Jhon Doe"
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      {/*===================================
      Profile Menu 
      ====================================*/}
      <Popper
        placement="bottom-end"
        open={open}
        className={styles.profilePosition}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}>
        {() => (
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MainCard border={false} elevation={16} content={false}>
                <Box sx={{ pt: 5 }}>
                  <Stack display="flex" direction="column" alignItems="center">
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Typography
                        variant="h3"
                        sx={{
                          display: "block",
                          color: theme.palette.text.grayish,
                          fontWeight: 600,
                        }}>
                        Abdur Rahman
                      </Typography>
                    </Stack>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#848b92", fontWeight: "400", pb: 1 }}>
                      Senior Sales Executive
                    </Typography>
                  </Stack>
                </Box>
                <PerfectScrollbar
                  style={{
                    height: "100%",
                    maxHeight: "calc(100vh - 250px)",
                    overflowX: "hidden",
                  }}>
                  <Box sx={{ pt: 2 }}>
                    <List
                      component="nav"
                      sx={{
                        width: "100%",
                        maxWidth: 350,
                        minWidth: 300,
                        pb: 0,
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: "10px",
                        [theme.breakpoints.down("md")]: {
                          minWidth: "100%",
                        },
                        "& .MuiListItemButton-root": {
                          // mt: 0.5
                        },
                      }}>
                      <ListItemButton
                        sx={{
                          borderTop: "1px solid #ddd",
                          borderBottom: "1px solid #ddd",
                          margin: 0,
                          "&:hover": {
                            bgcolor: theme?.palette.background.default,
                            borderRadius: "0px!important",
                          },
                        }}
                        selected={selectedIndex === 1}
                        onClick={(event) =>
                          handleListItemClick(
                            event,
                            1,
                            "/user/social-profile/posts"
                          )
                        }>
                        <ListItemIcon>
                          <AccountCircleOutlinedIcon
                            fontSize="large"
                            stroke={1.5}
                            size="1.3rem"
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Grid
                              container
                              spacing={1}
                              justifyContent="space-between">
                              <Grid item>
                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: ".75rem",
                                      sm: ".875rem",
                                      xl: "1.05rem",
                                    },
                                  }}
                                  variant="body2">
                                  My Profile
                                </Typography>
                              </Grid>
                            </Grid>
                          }
                        />
                      </ListItemButton>
                      <ListItemButton
                        sx={{
                          borderBottom: "1px solid #ddd",
                          margin: 0,
                          "&:hover": {
                            bgcolor: theme?.palette.background.default,
                            borderRadius: "0px!important",
                          },
                        }}
                        selected={selectedIndex === 0}
                        onClick={(event) =>
                          handleListItemClick(
                            event,
                            0,
                            "/user/account-profile/profile1"
                          )
                        }>
                        <ListItemIcon>
                          <SettingsOutlinedIcon
                            fontSize="large"
                            stroke={1.5}
                            size="1.3rem"
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: ".75rem",
                                  sm: ".875rem",
                                  xl: "1.05rem",
                                },
                              }}
                              variant="body2">
                              Account Settings
                            </Typography>
                          }
                        />
                      </ListItemButton>
                      <ListItemButton
                        sx={{
                          borderBottom: "1px solid #ddd",
                          margin: 0,
                          "&:hover": {
                            bgcolor: theme?.palette.background.default,
                            borderRadius: "0px!important",
                          },
                        }}
                        selected={selectedIndex === 4}
                        onClick={handleLogout}>
                        <ListItemIcon>
                          <HelpOutlineOutlinedIcon
                            fontSize="large"
                            stroke={1.5}
                            size="1.3rem"
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: ".75rem",
                                  sm: ".875rem",
                                  xl: "1.05rem",
                                },
                              }}
                              variant="body2">
                              Need Help ?
                            </Typography>
                          }
                        />
                      </ListItemButton>
                      <ListItemButton
                        sx={{
                          borderBottom: "1px solid #ddd",
                          margin: 0,
                          "&:hover": {
                            bgcolor: theme?.palette.error.default,
                            borderRadius: "0px!important",
                            ".MuiTypography-root, .MuiSvgIcon-root": {
                              color: "#fff",
                            },
                          },
                        }}
                        selected={selectedIndex === 4}
                        onClick={handleLogout}>
                        <ListItemIcon>
                          <ExitToAppIcon
                            fontSize="large"
                            stroke={1.5}
                            size="1.3rem"
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: ".75rem",
                                  sm: ".875rem",
                                  xl: "1.05rem",
                                },
                              }}
                              variant="body2">
                              Logout
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </List>
                  </Box>
                </PerfectScrollbar>
              </MainCard>
            </ClickAwayListener>
          </Paper>
        )}
      </Popper>
    </>
  )
}

export default ProfileSection
