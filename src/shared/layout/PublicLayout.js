import React from "react";
// Add this Layout to all pages that dont require authentication
const PublicLayout = props => {
  return (
    <div>
          {props.children}
    </div>
  );
};

export default PublicLayout;