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
import { apiActiveURL } from "../../../ApiBaseURL";
import AdvFamilyFilter from "../../Tables/demos/advFamilyFilter";
function listFamily(props) {
  const dispatch = useDispatch();
  const title = brand.name + " - Blank Page";
  const description = brand.desc;

  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);

//   dashboard/get/family?fetchAll=true
  useEffect(() => {
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
      `${apiActiveURL}be/api/v1/dashboard/get/family?fetchAll=true`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {    
        if (result.status.toString() == "true") {
            
          setData(result.data);
          console.log(data, "family");
          setIsData(true);
        } else {
          //   setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("error", error);
        // setIsLoading(false);
      });
  },[]);

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
        title="Family List"
        icon="ion-ios-card-outline"
        desc="Family Details"
      >
        {/* <AdvancedTable tbl_title="Braodcasts List" /> */}
        <AdvFamilyFilter pageRoute="" data={data} />
      </PapperBlock>
    </div>
  );
}

export default listFamily;
