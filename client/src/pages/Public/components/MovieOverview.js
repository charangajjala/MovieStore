import React from 'react';
import {
  Grid,
  Typography,
  ButtonBase,
  makeStyles,
  Box
} from '@material-ui/core';

// A style sheet
const useStyles = makeStyles({
  image: {
    height: 400,
    width: 400
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  label: { width: 120, height: 20, overflow: 'hidden' }
});

const Stats = ({ stats, classes }) =>
  stats.map((stat, index) => (
    <Box key={`${stat.label}-${index}`} display="flex" alignItems="center">
      <Typography
        className={classes.label}
        color="inherit"
        gutterBottom
        variant="subtitle1">
        {stat.label}
      </Typography>
      <Typography color="inherit" variant="body2" gutterBottom>
        {stat.value}
      </Typography>
    </Box>
  ));

const MovieOverview = ({ title, description, image }) => {
  const classes = useStyles();
  const images ={eternals:'https://phantom-marca.unidadeditorial.es/927e619e34b67b9e7326c9266914e6f0/crop/68x0/1311x700/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/20/16294695683527.jpg','spider man-no way home':'https://images.indianexpress.com/2021/11/spider-man-no-way-home-new-poster-1200.jpg','avengers-infinity war':'https://pyxis.nymag.com/v1/imgs/8b3/ac6/ca28ec3072fdc00a5b59a72a75a39ab61b-20-avengers-lede.rsquare.w700.jpg','doctor strange-multiverse of madness':'https://m.media-amazon.com/images/I/818x-d2qUuL.jpg','wakanda forever':'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2017%2F10%2FDMQuyI5V4AAUHP0.jpg'};
  return (
    <Grid container spacing={5}>
      <Grid item>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="movie" src={image} />
        </ButtonBase>
      </Grid>
      <Grid item xs={8} container direction="column" spacing={2}>
        <Grid item>
          <Typography color="inherit" gutterBottom variant="h2">
            {title}
          </Typography>
          <Typography color="inherit" variant="body1" gutterBottom>
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            ID: 1030114
          </Typography>
          <Box height={20} />
        </Grid>
        <Grid item xs>
          <Stats
            classes={classes}
            stats={[
              { label: 'Released', value: '19 September 2019' },
              { label: 'Runtime', value: '1h 20mins' },
              { label: 'Director', value: 'George Simos' },
              { label: 'Genre', value: 'Action' },
              { label: 'Status', value: 'Released' },
              { label: 'Language', value: 'English' }
            ]}
          />
        </Grid>
        {/* <Grid item>
          <Typography
            color="inherit"
            variant="body2"
            style={{ cursor: 'pointer' }}>
            Remove
          </Typography>
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default MovieOverview;
