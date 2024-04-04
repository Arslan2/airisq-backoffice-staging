import { useSidebarOptions } from "components/common/Layout";
import React, { useEffect } from "react";

function Home() {
  const { setSidebarOptions } = useSidebarOptions();
  useEffect(() => {
    setSidebarOptions((prevObject) => {
      let updatedObject = {};
      updatedObject["dashboard"] = true;

      Object.keys(prevObject).map((key) => {
        if (key !== "dashboard") {
          updatedObject[key] = false;
        }
      });

      return updatedObject;
    });
  }, []);
  return <h1 className="text-red-600">Home Screen:</h1>;
}

export default Home;
