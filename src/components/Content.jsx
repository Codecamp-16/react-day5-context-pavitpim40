import React from 'react';
import SubContent from './SubContent';
import { useContent } from '../context/ContentContext';
import { useSubContent } from '../context/SubContentContext';

const Content = ({
  content, //*
  suggestion, //*
  subContent, //*
}) => {
  const { isShowContent, toggleContentColor } = useContent();
  const { isShowSubContent, toggleSubContentColor } = useSubContent();
  return (
    <>
      {isShowContent && (
        <div
          className={`${
            toggleContentColor ? 'content--1' : 'content--2'
          } my-2  border-gray-500  border rounded-sm`}
        >
          <h1>{content}</h1>
          <h1 className='text-red-300'>{suggestion}</h1>
          {isShowSubContent && (
            <SubContent toggleSubContentColor={toggleSubContentColor} subContent={subContent} />
          )}
        </div>
      )}
    </>
  );
};
export default Content;
