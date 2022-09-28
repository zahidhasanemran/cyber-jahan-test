import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Typography, useMediaQuery } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import MenuItem from "@mui/material/MenuItem"
import OutlinedInput from "@mui/material/OutlinedInput"
import Select from "@mui/material/Select"
import { useTheme } from "@mui/material/styles"
import { Box } from "@mui/system"
import { useCallback } from "react"
import { useEffect, useState } from "react"
import styles from "./Language.module.scss"

const ITEM_HEIGHT = 38
const ITEM_PADDING_TOP = 0

/*==============================
Language select options 
==============================*/
const names = ["English", "Chinese", "Malayam", "Hindi"]

function getStyles(name, lan, theme) {
  return {
    fontWeight:
      name === lan
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  }
}

/**
 *? Language Select
 */

const LanguageSwitch = () => {
  const theme = useTheme()
  const [lan, setLan] = useState("English")

  // Max width 1200px
  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"))

  // Mobile sidebar width
  const [mobileSidebarWidth, setMobileSitebarWidth] = useState(260)

  /*==============================
  Props for style 
  ==============================*/
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
        width: matchDownMd ? `${mobileSidebarWidth - 32}` : 120,
      },
    },
  }

  /**
   ** Everytime any props or *state* changes, the component will re-render, and update it's state and all the  methods  will loose their referential identity. React won't think that the methods from the previous render is the same as the method from the current render as their referential identity has changed.
   * TODO: useCallback will stop method having a new referential identity on every render. It will save the reference and un-called methon (until the dependency has changed) so that we can call it wherever we need.
   * ! This is not ther right case to use useCallback. It will add just some extra cost here in memory for dependancy array
   * ? If we have lots of extensive child componenst those cost a lot for unnecessry re-rendering then we can use useCallback form methods.
   */

  const handleChange = useCallback(
    (event) => {
      console.count("I am running ")
      setLan(event.target.value)
    },
    [lan]
  )

  useEffect(() => {
    let doc = document.getElementsByClassName("scrollbar-container")
    if (matchDownMd === true && doc[0]?.clientWidth) {
      setMobileSitebarWidth(doc[0].clientWidth)
    }
  }, [matchDownMd, mobileSidebarWidth])

  return (
    <Box display="flex" gap="0px 20px" alignItems="center">
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.text.default,
          display: { xs: "none", xl: "block" },
        }}>
        Language
      </Typography>

      {/*===================================
      Language Select 
      ====================================*/}
      <FormControl
        sx={{ width: matchDownMd ? `${mobileSidebarWidth - 32}px` : "120px" }}>
        <Select
          value={lan}
          onChange={handleChange}
          input={
            <OutlinedInput classes={{ input: styles.inputCustomPadding }} />
          }
          IconComponent={KeyboardArrowDownIcon}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>
            }

            return selected
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, lan, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default LanguageSwitch
