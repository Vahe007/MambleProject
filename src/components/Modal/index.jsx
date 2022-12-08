import react from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

const Modal = ({ handleConfirm, content, setOpen, open }) => {

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogContent>
                <DialogContentText>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirm}>Yes</Button>
                <Button onClick={handleClose}>No</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal