import React from 'react';
import {Box, CircularProgress, Typography} from "@mui/material";
import style from "./SkillCircle.module.scss";

export const SkillCircle = (props) => {


  return (
    <div className={style.skillContainer}>
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
      <h4 className={style.title}>{props.title}</h4>
      <p className={style.description}>{props.description}</p>
    </div>
  );
};
