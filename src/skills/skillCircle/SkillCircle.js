import React from 'react';
import {Box, CircularProgress, createTheme, ThemeProvider, Typography} from "@mui/material";
import style from "./SkillCircle.module.scss";

export const SkillCircle = (props) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#0072ff'
            },
            secondary: {
                main: '#00c6ff'
            },
        }
    })

    return (
        <div className={style.skillContainer}>
            <ThemeProvider theme={theme}>
                <Box sx={{position: 'relative', display: 'inline-flex'}}>
                    <CircularProgress variant="determinate" value={100} size={160} color={"secondary"}/>
                    <CircularProgress variant="determinate" value={props.value} size={160} color={"primary"}
                                      sx={{position: 'absolute'}}></CircularProgress>
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant="caption"
                            component="div"
                            color="text.primary"
                            fontSize={30}
                        >{`${props.value}%`}</Typography>
                    </Box>
                </Box>
            </ThemeProvider>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};
