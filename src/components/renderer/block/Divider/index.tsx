import { FC } from 'react';

import { container } from './index.css';

interface CalloutProps {}

const Callout: FC<CalloutProps> = () => {
  return (
    <div className={container}/>
  );
};

export default Callout;
