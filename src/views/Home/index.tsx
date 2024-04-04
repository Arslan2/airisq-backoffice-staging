import { useSidebarOptions } from "components/common/Layout";
import React, { useEffect } from "react";

function Home() {
  const { setSidebarOptions } = useSidebarOptions();
  useEffect(() => {
    setSidebarOptions({
      dashboard: true,
      client: false,
      sites: false,
      schedule: false,
      jobs: false,
      messaging: false,
      settings: false,
    });
  }, []);
  return <h1 className="text-red-600">Home Screen:</h1>;
}

export default Home;
