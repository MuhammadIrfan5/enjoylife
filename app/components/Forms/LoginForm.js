import React, { Fragment, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { withStyles, createTheme } from "@material-ui/core/styles";
import classNames from "classnames";
import { Field, reduxForm } from "redux-form/immutable";
import Button from "@material-ui/core/Button";
import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
// import AllInclusive from '@material-ui/icons/AllInclusive';
// import Brightness5 from '@material-ui/icons/Brightness5';
// import People from '@material-ui/icons/People';
import ArrowForward from "@material-ui/icons/ArrowForward";

import Paper from "@material-ui/core/Paper";
// import Icon from '@material-ui/core/Icon';
import Hidden from "@material-ui/core/Hidden";
import brand from "dan-api/dummy/brand";
// import logo from 'dan-images/logo.svg';
import logo from "dan-images/rabbithead.svg";
import { ToastContainer, toast } from "react-toastify";
import { set } from "lodash";
import { TextFieldRedux, CheckboxRedux } from "./ReduxFormMUI";
import styles from "./user-jss";

// loginAdmin
import { loginAdmin, resetloginAdmin } from "../../redux/actions/authAction";

// import { ContentDivider } from '../Divider';

// validation functions
const required = (value) => (value === null ? "Required" : undefined);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email"
    : undefined;

const LinkBtn = React.forwardRef(
  (props, ref) => (
    // eslint-disable-line
    <NavLink to={props.to} {...props} innerRef={ref} />
  ) // eslint-disable-line
);

function LoginForm(props) {
  const loginData = useSelector((state) => {
    console.log(state._root.nodes[7].entry[1].data, "loginData");
    return state._root.nodes[7].entry[1].data;
  });

  const loginError = useSelector((state) => {
    console.log(state._root.nodes[7].entry[1].error, "loginError");
    return state._root.nodes[7].entry[1].error;
  });

  // const loginData = useSelector((state) => {
  //   console.log(state._root.entries[7][1].data, "loginData");
  //   return state._root.entries[7][1].data;
  // });
  // const loginError = useSelector((state) => {
  //   console.log(state._root.entries[7][1].error, "loginError");
  //   return state._root.entries[7][1].error;
  // });

  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const {
    classes,
    // handleSubmit,
    pristine,
    submitting,
    deco,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adminEmail, password, "hello");

    const data = {
      adminEmail,
      password,
    };
    dispatch(loginAdmin(data));
    setErrMsg(false);
    setAuthLoading(true);

    // history.push("/dashboard");
  };

  useEffect(
    () => () => {
      dispatch(resetloginAdmin());
    },
    []
  );

  useEffect(() => {
    if (loginData) {
      console.log(loginData.status.toString(), "if useEffect login data");

      // history.push("/dashboard");

      if (loginData.status.toString() == "true") {
        setAuthLoading(false);
        console.log("true");
        toast.success(" Admin Login Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        console.warn("login data successssssss", loginData);
        localStorage.setItem("userDetails", JSON.stringify(loginData));

        const session_token = loginData.data.token;
        const id = loginData.data._id;
        const { name } = loginData.data;
        const { email } = loginData.data;
        const { phone } = loginData.data;
        const data = [session_token, id, name, email, phone];
        localStorage.setItem("SessionData", JSON.stringify(data));
        setAdminEmail("");
        setPassword("");
        history.push("/dashboard");
        dispatch(resetloginAdmin());
      } else if (loginData.status.toString() !== true) {
        setAuthLoading(false);
        console.log("false");
        setErrMsg(true);
        dispatch(resetloginAdmin());
      }
    } else if (loginError) {
      setAuthLoading(false);
      setErrMsg(true);
      console.log(loginError, "if useEffect error");
    } else {
      console.log(loginData, "else useEffect login data");
      setAuthLoading(false);
      // toast.error("Something Went Wrong", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
      dispatch(resetloginAdmin());
    }

    // return () => {
    //   dispatch(resetloginAdmin());
    // };
  }, [loginData, loginError]);
  return (
    <Fragment>
      {/* <ToastContainer /> */}
      <Hidden mdUp>
        <NavLink to="/" className={classNames(classes.brand, classes.outer)}>
          <img src={logo} alt={brand.name} />
          {brand.name}
        </NavLink>
      </Hidden>
      <Paper className={classNames(classes.paperWrap, deco && classes.petal)}>
        <Hidden smDown>
          <div className={classes.topBar}>
            <NavLink to="/" className={classes.brand}>
              <img src={logo} alt={brand.name} />
              {brand.name}
            </NavLink>
            {/* <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/register">
              <Icon className={classes.icon}>arrow_forward</Icon>
              Create new account
            </Button> */}
          </div>
        </Hidden>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Sign In
        </Typography>
        <Typography
          variant="caption"
          className={classes.subtitle}
          gutterBottom
          align="center"
        >
          Enjoy Life with live streaming !
        </Typography>
        {/* <section className={classes.socmedLogin}>
          <div className={classes.btnArea}>
            <Button variant="outlined" size="small" className={classes.redBtn} type="button">
            Socmed 1
            <AllInclusive className={classNames(classes.leftIcon, classes.iconSmall)} />
            </Button>
            <Button variant="outlined" size="small" className={classes.blueBtn} type="button">
              <Brightness5 className={classNames(classes.leftIcon, classes.iconSmall)} />
              Socmed 2
            </Button>
            <Button variant="outlined" size="small" className={classes.cyanBtn} type="button">
              <People className={classNames(classes.leftIcon, classes.iconSmall)} />
              Socmed 3
            </Button>
          </div>
          <ContentDivider content="Or sign in with email" />
        </section> */}
        <section className={classes.formWrap}>
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl className={classes.formControl}>
                {/* <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Your Email"
                  fullWidth
                  autoComplete="fname"
                  onChange={(e) => {
                    setAdminEmail(e.target.value);
                  }}
                  value={adminEmail}
                  validate={[required, email]}
                /> */}

                <Field
                  name="email"
                  component={TextFieldRedux}
                  placeholder="Your Email"
                  label="Your Email"
                  required
                  validate={[required, email]}
                  className={classes.field}
                  onChange={(e) => {
                    setAdminEmail(e.target.value);
                  }}
                  value={adminEmail}
                />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                {/* <TextField
                  required
                  id="firstName"
                  name="password"
                  label="Your Password"
                  className={classes.field}
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  autoComplete="fname"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                /> */}
                <Field
                  name="password"
                  component={TextFieldRedux}
                  type={showPassword ? "text" : "password"}
                  label="Your Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                  validate={required}
                  className={classes.field}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div className={classes.optArea}>
              <FormControlLabel
                className={classes.label}
                control={<Field name="checkbox" component={CheckboxRedux} />}
                label="Remember"
              />
              <Button
                size="small"
                component={LinkBtn}
                to="/reset-password"
                className={classes.buttonLink}
              >
                Forgot Password
              </Button>
            </div>

            {errMsg ? (
              <>
                <div className={classes.btnArea} style={{ color: "red" }}>
                  <h6>Something went wrong</h6>
                </div>
              </>
            ) : null}

            <div className={classes.btnArea}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                {authLoading ? <>Loading</> : <>Continue</>}
                <ArrowForward
                  className={classNames(classes.rightIcon, classes.iconSmall)}
                  disabled={submitting || pristine}
                />
              </Button>
            </div>
          </form>
        </section>
      </Paper>
    </Fragment>
  );
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const LoginFormReduxed = reduxForm({
  form: "immutableExample",
  enableReinitialize: true,
})(LoginForm);

const reducerLogin = "login";
const reducerUi = "ui";
const FormInit = connect((state) => ({
  force: state,
  initialValues: state.getIn([reducerLogin, "usersLogin"]),
  deco: state.getIn([reducerUi, "decoration"]),
}))(LoginFormReduxed);

export default withStyles(styles)(FormInit);
