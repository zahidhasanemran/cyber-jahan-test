import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import {
  Box,
  Button,
  ButtonBase,
  CardActions,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  Paper,
  Popper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material"
import Badge from "@mui/material/Badge"
import { useTheme } from "@mui/material/styles"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import PerfectScrollbar from "react-perfect-scrollbar"

import MainCard from "@components/cards/MainCard"
import styles from "./Notification.module.scss"
import NotificationList from "./NotificationList"

/**
 * ? NOTIFICATION
 */

const NotificationSection = () => {
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"))

  /**
   * ? Notification states
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
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
    Notification Icon 
    ====================================*/}
      <Box
        sx={{
          ml: 7,
          mr: 1,
          [theme.breakpoints.down("lg")]: {
            mr: 3,
          },
          [theme.breakpoints.up("sm")]: {
            display: "block",
          },
          [theme.breakpoints.up("xs")]: {
            display: "none",
          },
        }}>
        <ButtonBase sx={{ borderRadius: "12px" }}>
          <Stack
            spacing={4}
            direction="row"
            sx={{ color: "action.active" }}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}>
            <Badge
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
        </ButtonBase>
      </Box>
      <Popper
        placement={matchesXs ? "bottom" : "bottom-end"}
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [matchesXs ? 5 : 0, 20],
              },
            },
          ],
        }}
        className={styles.notificationPosition}>
        {() => (
          <Paper>
            {/*===================================
            Notification Menu 
            ====================================*/}
            <ClickAwayListener onClickAway={handleClose}>
              <MainCard
                border={false}
                elevation={16}
                content={false}
                boxShadow
                shadow={theme.shadows[16]}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ pt: 2, px: 2 }}>
                      <Grid item>
                        <Stack direction="row" spacing={2}>
                          <Typography variant="subtitle1">
                            All Notification
                          </Typography>
                          <Chip
                            size="small"
                            label="01"
                            sx={{
                              color: theme.palette.background.default,
                              bgcolor: theme.palette.warning.dark,
                            }}
                          />
                        </Stack>
                      </Grid>
                      <Grid item>
                        <Typography
                          component={Link}
                          href="/"
                          variant="subtitle2"
                          color="primary">
                          Mark as all read
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <PerfectScrollbar
                      style={{
                        height: "100%",
                        maxHeight: "calc(100vh - 205px)",
                        overflowX: "hidden",
                      }}>
                      <Grid container direction="column" spacing={2}>
                        <Grid item xs={12} p={0}>
                          <Divider sx={{ my: 0 }} />
                        </Grid>
                      </Grid>
                      <NotificationList />
                    </PerfectScrollbar>
                  </Grid>
                </Grid>
                <Divider />
                <CardActions sx={{ p: 1.25, justifyContent: "center" }}>
                  <Button size="small" disableElevation href="/">
                    View All
                  </Button>
                </CardActions>
              </MainCard>
            </ClickAwayListener>
          </Paper>
        )}
      </Popper>
    </>
  )
}

export default NotificationSection
