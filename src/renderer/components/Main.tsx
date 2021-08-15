import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import icon from '../../../assets/icon.svg';

const Main = () => {
  return (
    <div className="flex flex-col space-y-8 items-center inset-0 absolute justify-center bg-gray-50">
      <img alt="icon" className="w-20 h-20" src={icon} />
      <h1 className="leading-6 text-lg font-bold">Plain Electron template</h1>
      <div>
        Electron + React + Tailwind ={' '}
        <FontAwesomeIcon icon="heart" className="text-red-500" />
      </div>
    </div>
  );
};

export default Main;
