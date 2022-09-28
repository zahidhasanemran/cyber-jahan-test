import SearchIcon from "@mui/icons-material/Search"
import {
  Box,
  InputAdornment,
  OutlinedInput,
  useMediaQuery,
} from "@mui/material"
import { styled, useTheme } from "@mui/material/styles"
import { shouldForwardProp } from "@mui/system"
import { useEffect, useState } from "react"
import styles from "./Search.module.scss"
{
  /*===================================
Styles 
====================================*/
}

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(
  ({ theme, widthForMobile, mobile }) => {
    // console.log(widthForMobile, mobile);
    return {
      width: mobile ? widthForMobile : 250,
      marginLeft: mobile ? 0 : 16,
      paddingLeft: mobile ? 0 : 16,
      paddingRight: mobile ? 0 : 16,
      "& input": {
        background: "transparent !important",
        paddingLeft: "4px !important",
      },
      [theme.breakpoints.up("xl")]: {
        width: 400,
      },
      [theme.breakpoints.down("lg")]: {
        width: "100%",
        marginLeft: 0,
        background: "#fff",
      },
    }
  }
)

/**
 * ? SEARCH INPUT
 */

const SearchSection = () => {
  const theme = useTheme()
  const [value, setValue] = useState("")

  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"))
  // Mobile sidebar width
  const [mobileSidebarWidth, setMobileSitebarWidth] = useState(260)

  useEffect(() => {
    let doc = document.getElementsByClassName("scrollbar-container")
    if (matchDownMd === true && doc[0]?.clientWidth) {
      setMobileSitebarWidth(doc[0].clientWidth)
    }
  }, [matchDownMd, mobileSidebarWidth])

  return (
    <>
      <Box>
        <OutlineInputStyle
          mobile={matchDownMd}
          widthForMobile={mobileSidebarWidth}
          id="input-search-header"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
          classes={{ input: styles.inputCustomPadding }}
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon
                stroke={1.5}
                size="1rem"
                color={theme.palette.grey[500]}
              />
            </InputAdornment>
          }
          aria-describedby="search-helper-text"
          inputProps={{ "aria-label": "weight" }}
        />
      </Box>
    </>
  )
}

export default SearchSection
