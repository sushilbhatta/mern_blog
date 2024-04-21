import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
export default function DashSidebar() {
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
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* go to the profile when profile is clicked */}
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              // make the profile tab active when tab is profile only
              active={tab === "profile"}
              icon={HiUser}
              label={"User"}
              labelColor='dark'
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item className='cursor-pointer' icon={HiArrowSmRight}>
            Signout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
