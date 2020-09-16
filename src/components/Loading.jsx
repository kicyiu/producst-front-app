import React, { useState } from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: flex;
  justify-content: center;
`;
 
function Loading(props) {

    return (
      <div>
        <BeatLoader
          css={override}
          size={25}
          color={"#123abc"}
          loading={props.loading}
        />
      </div>
    );
}

export default Loading;