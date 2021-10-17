import React from "react";

const infos = {
  user: {
    date: "Post at 3 hours ago",
    id: `user boo`,
  },
};
function UserInfos(props) {
  return (
    <div className="UserInfos">
      <h3>{props.user.id}</h3>
      <h3 className="post-hours-users">{props.user.date}</h3>
    </div>
  );
}

function NormalButtonShareAndComment() {
  return (
    <div>
      <button className="Share">
        Share <i class="fas fa-bullhorn"></i>
      </button>
      <button className="comment">
        Comment <i className="fas fa-comment"></i>
      </button>
    </div>
  );
}

function Articles(props) {
  console.log(props);
  return (
    <article className="post-article">
      <div className="user">
        <UserInfos user={infos.user} />
        <h3>description : {props.name}</h3>
        <img src={props.imgUrl} alt={props.alt} />
      </div>
      <NormalButtonShareAndComment />
    </article>
  );
}
export default Articles;
