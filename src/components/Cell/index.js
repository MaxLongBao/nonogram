import React from 'react';

const Cell = (props) => {

  const { content } = props;

  return (
    <div>
      {content}
    </div>
  );
};

export default Cell;