// import { useSelector } from "react-redux";

// export default function TodoRedux() {
//   const state = useSelector(state => state);

//   console.log(state);

//   return (
//     <div className="px-4 py-10 max-w-md mx-auto mt-20">
//       <form className="flex flex-col items-center">
//         <div>
//           <input
//             name='title'
//             placeholder="Enter title"
//             className="border border-gray-300 px-3 py-1 rounded focus:outline-none"
//           />
//         </div>
//         <div>
//           <input
//             name='description'
//             placeholder="Enter Description"
//             className="border border-gray-300 px-3 py-1 rounded my-3"
//           />
//         </div>
//         <button type="submit" className="ml-2 bg-green-500 text-white px-2 py-1">Add</button>
//       </form>

//       <ul className="mt-4">
//         {/* {tasks.map(task => ( */}
//           <li className="flex justify-between items-center mb-2">
//             <div
//               // className={isComplete && "line-through text-gray-500"}
//             >
//               <h3 className="font-semibold text-xl">
//                 title
//               </h3>
//               <p>
//                 description
//               </p>
//             </div>
//             <button
//               className='cursor-pointer bg-amber-200 p-2'
//               // onClick={() => setIsComplete(!isComplete)}
//             >
//               Mark as Complete
//             </button>
//             <button
//               // onClick={() => removeTask(task.id)}
//               className="text-red-500"
//             >
//               x
//             </button>
//           </li>
//         {/* ))} */}
//       </ul>
//     </div>
//   );
// }