import React from 'react';
import ListBox from 'components/SubscribeForms/InnerBox/listBox';
import ExplainService from './InnerBox/explain';

const SubscribeForms = () => {
  return (
    <div>
      <ExplainService />
      <ListBox />
    </div>
  );
};
export default SubscribeForms;
