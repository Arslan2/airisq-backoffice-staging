import { useSidebarOptions } from "components/common/Layout";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const { setSidebarOptions } = useSidebarOptions();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("AuthToken")) {
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
    } else {
      navigate("/login");
    }
  }, []);
  return <h1 className="text-red-600">Home Screen:</h1>;
}

export default Home;
