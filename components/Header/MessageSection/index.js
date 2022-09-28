import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import {
  Avatar,
  Box,
  ButtonBase,
  CardActions,
  ClickAwayListener,
  Grid,
  Paper,
  Popper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material"
import Badge from "@mui/material/Badge"
import { useTheme } from "@mui/material/styles"
import PerfectScrollbar from "react-perfect-scrollbar"
import MainCard from "@components/cards/MainCard"
import styles from "./Message.module.scss"
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined"

import User1 from "public/images/users/user-round.svg"

/*==============================
Message Section 
==============================*/
const MessageSection = () => {
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"))

  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * ? Message menu states
   * */
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)
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

  console.count("Message section ")

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }
    prevOpen.current = open
  }, [open])

  return (
    <>
      {/*===================================
      Message Icon
      ====================================*/}
      <Box
        sx={{
          ml: 2,
          mr: 6,
          [theme.breakpoints.down("lg")]: {
            mr: 6,
            ml: 1,
          },
          [theme.breakpoints.down("md")]: {
            mr: 3,
            ml: 1,
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
              badgeContent={12}
              classes={{ badge: styles.customBadge }}>
              <MessageOutlinedIcon
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
        className={styles.messagePosition}>
        {() => (
          <Paper>
            {/*===================================
            Message Menu 
            ====================================*/}
            <ClickAwayListener onClickAway={handleClose}>
              <MainCard
                border={false}
                elevation={16}
                content={false}
                boxShadow
                shadow={theme.shadows[16]}>
                <PerfectScrollbar
                  style={{
                    height: "100%",
                    maxHeight: "calc(100vh - 205px)",
                    overflowX: "hidden",
                  }}>
                  <Grid container sx={{ width: "100%!important", ml: "0" }}>
                    <Grid item xs={12} sx={{ p: 0 }}>
                      <Box className={styles.messageFlex}>
                        <Typography variant="subtitle1">
                          You have 4 new message
                        </Typography>
                        <Box className={styles.viewAllBtn}>
                          <Typography
                            component={Link}
                            href="/"
                            variant="subtitle2"
                            color="primary">
                            View All
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ p: 0 }}>
                      <Box className={styles.signleMessage}>
                        <Box className={styles.mediaImg}>
                          <Avatar
                            variant="rounded"
                            src={User1?.src}
                            alt="user"
                            classes={""}
                          />
                        </Box>
                        <Box className={styles.mediaContent}>
                          <Typography
                            classes={{ h4: styles.mediaContenth4 }}
                            variant="h4">
                            MD. Any text
                          </Typography>
                          <Typography
                            classes={{ subtitle1: styles.mediaContentSub1 }}
                            variant="subtitle1">
                            Lorem ipsum dolor sit amet, consectetur.
                          </Typography>
                          <Typography
                            classes={{ subtitle2: styles.mediaContentSub2 }}
                            variant="subtitle2">
                            30 min. ago
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.signleMessage}>
                        <Box className={styles.mediaImg}>
                          <Avatar
                            variant="rounded"
                            src={User1?.src}
                            alt="user"
                            classes={""}
                          />
                        </Box>
                        <Box className={styles.mediaContent}>
                          <Typography
                            classes={{ h4: styles.mediaContenth4 }}
                            variant="h4">
                            MD. Any text
                          </Typography>
                          <Typography
                            classes={{ subtitle1: styles.mediaContentSub1 }}
                            variant="subtitle1">
                            Lorem ipsum dolor sit amet, consectetur.
                          </Typography>
                          <Typography
                            classes={{ subtitle2: styles.mediaContentSub2 }}
                            variant="subtitle2">
                            30 min. ago
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.signleMessage}>
                        <Box className={styles.mediaImg}>
                          <Avatar
                            variant="rounded"
                            src={User1?.src}
                            alt="user"
                            classes={""}
                          />
                        </Box>
                        <Box className={styles.mediaContent}>
                          <Typography
                            classes={{ h4: styles.mediaContenth4 }}
                            variant="h4">
                            MD. Any text
                          </Typography>
                          <Typography
                            classes={{ subtitle1: styles.mediaContentSub1 }}
                            variant="subtitle1">
                            Lorem ipsum dolor sit amet, consectetur.
                          </Typography>
                          <Typography
                            classes={{ subtitle2: styles.mediaContentSub2 }}
                            variant="subtitle2">
                            30 min. ago
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.signleMessage}>
                        <Box className={styles.mediaImg}>
                          <Avatar
                            variant="rounded"
                            src={User1?.src}
                            alt="user"
                            classes={""}
                          />
                        </Box>
                        <Box className={styles.mediaContent}>
                          <Typography
                            classes={{ h4: styles.mediaContenth4 }}
                            variant="h4">
                            MD. Any text
                          </Typography>
                          <Typography
                            classes={{ subtitle1: styles.mediaContentSub1 }}
                            variant="subtitle1">
                            Lorem ipsum dolor sit amet, consectetur.
                          </Typography>
                          <Typography
                            classes={{ subtitle2: styles.mediaContentSub2 }}
                            variant="subtitle2">
                            30 min. ago
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </PerfectScrollbar>
                <CardActions sx={{ p: 1.25, justifyContent: "center" }}>
                  <Box
                    sx={{
                      display: "block",
                      textDecoration: "underline",
                      pb: 1.5,
                    }}>
                    <Link href="/">Show all message</Link>
                  </Box>
                </CardActions>
              </MainCard>
            </ClickAwayListener>
          </Paper>
        )}
      </Popper>
    </>
  )
}

export default React.memo(MessageSection)
