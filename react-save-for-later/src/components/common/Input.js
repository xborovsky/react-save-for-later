import React from 'react';

import './Input.css';

export const Input = ({ error,  ...props }) => (
    <div>
      <input {...props} className={props.className + (error ? ' is-invalid' : '')} />
      <div className="invalid-feedback">{error}</div>
    </div>
  );

export const TextArea = ({ error, ...props }) => (
    <div>
      <textarea {...props} className={props.className + (error ? ' is-invalid' : '')}></textarea>
      <div className="invalid-feedback">{error}</div>
    </div>
  );

export const Select = ({ error, ...props, children }) => (
  <div>
    <select {...props} className={props.className + (error ? ' is-invalid' : '')}>
      { children }
    </select>
    <div className="invalid-feedback">{error}</div>
  </div>
);