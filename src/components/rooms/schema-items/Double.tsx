import { FC } from "react";

const Double: FC<{ id: string; number: string }> = (props) => {
  return (
    <span className="xl:w-2vw xl:h-6vw w-4vw h-12vw bg-aquaButton rounded-sm border-grey border-2" />
  );
};
export default Double;
