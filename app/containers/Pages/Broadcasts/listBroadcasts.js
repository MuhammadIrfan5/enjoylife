import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock, CounterIconsWidget } from "dan-components";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { AdvancedTable } from "../../pageListAsync";
// import { AdvFilter } from './demos';
import AdvFilter from "../../Tables/demos/AdvFilter";
import classNames from "classnames";
import ProfileCard from "../../../components/CardPaper/ProfileCard";
import Connection from "../../../components/Profile/Connection";
import { apiActiveURL } from "../../../ApiBaseURL";
const styles = (theme) => ({
  demo: {
    height: "auto",
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  input: {
    margin: theme.spacing(3),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
  inputUpload: {
    display: "none",
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
});

function listBroadcast(props) {
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);

  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  const { classes } = props;

  useEffect(() => {
    // e.preventDefault();
    // setIsLoading(true);
    const SessionData = JSON.parse(localStorage.getItem("SessionData"));

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${SessionData[0]}`);
    // myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = fetch(
      `${apiActiveURL}be/api/v1/dashboard/stream/all?page=&size=`,
      // ${userId}
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "success");
        if (result.status.toString() == "true") {
          setData(result.streams);
          setIsData(true);
        } else {
          //   setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("error", error);
        // setIsLoading(false);
      });
  }, [isData]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {/* <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
              direction="row"
              spacing={3}
          >
              <Grid
              item
              md={6}
              sm={12}
              className={classes.demo}
              > */}
      <PapperBlock
        title="Live Braodcast"
        icon="ion-ios-videocam"
        desc="Live Broadcast Insights"
      >
        <div className={classes.container}>
          <CounterIconsWidget
            titleOne="Live Broadcasts"
            titleTwo="Total Blocked Broadcasts"
            titleThree="Total Active Broadcasts"
            titleFour="Total Active Users"
          />
        </div>
      </PapperBlock>
      {/* </Grid>
      </Grid> */}
      <PapperBlock
        title="Broadcast List"
        icon="ion-ios-card-outline"
        desc="Braodcast Details"
      >
        <Connection data={data} />
        {/* <AdvancedTable tbl_title="Braodcasts List" /> */}
        {/* <AdvFilter pageRoute="/dashboard/broadcasts/view-broadcast" /> */}
      </PapperBlock>
    </div>
  );
}
listBroadcast.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(listBroadcast);
