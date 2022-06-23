import React from 'react';
import '../styles.css';
import { BiDollar } from "react-icons/bi";
import { BiCart } from "react-icons/bi";


export default function Home() {
  return (
    <div>
      <span>
      <button className='button'><BiDollar className='icon' /> </button>
      </span>
      <span>
        <button style={{ marginLeft: '80px' }} className='button'><BiCart className='icon' /> </button>
      </span>
    </div>
  );
}


