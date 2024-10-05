import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
       <Link style={{fontSize:18}}
        data-testid="forget-password"
        to={`/schedule/`}
      >
        Go to demo...
      </Link>
      <h1>Go to Schedule view</h1>
     
    </div>
  );
};

export default HomePage;
