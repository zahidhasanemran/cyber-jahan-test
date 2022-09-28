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

  /*==============================
  Mobile Message bottom sheet 
  ==============================*/
  const [searchOpen, setSearchOpen] = useState(false)
  const SearchOpenHandler = () => setSearchOpen(true)
  const SearchCloseHandler = () => setSearchOpen(false)

  /*==============================
  Mobile Notification bottom sheet
  ==============================*/
  const [notify, setNotify] = useState(false)
  const notiOpneHandler = () => setNotify(true)
  const notiCloseHandler = () => setNotify(false)

  const value = useMemo(
    () => ({
      isOpen,
      opened,
      activeIDHandeler,
      sidebarToggle,
      searchOpen,
      SearchOpenHandler,
      SearchCloseHandler,
      notiOpneHandler,
      notiCloseHandler,
      notify,
    }),
    [isOpen, opened, searchOpen, notify]
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
