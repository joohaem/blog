import { FC, ReactNode } from "react";
import { activeChip, inactiveChip } from "./index.css";
import Label from "../Label";

interface ChipProps {
  children: ReactNode;
  active?: boolean;
}

function Chip({ children, active = false }: ChipProps) {
  return <Label size="tab-l" className={active ? activeChip : inactiveChip}>{children}</Label>;
}

export default Chip;
