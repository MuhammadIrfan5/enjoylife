import React, { useState, Fragment, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock } from "dan-components";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
// import FormHelperText from '@material-ui/core/FormHelperText';
// import { MaterialDropZone } from 'dan-components';
import Save from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import AdvFilter from "../../Tables/demos/AdvFilter";
import { AdvancedTable } from "../../pageListAsync";
import MaterialDropZone from "../../../components/Forms/MaterialDropZone";
import StandardCards from "../../UiElements/demos/Cards/StandardCards";
import PromotionCard from "../../UiElements/demos/Cards/PromotionCard";
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

function listPromotion(props) {
  
    const [data,setData] = useState([]);
    const [isData,setIsData] = useState(false)
  const title = brand.name + " - Blank Page";
  const description = brand.desc;

  useEffect( () => {
    // e.preventDefault();
    // setIsLoading(true);
    const SessionData = JSON.parse(localStorage.getItem('SessionData'));

    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${SessionData[0]}`);
    // myHeaders.append("Content-Type", "application/json");
    
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = fetch(
      `http://34.125.246.209:3000/be/api/v1/dashboard/promotion/all`,
      // ${userId}
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result, 'success');
        if (result.status.toString() == 'true') {
            setData(result.promotions)
            setIsData(true);
        } else {
        //   setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log('error', error);
        // setIsLoading(false);
      });
  },[isData])

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
      <PapperBlock
        title="Promotion List"
        icon="ion-ios-card-outline"
        desc="Promotion Details"
      >
        {data.length > 0 ? <><PromotionCard data={data}/></> : <></>}
      </PapperBlock>
    </div>
  );
}

listPromotion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(listPromotion);
