import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/gtm";

function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    try {
      trackPageView(location.pathname + location.search, document.title);
    } catch {}
  }, [location.pathname, location.search]);

  return null;
}

export default RouteChangeTracker;
