import { createTheme } from "@mui/material/styles"

// assets
import colors from "styles/scss/_themes-vars.module.scss"

// project imports
import componentStyleOverrides from "./compStyleOverride"
import themePalette from "./palette"
import themeTypography from "./typography"

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = () => {
  const color = colors

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.defbg,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    textPrimary: color.textPrimary,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    messageIcon: color.messageColor,
    error: color.error,
    textSecondary: color.textBlackish,
    textGrayish: color.textGray,
    border: color.borderColor,
    secondaryBorder: color.borderSecondary,
    primary900: color.primary900,
  }

  const themeOptions = {
    direction: "ltr",
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    typography: themeTypography(themeOption),
  }

  const themes = createTheme(themeOptions)
  // themes.components = componentStyleOverrides(themeOption);

  return themes
}

export default theme
