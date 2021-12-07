// @ts-nocheck
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: { background: theme.palette.common.black, height: '100vh' }
}));
export default () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};
