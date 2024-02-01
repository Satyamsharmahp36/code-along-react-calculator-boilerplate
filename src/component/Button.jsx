// import React from 'react'
// import { Actions } from '../App'

// function Button({dispatch,digit}) {

//   return (
//     <div>
//         <button
//         onClick={()=>dispatch({
//             type:Actions.ADD_DIGIT,payload :{ digit}
//         })}>
//         {props.data}
//         </button>
//     </div>
//   )
// }

// export default Button

import React from 'react';
import { ACTIONS } from '../App';

function Button({ dispatch, digit }) {
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.ADD_DIGIT,
            payload: { digit }, // Corrected from props.data to digit
          })
        }
      >
        {digit}
      </button>
    </div>
  );
}

export default Button;
