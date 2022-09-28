import { LogoFullImg } from "@constants/assets"
import { defaultPath } from "@constants/links"
import { drawerWidth } from "@constants/ThemeConstant"
import { Box, useMediaQuery, useTheme } from "@mui/material"
import Link from "next/link"

/**
 *? MAIN LOGO
 */

const LogoSection = () => {
  const theme = useTheme()
  const matchesXs = useMediaQuery(theme.breakpoints.up("xl"))
  return (
    <>
      <Link href={defaultPath}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: {
              xs: "200px",
              sm: "250px",
              md: `300px`,
              lg: `${drawerWidth}px`,
              xl: `${drawerWidth}px`,

            },
            cursor: 'pointer'
          }}>
          <img
            src={LogoFullImg}
            alt="Cyber Jahan"
            style={{ width: matchesXs ? "85%" : "100%" }}
          />
        </Box>
      </Link>
    </>
  )
}

export default LogoSection
