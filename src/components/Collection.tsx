import React, { useState } from 'react';
import "../style-sheets/Collection.css";
import { BsChevronDown } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";

function Collection() {
  const [selectedCollection, setSelectedCollection] = useState('XS');

  function handleCollectionSelect(collection: string) {
    if (selectedCollection === collection) {
      setSelectedCollection('');
    } else {
      setSelectedCollection(collection);
    }
  }
  
  return (
    <div className='main-collection'>
      <div className='title-collection'>
        <p> Collection</p>
        <BsChevronDown/>
      </div>
      <div className='options-collection'>
        <div className='text-select'>
          <div className={`letter-collection ${selectedCollection === 'a1' ? 'selected-collection' : ''}`} onClick={() => handleCollectionSelect('a1')}><BsCheckLg/></div>
          <div className={`letter-collection ${selectedCollection === 'a2' ? 'selected-collection' : ''}`} onClick={() => handleCollectionSelect('a2')}><BsCheckLg/></div>
          <div className={`letter-collection ${selectedCollection === 'a3' ? 'selected-collection' : ''}`} onClick={() => handleCollectionSelect('a3')}><BsCheckLg/></div>
        </div>
        <div className='description-select'>
          <div>Paintbox</div>
          <div>Mineral</div>
          <div>Winter</div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
