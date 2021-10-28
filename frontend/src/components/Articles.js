import React from "react";

import { useHistory } from "react-router-dom";

// const infos = {
//   user: {
//     date: "Post at 3 hours ago",
//     id: `user boo`,
//   },
// };
// function UserInfos(props) {
//   return (
//     <div className="UserInfos">
//       <h3>{props.user.id}</h3>
//       <h3 className="post-hours-users">{props.user.date}</h3>
//     </div>
//   );
// }

// function NormalButtonShareAndComment() {
//   return (
//     <div>
//       <button className="Share">
//         Share <i className="fas fa-bullhorn"></i>
//       </button>
//       <button className="comment">
//         Comment <i className="fas fa-comment"></i>
//       </button>
//     </div>
//   );
// }

// that you may use to navigate.import { useHistory } from "react-router-dom";




function Articles(props) {
  let history = useHistory();
  
  function handleClick(event) {
    console.log(typeof event.target.value);
    localStorage.setItem('value', event.target.value );
    history.push(`/DisplayOneProduct`);
  }
  // function handleChange(event) {
  //   console.log(document.location.href);
  //   let newURL = new URLSearchParams('/');
  //   newURL.set('id', event.target.value);
  
  return (
    <li key={props.id} value={props.id}>
      
      <h1>createdAt : {props.createdAt}</h1>
      <h2>text: {props.text}</h2>
      <h3>PersonId : {props.PersonId}</h3>
      <h4>updateAt : {props.updatedAt}</h4>
      <button onClick={handleClick} className={props.id} value={props.id}
      >but</button>
    </li>
  );
}
export default Articles;
