import { useState } from 'react';
import Content from './components/Content';
import ButtonGroup from './components/ButtonGroup';
function App() {
  const subContent = {
    title: 'this is title of sub-content',
    content: 'this is content of sub-content',
  };

  return (
    <div>
      <ButtonGroup />
      <Content
        content='this is a content, not sub-content'
        suggestion='where is the subcontent?'
        subContent={subContent}
      />
    </div>
  );
}

export default App;
