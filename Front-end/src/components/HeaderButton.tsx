import { ReactNode } from "react";

export enum ButtonColorEnum {
    BLUE = `text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300`,
    GREEN = `text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300`,
    PURPLE = `text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300`,
}

interface IHeaderButton {
  value: string;
  children: ReactNode;
  color: ButtonColorEnum;
}

export const HeaderButton = ({ value, children, color = ButtonColorEnum.BLUE }: IHeaderButton) => {
  return (
    <button
      type="button"
      className={`w-full flex items-center justify-center gap-1 
            font-medium rounded-lg text-xs px-5 py-2 text-center ${color}`}
    >
      {children}
      {value}
    </button>
  );
};
