import { useThemeContext } from "@context/themeContext"
import { useState } from "react"
import { BottomSheet } from "react-spring-bottom-sheet"
import "react-spring-bottom-sheet/dist/style.css"
import Fab from "@mui/material/Fab"
import CloseIcon from "@mui/icons-material/Close"
import { Box } from "@mui/system"
import styles from "./ChatSeet.module.scss"
import { Avatar, CardActions, Grid, Typography, useTheme } from "@mui/material"
import MainCard from "@components/cards/MainCard"
import Link from "next/link"
import PerfectScrollbar from "react-perfect-scrollbar"
import User1 from "public/images/users/user-round.svg"
// import "./Ch.module.css"

export default function ChatSeet() {
  const { searchOpen, SearchCloseHandler, SearchOpenHandler } =
    useThemeContext()
  const theme = useTheme()
  return (
    <>
      <>
        <BottomSheet
          className={styles.Wrapper}
          open={searchOpen}
          onDismiss={() => SearchCloseHandler()}
          header={<div className="sheetHeader">Chat</div>}
          snapPoints={({ maxHeight }) => 0.9 * maxHeight}
          sibling={<div className="sheetFooter"></div>}
          style={{
            "[data-rsbs-overlay], [data-rsbs-backdrop], [data-rsbs-root]:after":
              { zIndex: 9 },
          }}>
          <div className={styles.sheetBody}>
            <div className="content">
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
            </div>
            <Box className={styles.iconWrapper}>
              <Fab
                className={styles.closeIcon}
                color="error"
                aria-label="add"
                onClick={() => SearchCloseHandler()}>
                <CloseIcon sx={{ color: "#fff" }} />
              </Fab>
            </Box>
          </div>
        </BottomSheet>
      </>
    </>
  )
}
