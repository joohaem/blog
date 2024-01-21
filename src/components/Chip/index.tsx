import { FC, ReactNode } from "react";
import { activeChip, inactiveChip } from "./index.css";

interface ChipProps {
  children: ReactNode;
  active?: boolean;
}

function Chip({ children, active = false }: ChipProps) {
  return <div className={active ? activeChip : inactiveChip}>{children}</div>;
}

export default Chip;
