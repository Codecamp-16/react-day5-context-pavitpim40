import { createContext, useContext, useState } from 'react';

// S1
const ContentContext = createContext();

// S2
// export default ({ children }) => {
//   return <ContentContext.Provider value={{}}>{children}</ContentContext.Provider>;
// };

export default function ContentContextProvider({ children }) {
  // State for Content
  const [isShowContent, setIsShowContent] = useState(false);
  const [toggleContentColor, setToggleContentColor] = useState(false);

  // Handle Content
  const handleToggleShowContent = () => setIsShowContent(!isShowContent);
  const handleToggleContentColor = () => setToggleContentColor(!toggleContentColor);

  return (
    <ContentContext.Provider
      value={{
        isShowContent,
        toggleContentColor,
        handleToggleShowContent,
        handleToggleContentColor,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}
// S5 : custom hook
export const useContent = () => {
  return useContext(ContentContext);
};
