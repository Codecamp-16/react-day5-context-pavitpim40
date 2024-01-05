import { createContext, useContext, useState } from 'react';

// S1
const SubContentContext = createContext();

// S2
export default function SubContentContextProvider({ children }) {
  // State for SubContent
  const [isShowSubContent, setIsShowSubContent] = useState(false);
  const [toggleSubContentColor, setToggleSubContentColor] = useState(false);

  // Handle SubContent
  const handleToggleShowSubContent = () => setIsShowSubContent(!isShowSubContent);
  const handleToggleSubContentColor = () => setToggleSubContentColor(!toggleSubContentColor);

  return (
    <SubContentContext.Provider
      value={{
        isShowSubContent,
        toggleSubContentColor,
        handleToggleShowSubContent,
        handleToggleSubContentColor,
      }}
    >
      {children}
    </SubContentContext.Provider>
  );
}

// S5 : custom hook
export const useSubContent = () => {
  return useContext(SubContentContext);
};
