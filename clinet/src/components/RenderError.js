import React from "react";

const RenderError = ({ error }) => {
  return (
    <div class="alert alert-danger" role="alert">
      {error}
    </div>
  );
};

export default RenderError;
