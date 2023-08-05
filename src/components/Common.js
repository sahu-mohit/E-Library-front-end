// import React,{Component, useState} from 'react'
import Alert from './Alert';

// export default class Common as Component {
    // const [alert, setAlert] = useState(null);

    // const showAlert = (message, type) => {
    //     setAlert({
    //         msg: message,
    //         type: type,
    //     });
    //     setTimeout(() => {
    //         setAlert(null);
    //     }, 1500);
    // };
//   return (
//     <div>
//         <Alert alert={alert}/>
//     </div>
//   )
// }



import React, { Component } from 'react'

export default class Common extends Component {
    alert = null;
    showAlert = (message, type) => {
        this.alert = {
            msg: message,
            type: type,
        };
        setTimeout(() => {
            this.alert=null;
        }, 1500);
    };
  render() {
    return (
      <div>
        <Alert alert={alert}/>
      </div>
    )
  }
}

