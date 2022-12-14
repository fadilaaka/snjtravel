import React from "react";
import Button from "components/Button";

import "./index.scss";

export default function Breadcrumb({ data, className }) {
  const classNames = ["breadcrumb", className];
  return (
    <nav aria-label="breadcrumb">
      <ol className={classNames.join(" ")}>
        {data.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${
                index === data.length - 1 ? " active" : ""
              }`}
            >
              {index === data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
