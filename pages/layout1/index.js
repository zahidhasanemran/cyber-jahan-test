import { Alert, Typography, useTheme } from "@mui/material"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import Stack from "@mui/material/Stack"
import { Box } from "@mui/system"
import Head from "next/head"
import { useState } from "react"
import { MobileView } from "react-device-detect"
import WarningModal from "./WarningModal"

// Styles
import styles from "./Layout1.module.scss"

const Layout1 = () => {
  const theme = useTheme()

  /*==============================
  Checkbox states
  ==============================*/
  const [checked, setChecked] = useState(false)
  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  /*==============================
  Modal states
  ==============================*/
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    if (checked === false) {
      setOpen(true)
    } else {
      console.log("Your are Passed")
    }
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Head>
        {/*===================================
        This font will load in mobile devices
        ====================================*/}
        <MobileView>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </MobileView>
      </Head>

      {/*===================================
      Modal calling 
      ====================================*/}
      <WarningModal status={open} close={handleClose} />

      {/*===================================
      Main content start here 
      ====================================*/}
      <section className={styles.Layout}>
        <div className={styles.logo}>
          <img src="/images/cyber-jahan-lg.png" alt="" />
        </div>
        <div
          className={`${styles.registration} ${styles.bgWhite} ${styles.borderWithRadius}`}>
          <Typography variant="h2">
            Online Registration form{" "}
            <p>
              {" "}
              <span>for</span> Test
            </p>
          </Typography>
          <Box
            sx={{ display: { xs: "none", lg: "flex" } }}
            alignItems="center"
            justifyContent="space-between">
            <p className={styles.grayMD}>Last revision made on : 02/05/2022</p>
            <p className={styles.grayMD}>
              Renewed with effect from : 02/05/2023
            </p>
          </Box>
        </div>
        {/*===================================
        Second Box with absolute label 
        ====================================*/}
        <div
          className={`${styles.label1} ${styles.bgWhite} ${styles.borderWithRadius}`}>
          <div className={styles.absoluteLabel}>Label</div>
          <div className={styles.formWrapper}>
            <div className={styles.singleInput}>
              <p className={styles.bold}>Name : </p>
              <p className={styles.grayMD}>Abdur Rahman</p>
            </div>
            <div className={styles.singleInput}>
              <p className={styles.bold}>Address : </p>
              <p className={styles.grayMD}>
                {" "}
                Flat no:1124, House no: 220, Road no: 140, Avenue: 50, Block: D,
                Sector: 04, Shahid Nazrul Islam Soroni. Dhaka Bangladesh.
              </p>
            </div>
            <div className={styles.areaThree}>
              <div className={styles.singleInput}>
                <p className={styles.bold}>Area : </p>
                <p className={styles.grayMD}>Gazaria</p>
              </div>
              <div className={styles.singleInput}>
                <p className={styles.bold}>District : </p>
                <p className={styles.grayMD}>Munshiganj</p>
              </div>
              <div className={styles.singleInput}>
                <p className={styles.bold}>Division : </p>
                <p className={styles.grayMD}>Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        {/*===================================
        Registration infos 
        ====================================*/}
        <div
          className={`${styles.label2} ${styles.bgWhite} ${styles.borderWithRadius}`}>
          <div className={styles.formWrapper}>
            <div className={styles.areaThree}>
              <div className={styles.singleInput}>
                <p className={styles.bold}>Registration No. : </p>
                <p className={styles.grayMD}>28Bgt55</p>
              </div>
              <div className={styles.singleInput}>
                <p className={styles.bold}>Registration signed on : </p>
                <p className={styles.grayMD}>10/10/2022</p>
              </div>
              <div className={styles.singleInput}>
                <p className={styles.bold}>Registration will expire on : </p>
                <p className={styles.grayMD}>15/10/2022</p>
              </div>
            </div>
            <div className={styles.singleInput}>
              <p className={styles.bold}>Registration by :</p>
              <p className={styles.grayMD}>Abu Rayhan</p>
            </div>

            <div className={styles.areaThree}>
              <div className={styles.singleInput}>
                <p className={styles.bold}>Position : </p>
                <p className={styles.grayMD}>
                  Senior Marketing Manager, Information Technology.
                </p>
              </div>
              <div className={styles.singleInput}>
                <p className={styles.bold}>Mobile No. : </p>
                <p className={styles.grayMD}>+880 1234567891</p>
              </div>
              <div className={styles.singleInput}>
                <p className={styles.bold}>Email : </p>
                <p className={styles.grayMD}> moshiur.rahman@test.com</p>
              </div>
            </div>
          </div>
        </div>
        {/*===================================
        Terms and Condition Process validation
        ====================================*/}
        <div
          className={`${styles.terms} ${styles.bgWhite} ${styles.borderWithRadius}`}>
          <div className={styles.contentTC}>
            <Alert
              variant="filled"
              align="center"
              icon={false}
              sx={{
                background: theme.palette.error.default,
                display: "inline-block",
                fontSize: "18px",
                pt: 0,
                pb: 0,
                [theme.breakpoints.up("xs")]: {
                  fontSize: "14px",
                },
                [theme.breakpoints.up("lg")]: {
                  fontSize: "16px",
                },
              }}
              severity="error">
              Read Terms &amp; Conditions
            </Alert>
            {/*===================================
            Checkbox
            ====================================*/}
            <FormGroup classes={{ root: styles.formGoupCusotmRoot }}>
              <FormControlLabel
                style={{ marginRight: "0!important" }}
                componentsProps={{
                  typography: { classes: { root: styles.customFontProp } },
                }}
                sx={{ alignItems: "flex-start" }}
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": { fontSize: 30 },
                      pt: 0,
                      color: theme.palette.primary["900"],
                      "& .MuiCheckbox-root.Mui-checked": {
                        color: theme.palette.primary["900"],
                      },
                    }}
                    value={checked}
                    size="medium"
                    disableRipple
                    onChange={handleChange}
                  />
                }
                label="After having read and agreed to all the Terms & Conditions, I give my approval to Cyber Jahan Ltd. to complete the registration."
              />
            </FormGroup>
            {/*===================================
            All button 
            ====================================*/}
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              sx={{ my: 4 }}>
              <Button
                onClick={handleClickOpen}
                disableElevation
                disableRipple
                sx={{ background: "#6cb392" }}
                variant="contained">
                Approved
              </Button>
              <Button
                disableElevation
                disableRipple
                sx={{ background: "#d38c00" }}
                variant="contained">
                Change
              </Button>
              <Button
                disableElevation
                disableRipple
                sx={{ background: "#0d6efd" }}
                variant="contained">
                Renew
              </Button>
              <Button
                disableElevation
                disableRipple
                sx={{ background: "#6c757d" }}
                variant="contained">
                Print
              </Button>
            </Stack>
          </div>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              mb: "30px",
              mt: "20px",
              textAlign: "center",
            }}
            alignItems="center"
            justifyContent="space-between">
            <p className={styles.grayMD}>Last revision made on : 02/05/2022</p>
            <p className={styles.grayMD}>
              Renewed with effecf from : 15/06/2022
            </p>
          </Box>
          <p className={`${styles.grayMD} ${styles.diffColorSm}`}>
            This registration page successfully submitted on: 12/10/2021
          </p>
        </div>
        {/*===================================
        Foot note 
        ====================================*/}
        <div className={styles.footNote}>Label: Online Registration Page</div>
      </section>
    </>
  )
}

export default Layout1
