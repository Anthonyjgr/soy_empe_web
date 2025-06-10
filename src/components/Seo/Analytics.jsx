import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "page_view",
        page_path: location.pathname,
      },
    });
  }, [location]);

  return null;
}

export default Analytics;
