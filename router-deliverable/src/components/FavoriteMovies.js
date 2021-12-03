// import { useState } from "react";

// const FavoriteMovie = (props) => {
//   const [show, setShow] = useState(false);
//   const cardMaker = (arg) => {
//     if (show) {
//       return (
//         <div className='card'>
//           <p>Year: {arg.year}</p>
//           <p>Summary: {arg.summary}</p>
//           <img src={arg.image} />
//         </div>
//       );
//     } else {
//       return null;
//     }
//   };

//   return (
//     <div>
//       <ul>
//         <div className='movies'>
//           {props.movies.map((movie, i) => {
//             return (
//               <li
//                 className='list'
//                 key={i}
//                 onClick={() => {
//                   setShow(true);

//                 }}
//               >
//                 <span>{movie.title}</span>
//                 {show ? cardMaker(movie) : null}
//               </li>
//             );
//           })}
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default FavoriteMovie;

import { useState, useEffect } from "react";

const FavoriteMovie = (props) => {
  const [show, setShow] = useState(!true);

  const cardMaker = (arg) => {
    if (show) {
      return (
        <div className='card'>
          <p>Year: {arg.year}</p>
          <p>Summary: {arg.summary}</p>
          <img src={arg.image} />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <ul>
        <div className='movies'>
          {props.movies.map((movie, i) => {
            return (
              <li className='list' key={i} onClick={() => {}}>
                <span>{movie.title}</span>
                {show ? cardMaker(movie) : null}
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default FavoriteMovie;
