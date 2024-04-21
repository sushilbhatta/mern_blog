import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../component/DashSidebar";
import DashProfile from "../component/DashProfile";

export default function DashBoard() {
  const location = useLocation();
  const [tab, setTab] = useState();
  useEffect(() => {
    // the search method is used to get the query parameter value from the url.
    // eg:/dashboard?tab=profile==> ?tab=profile
    // get is the  method for search  function
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        <DashSidebar />
      </div>
      {/*  profile*/}
      {tab === "profile" && <DashProfile></DashProfile>}
    </div>
  );
}
