// eslint-disable-next-line import/no-extraneous-dependencies

import React from 'react';

const ReactComponent: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  // eslint-disable-next-line lodash/prefer-constant
  const fn = (): boolean => true;

  return (
    <button
      onClick={(): void => {
        setIndex(index + 1);
        fn();
      }}
      type="button"
    >
      Button Clicks: {index}
    </button>
  );
};

export default ReactComponent;
