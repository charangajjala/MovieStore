import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  movieInfos: {
    background: 'rgba(57, 61, 67, 0.5)',
    position: 'relative',
    height: '100%'
  },
  background: {
    position: 'absolute',
    opacity: 0.4,
    top: 0,
    height: '70%',
    right: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    zIndex: 1
  },
  title: {
    position: 'absolute',
    top: '60%',
    right: 0,
    width: '100%',
    textAlign: 'center',
    color: theme.palette.common.white,
    fontSize: '24px',
    textTransform: 'capitalize',
    zIndex: 2
  },
  info: {
    position: 'absolute',
    padding: theme.spacing(5),
    top: '70%',
    right: 0,
    width: '100%'
  },
  infoBox: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('md')]: {
    movieInfos: { minHeight: '30vh' },
    background: { height: '100%' },
    title: { top: '80%' },
    info: { display: 'none' }
  }
}));

export default function MovieInfo(props) {
  const classes = useStyles(props);
  const { movie } = props;
  const images ={eternals:'https://phantom-marca.unidadeditorial.es/927e619e34b67b9e7326c9266914e6f0/crop/68x0/1311x700/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/20/16294695683527.jpg','spider man-no way home':'https://images.indianexpress.com/2021/11/spider-man-no-way-home-new-poster-1200.jpg','avengers-infinity war':'https://pyxis.nymag.com/v1/imgs/8b3/ac6/ca28ec3072fdc00a5b59a72a75a39ab61b-20-avengers-lede.rsquare.w700.jpg','doctor strange-multiverse of madness':'https://m.media-amazon.com/images/I/818x-d2qUuL.jpg','wakanda forever':'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2017%2F10%2FDMQuyI5V4AAUHP0.jpg'};

  if (!movie) return <h1>Movie Loading...</h1>;

  return (
    <Grid item xs={12} md={12} lg={3}>
      <div className={classes.movieInfos}>
        <div
          className={classes.background}
          style={{
            backgroundImage: `url(${images[movie.title]})`
          }}
        />
        <Typography className={classes.title}>{movie.title}</Typography>
        <div className={classes.info}>
          {movie.director && (
            <div className={classes.infoBox}>
              <Typography variant="subtitle1" color="inherit">
                Director
              </Typography>
              <Typography variant="caption" color="inherit">
                {movie.director}
              </Typography>
            </div>
          )}
          {movie.cast && (
            <div className={classes.infoBox}>
              <Typography variant="subtitle1" color="inherit">
                Cast
              </Typography>
              <Typography variant="caption" color="inherit">
                {movie.cast}
              </Typography>
            </div>
          )}
          {movie.genre && (
            <div className={classes.infoBox}>
              <Typography variant="subtitle1" color="inherit">
                Genre
              </Typography>
              <Typography variant="caption" color="inherit">
                {movie.genre}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </Grid>
  );
}
