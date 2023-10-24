import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import tdlImg from '../../../assets/image/2.jpg'
import snImg from '../../../assets/image/3.jpg'
import libImg from '../../../assets/image/5.jpg'
import cImg from '../../../assets/image/9.png'
import waImg from '../../../assets/image/8.png'
import fpImg from '../../../assets/image/4.jpg'

const images = [
  {
    url: tdlImg,
    title: 'TODO-LIST',
    width: '40%',
    link: 'https://annaslivankova.github.io/todolist_project/#/login'
  },
  {
    url: fpImg,
    title: 'Future Project',
    width: '30%',
    link: '#/'
  },
  {
    url: snImg,
    title: 'Social Network',
    width: '30%',
    link: '#/'
  },
  {
    url: fpImg,
    title: 'Future Project',
    width: '30%',
    link: '#/'
  },
  {
    url: libImg,
    title: 'Library',
    width: '40%',
    link: '#/'
  },
  {
    url: cImg,
    title: 'Counter',
    width: '30%',
    link: 'https://annaslivankova.github.io/counter_proj/'
  },
  {
    url: waImg,
    title: 'Weather App',
    width: '50%',
    link: 'https://annaslivankova.github.io/weather_forecast_app/#/search_page'
  },
  {
    url: fpImg,
    title: 'Future Project',
    width: '50%',
    link: '#/'
  }
];

const ImageButton = styled(ButtonBase)(({theme}) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({theme}) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({theme}) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({theme}) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export function ProjectsBlock() {
  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          href={image.link} target="_blank" rel="noreferrer"
        >
          <ImageSrc style={{backgroundImage: `url(${image.url})`}}/>
          <ImageBackdrop className="MuiImageBackdrop-root"/>
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root"/>
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}