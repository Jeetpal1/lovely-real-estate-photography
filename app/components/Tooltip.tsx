// app/components/Tooltip.tsx
import Tippy from "@tippyjs/react";
import React, { ReactElement } from "react";
import "tippy.js/dist/tippy.css";

interface TooltipProps {
  content: React.ReactNode;
  children: ReactElement;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return <Tippy content={content}>{children}</Tippy>;
};

export default Tooltip;
