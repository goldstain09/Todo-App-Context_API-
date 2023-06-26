import React from 'react';
import Input from './Input';
import Lists from './Lists';
import './TodoHome.css';

export default function TodoHome() {
  return (
    <div className='container-fluid'>
        <div className='container'>
            <div className='row'>
            <Input  />
            <Lists  />
            </div>
        </div>
    </div>
  )
}
