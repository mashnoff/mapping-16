import React from 'react';
import data from './data';

const DataList = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Имя: {item.name}</p>
          <p>Возраст: {item.age}</p>
          <p>Рост: {item.height}</p>
        </div>
      ))}
    </div>
  );
};

export default DataList;
