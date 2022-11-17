import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OndemandVideo from "@material-ui/icons/OndemandVideo";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import CollectionsBookmark from "@material-ui/icons/CollectionsBookmark";
import Edit from "@material-ui/icons/Edit";
import colorfull from "dan-api/palette/colorfull";
import CounterWidget from "../Counter/CounterWidget";
import styles from "./widget-jss";

function CounterIconWidget(props) {
  const { classes } = props;
  console.log("Props ", props);
  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[0]}
            start={0}
            end={props.firstVal ? props.firstVal : 0}
            duration={3}
            title={props.titleOne}
          >
            <OndemandVideo className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[1]}
            start={0}
            end={props.secondVal ? props.secondVal : 0}
            duration={3}
            title={props.titleTwo}
          >
            <SupervisorAccount className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        {props.pageKey == "user-settings" ? null : (
          <>
            <Grid item xs={6} md={6}>
              <CounterWidget
                color={colorfull[2]}
                start={0}
                end={90}
                duration={3}
                title={props.titleThree}
              >
                <Edit className={classes.counterIcon} />
              </CounterWidget>
            </Grid>
            <Grid item xs={6} md={6}>
              <CounterWidget
                color={colorfull[3]}
                start={0}
                end={10000}
                duration={3}
                title={props.titleFour}
              >
                <CollectionsBookmark className={classes.counterIcon} />
              </CounterWidget>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

CounterIconWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterIconWidget);
