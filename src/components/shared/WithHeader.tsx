import React from "react";

import { useNavigate } from "react-router-dom";

import { ArrowLeftIcon } from "assets/svg";

type WithHeaderProps = {
  children: React.ReactNode;
  title: string;
  disableBack?: boolean;
};

const WithHeader = ({
  children,
  title,
  disableBack = false,
}: WithHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col">
      <div
        className="flex flex-shrink-0 items-center space-x-4 p-4 text-lg font-semibold"
        style={{ boxShadow: "0 3px 5px -5px currentcolor" }}
      >
        {!disableBack && (
          <ArrowLeftIcon
            className="h-6 font-bold"
            onClick={() => navigate(-1)}
          />
        )}

        <div className="">{title} </div>
      </div>

      <div className="flex-grow  px-4">{children}</div>
    </div>
  );
};

export default WithHeader;
