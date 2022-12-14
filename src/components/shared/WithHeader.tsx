import React from "react";

import { useNavigate } from "react-router-dom";

import { ArrowLeftIcon } from "assets/svg";
import ThemeContainer from "./ThemeContainer";

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
      <ThemeContainer>
        <div
          className="flex flex-shrink-0 items-center space-x-4 p-4  text-lg font-semibold"
          style={{ boxShadow: "0 3px 5px -5px currentcolor" }}
        >
          {!disableBack && (
            <ArrowLeftIcon
              className="h-5 font-bold"
              onClick={() => navigate(-1)}
            />
          )}

          <div className="tracking-wider">{title} </div>
        </div>
      </ThemeContainer>

      <div className="flex-grow px-4 py-2">{children}</div>
    </div>
  );
};

export default WithHeader;
