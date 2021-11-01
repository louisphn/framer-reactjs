import React from "react";

import Loader from "./Loader";

const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="loading">
          {" "}
          <Loader />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loading;
