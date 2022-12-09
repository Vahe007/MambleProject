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

    const btnStyles = {
        color: '#174348',
        fontWeight: 600,
        // width: '25px',
        // height: '28px',
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogContent sx={{padding: '50px 50px 30px 50px'}}>
                <DialogContentText sx={{ color: '#008594', fontSize: '18px', fontWeight: 500 }}>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '40px' }}>
                <Button sx={btnStyles} onClick={handleConfirm}>Yes</Button>
                <Button sx={btnStyles} onClick={handleClose}>No</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal