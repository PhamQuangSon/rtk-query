import "./SidebarOption.scss";
import React from "react";

export function SidebarOption({ title, Icon }: any) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}
