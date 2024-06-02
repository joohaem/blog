import { ReactNode } from "react";

import Label from "../Label";
import { activeChip, inactiveChip } from "./index.css";

interface ChipProps {
  children: ReactNode;
  active?: boolean;
}

function Chip({ children, active = false }: ChipProps) {
  return (
    <Label size="tab-l" className={active ? activeChip : inactiveChip}>
      {children}
    </Label>
  );
}

export default Chip;
