import React from "react";

const BackArrowIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.2367 5.94486C13.6434 5.53807 13.6434 4.87852 13.2367 4.47172C12.8299 4.06493 12.1703 4.06493 11.7635 4.47172L4.47185 11.7634C4.06505 12.1702 4.06505 12.8297 4.47185 13.2365L11.7635 20.5282C12.1703 20.935 12.8299 20.935 13.2367 20.5282C13.6434 20.1214 13.6434 19.4619 13.2367 19.0551L7.72322 13.5416L19.7917 13.5416C20.367 13.5416 20.8334 13.0753 20.8334 12.5C20.8334 11.9247 20.367 11.4583 19.7917 11.4583L7.72322 11.4583L13.2367 5.94486Z"
        className="fill-blue-600 hover:fill-blue-800 dark:fill-white"
      />
    </svg>
  );
};

export default BackArrowIcon;
