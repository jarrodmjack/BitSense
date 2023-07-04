import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    console.log('user in Home component:', user);
  }, [user]);

  return (
    <div className="flex flex-col">
      <span>top</span>
      <span>bottom</span>
    </div>
  );
};

export default Home;