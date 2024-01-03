"use client"
import { useState } from 'react';
import { FiCopy } from "react-icons/fi";
import { TbArrowsExchange } from "react-icons/tb";

export default function Home() {
  const [text, setText] = useState('');
  const [binary, setBinary] = useState('');

  const convertToBinary = () => {
    const binaryString = text
      .split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
    setBinary(binaryString);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(binary);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-[20px] font-semibold mb-4 mt-10">Text to Binary Converter</p>

      <div className="text-center ml-[30px] mr-[30px] mb-5">
        <input
          className="border outline-none p-3 rounded-[8px] w-[280px] h-[50px]"
          placeholder="Enter your Text"
          value={text}
          onChange={(e) => setText(e.target.value)}>
        </input>
      </div>

      <div className="mb-5">
        <button
          className="bg-black hover:bg-[#202020] transition-[7000] text-white w-[280px] h-[50px] rounded-[8px] flex items-center justify-center"
          onClick={convertToBinary}>
          Convert to Binary
          <TbArrowsExchange style={{ fontSize: '1.3em'}} />
        </button>
      </div>
      
      <div className='flex items-center cursor-pointer hover:text-[#202020]' onClick={copyToClipboard}>
        <p className='text-center text-[15px] font-semibold mr-[10px]'>
          Binary
        </p>
        <FiCopy style={{ fontSize: '1.1em'}} />
      </div>
      
      <div className="text-center pl-[30px] pr-[30px] md:pl-[200px] md:pr-[200px]">{binary}</div>
    </div>
  );
}
