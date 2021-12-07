import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import styles from './styles';
import { textTruncate } from '../../../../utils';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  const { classes, movie } = props;
  const images ={eternals:'https://phantom-marca.unidadeditorial.es/927e619e34b67b9e7326c9266914e6f0/crop/68x0/1311x700/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/20/16294695683527.jpg','spider man-no way home':'https://images.indianexpress.com/2021/11/spider-man-no-way-home-new-poster-1200.jpg','avengers-infinity war':'https://pyxis.nymag.com/v1/imgs/8b3/ac6/ca28ec3072fdc00a5b59a72a75a39ab61b-20-avengers-lede.rsquare.w700.jpg','doctor strange-multiverse of madness':'https://m.media-amazon.com/images/I/818x-d2qUuL.jpg','wakanda forever':'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2017%2F10%2FDMQuyI5V4AAUHP0.jpg'};

  return (
    <Link to={`movie/${movie._id}`} style={{ textDecoration: 'none' }}>
      <div className={classes.card}>
        <header
          className={classes.header}
          style={{
            backgroundImage: `url(${images[movie.title]})`,
          }}>
          <Typography className={classes.h4} variant="h4" color="inherit">
            {movie.genre}
          </Typography>
        </header>
        <div className={classes.body}>
          <p>{movie.duration}</p>
          <h2>{movie.title}</h2>
          <p>{movie.language}</p>
          <p>{movie.cast}</p>
          <p>{movie.director}</p>
          <p>{textTruncate(movie.description)}</p>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};
export default withStyles(styles)(MovieCard);
