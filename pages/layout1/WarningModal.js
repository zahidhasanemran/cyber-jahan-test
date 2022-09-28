import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useTheme } from "@mui/material/styles"
import React from "react"

function ResponsiveDialog({ status, close }) {
  const theme = useTheme()

  return (
    <div>
      <Dialog
        fullScreen={false}
        open={status}
        onClose={close}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">
          <Typography variant="h2">Read Terms &amp; Conditions</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">
            Please Read Terms &amp; Conditions then click on the checkbox.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default React.memo(ResponsiveDialog)
