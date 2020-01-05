import * as React from 'react';
import style from './wrapper.module.scss'

interface WrapperProps {
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => (
  <div className={`${style.container} ${className}`}>{children}</div>
);

export default Wrapper;
