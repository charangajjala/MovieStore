import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    background: theme.palette.background.default,
    color: theme.palette.contrastText
  },
  copyright: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5)
  }
}));
