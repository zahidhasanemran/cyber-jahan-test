import MainCard from "@components/cards/MainCard"
import NotificationList from "@components/Header/NotificationSection/NotificationList"
import { useThemeContext } from "@context/themeContext"
import { useTheme } from "@emotion/react"
import CloseIcon from "@mui/icons-material/Close"
import {
  Button,
  CardActions,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import Fab from "@mui/material/Fab"
import { Box } from "@mui/system"
import Link from "next/link"
import PerfectScrollbar from "react-perfect-scrollbar"
import { BottomSheet } from "react-spring-bottom-sheet"
import "react-spring-bottom-sheet/dist/style.css"
import styles from "./ChatSeet.module.scss"
// import "./Ch.module.css"

export default function Notification() {
  const theme = useTheme()
  const { notiOpneHandler, notiCloseHandler, notify } = useThemeContext()
  return (
    <>
      <>
        <BottomSheet
          className={styles.Wrapper}
          open={notify}
          onDismiss={() => notiCloseHandler()}
          header={<div className="sheetHeader">Notifications</div>}
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
                      <NotificationList />
                    </PerfectScrollbar>
                  </Grid>
                </Grid>
                {/* <Divider /> */}
                <CardActions sx={{ p: 1.25, justifyContent: "center" }}>
                  <Button size="small" disableElevation href="/">
                    View All
                  </Button>
                </CardActions>
              </MainCard>
            </div>
            <Box className={styles.iconWrapper}>
              <Fab
                className={styles.closeIcon}
                color="error"
                aria-label="add"
                onClick={() => notiCloseHandler()}>
                <CloseIcon sx={{ color: "#fff" }} />
              </Fab>
            </Box>
          </div>
        </BottomSheet>
      </>
    </>
  )
}
