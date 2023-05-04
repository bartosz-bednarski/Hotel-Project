import { FC } from "react";

const Single: FC<{ id: string; number: string }> = () => {
  return (
    <span className="xl:w-4vw xl:h-2vw w-8vw h-4vw bg-aquaButton rounded-sm border-grey border-2" />
  );
};
export default Single;
