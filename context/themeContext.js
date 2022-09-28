import { createContext, useContext, useMemo, useState } from "react"

const themeDefaultValue = {}

const ThemeContext = createContext(themeDefaultValue)

export function useThemeContext() {
  return useContext(ThemeContext)
}

export default function ThemeContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState([])
  const [opened, setOpened] = useState(false)
  const activeIDHandeler = (id) => {
    //! expect string
    setIsOpen([id])
  }
  const sidebarToggle = (status) => {
    //! expect boolean
    setOpened(status)
  }

  const [searchOpen, setSearchOpen] = useState(false)
  const SearchOpenHandler = () => setSearchOpen(true)
  const SearchCloseHandler = () => setSearchOpen(false)
  console.log(searchOpen)

  const value = useMemo(
    () => ({
      isOpen,
      opened,
      activeIDHandeler,
      sidebarToggle,
      searchOpen,
      SearchOpenHandler,
      SearchCloseHandler,
    }),
    [isOpen, opened]
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
