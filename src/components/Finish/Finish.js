import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogActions } from '@material-ui/core';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FaRedoAlt } from "react-icons/fa"
import "./Finish.css"




const Finish = ({ modal, moves, handleRestart }) => {
    return (

        <Dialog
            open={modal}
            disableBackdropClick
            disableEscapeKeyDown
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >

            <DialogTitle id="alert-dialog-title">
                🏆You are the champion🏆
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You got {moves} moves.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleRestart} >
                    <FaRedoAlt />


                </Button>
            </DialogActions>
        </Dialog>

    );
}
export default Finish