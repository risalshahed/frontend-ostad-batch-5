"use client";

export default function Button() {
  const handeClick = () => {
    console.log('button clicked');
  }
  
  return (
    <button className='bg-red-700 p-3 cursor-pointer' onClick={handeClick}>
      Go Home
    </button>
  )
}
