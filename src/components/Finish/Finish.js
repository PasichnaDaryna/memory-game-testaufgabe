import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Finish.module.css"
export default function Finish({ modal, moves, bestScore, handleRestart }) {
    return (
        <div>
            <Dialog
                open={modal}
                disableBackdropClick
                disableEscapeKeyDown
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <h2>Memory Game</h2>
                <DialogTitle id="alert-dialog-title">
                    Hurray !!! You completed the game !!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You got {moves} moves.Your best score is {bestScore}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRestart} color="primary">
                        Restart
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
