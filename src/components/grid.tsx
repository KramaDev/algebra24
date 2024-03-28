import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Grid = ({ children }: Props) => {
  return (
    <>
      <div className="grid">{children}</div>
    </>
  );
};
export default Grid;
