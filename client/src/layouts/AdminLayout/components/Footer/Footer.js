import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Charan,Hari,Sreeram 2021
      </Typography>
      <Typography variant="caption">
        Created with purpose |{' '}
        <Link href="https://github.com/charangajjala" target="_blank" rel="noopener">
          Charan-Hari-Sreram
        </Link>
      </Typography>
    </div>
  );
}