import React from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
// import { PapperBlock } from 'dan-components';
import { AdvancedTable } from "../../pageListAsync";
import AdvFilter from "../../Tables/demos/AdvFilter";
import { PapperBlock } from "dan-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../../../redux/actions/userActions";
import { ToastContainer, toast } from "react-toastify";

function listUser(props) {
  const dispatch = useDispatch();
  const title = brand.name + " - Blank Page";
  const description = brand.desc;

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const userData = useSelector((state) => {
    console.log(state._root.nodes[4].entry[1].data, "userData");
    return state._root.nodes[4].entry[1].data;
  });

  const userError = useSelector((state) => {
    console.log(state._root.nodes[4].entry[1].error, "loginError");
    return state._root.nodes[4].entry[1].error;
  });

  useEffect(() => {
    if (userData) {
      console.log(userData.status.toString(), "if useEffect login data");

      // history.push("/dashboard");

      if (userData.status.toString() == "true") {
        // setAuthLoading(false);
        console.log("true");
        // toast.success(" Admin Login Successfully!", {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });

        console.log("user data successssssss", userData);
        setData(userData.users);

        // const session_token = loginData.token;
        // const id = loginData._id;
        // const { name } = loginData;
        // const { email } = loginData;
        // const { phone } = loginData;
        // const data = [session_token, id, name, email, phone];
        // localStorage.setItem('SessionData', JSON.stringify(data));
        // setAdminEmail('');
        // setPassword('');
        // history.push('/dashboard');
        // dispatch(resetloginAdmin());
      } else if (userData.status.toString() !== true) {
        // setAuthLoading(false);
        console.log("false");
        // setErrMsg(true);
        // dispatch(resetloginAdmin());
      }
    } else if (userError) {
      // setAuthLoading(false);
      // setErrMsg(true);
      console.log(userError, "if useEffect error");
    } else {
      console.log(userData, "else useEffect login data");
      // setAuthLoading(false);
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
      // dispatch(resetloginAdmin());
    }

    // return () => {
    //   dispatch(resetloginAdmin());
    // };
  }, [userData, userError]);

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
      {/* <PapperBlock title="Blank Page" desc="Some text description">
        List User
      </PapperBlock> */}
      {/* <AdvancedTable tbl_title="User List" /> */}
      <PapperBlock
        title="User List"
        icon="ion-ios-card-outline"
        desc="User Details"
      >
        {/* <AdvancedTable tbl_title="Braodcasts List" /> */}
        <AdvFilter pageRoute="/dashboard/user/user-settings" data={data} />
      </PapperBlock>
    </div>
  );
}

export default listUser;
