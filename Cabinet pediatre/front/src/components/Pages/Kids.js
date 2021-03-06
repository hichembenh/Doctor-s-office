import React, {useEffect, useState} from "react";
import SuperNav from "../Navbar/SuperNav";
import {Button, Container, Grid, Grow, Paper} from "@material-ui/core";
import KidsPost from "../Posts/Kids";
import FormKid from "../Form/KidsForm";
import {useDispatch} from "react-redux";
import {getKids} from "../../actions/kids";
import useStyles from './style';


const Kids = () =>{
    const [currentId, setCurrentId] = useState(0);
    const [FormKidModel,setFormKidModel] = useState(false);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()
    const showFormKid = () =>{
        setFormKidModel(!FormKidModel)
    }

    useEffect(() => {
        dispatch(getKids());
    }, [currentId, dispatch]);
    return(
        <>
            {user && (user.result.isSec || user.result.isAdmin)  ? null:(
                <SuperNav
                    src={'/images/Baby.jpg'}
                    label='Mes Enfants'
                />
            )}
            <Grow in>

                <Container>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                    <Button className={classes.buttons} variant="outlined" color="primary" onClick={showFormKid}>Ajouter un enfant</Button>
                    {FormKidModel ? (
                        <Paper><FormKid currentId={currentId} setCurrentId={setCurrentId} /></Paper>
                    ):(
                        ''
                    )}
                    </Grid>
                    <Paper
                    >
                        <Paper>
                            <KidsPost setCurrentId={setCurrentId} />
                        </Paper>
                    </Paper>
                </Container>
            </Grow>
        </>
    )
}
export default Kids