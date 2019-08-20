import React, { unstable_Profiler } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import PropTypes from "prop-types";

const Profile = ({ classes }) => {
  return (<div>helllooo</div>);
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile);
