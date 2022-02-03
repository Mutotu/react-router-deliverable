import data from "../favoriteMovies";
import { Link, Outlet } from "react-router-dom";

const FavoriteMovies = () => {
  // console.log(data)
  return (
    <div className='my-movies'>
      <div className='movielist'>
        {data.map((item, i) => {
          return (
            <div>
              <Link to={`/movies/${item.id}`}>
                <h4>{item.title}</h4>
              </Link>
              {/* <div>{item.year}</div>
              <div>{item.summary}</div>
              <img src={item.image} /> */}
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default FavoriteMovies;

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
//                   movie.show = true;
//                 }}
//               >
//                 <span>{movie.title}</span>
//                 {movie.show ? cardMaker(movie) : null}
//               </li>
//             );
//           })}
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default FavoriteMovie;

// import { useState } from "react";
// import data from "../favoriteMovies";
// import { Link, Outlet } from "react-router-dom";
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
//           {data.map((movie, i) => {
//             return (
//               <div>
//                 <Link to={`movies/${movie.id}`}>
//                   <h4>{movie.title}</h4>
//                 </Link>
//                 <div></div>
//               </div>
//             );
//           })}
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default FavoriteMovie;
