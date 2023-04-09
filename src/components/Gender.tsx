import React, { useState } from 'react';
import "../style-sheets/Gender.css";
import { BsChevronDown } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import Listgender from "../components/Listgender";

function Gender() {
  const [selectedGender, setSelectedGender] = useState(' ');
 
  function handleGenderSelect(Gender:string) {
    if (selectedGender === Gender) {
      setSelectedGender('');
    } else {
      setSelectedGender(Gender);
    }
  }

    return (
      <div className='main-gender'>
        <div className='title-gender'> 
          <p> Gender</p>
          <BsChevronDown/>  
        </div>
          <div className='options-gender'>
            <div className='text-select-gender'>
              <div className={`letter-gender ${selectedGender === 'a1' ? 'selected-gender' : ''}`} onClick={() => handleGenderSelect('a1')}><BsCheckLg/></div>
              <div className={`letter-gender ${selectedGender === 'a2' ? 'selected-gender' : ''}`} onClick={() => handleGenderSelect('a2')}><BsCheckLg/></div>
            </div> 
            <div className='description-select-gender'>
              <div>Women</div>
              <div>Men</div>
            </div>  
          </div>   
          <div className='list-gender'>
              <Listgender/>
          </div> 
      </div>
    );
}

export default Gender;












  