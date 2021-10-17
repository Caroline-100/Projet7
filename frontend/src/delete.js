import React from "react";

import PostArtc from "./PostArtc";
// import ReactDOM from "react-dom";

class Main extends React.Component {
  constructor() {
    super();
    this.UserInfos = this.UserInfos.bind(this);
    this.TopButtonShareAndComment = this.TopButtonShareAndComment.bind(this);
    //  this.function = this.function.bind(this)
  }
  OnClickBtn(event) {
    value = event.target;
    console.log(value);
  }
  UserInfos(props) {
    return (
      <div className="UserInfos">
        <h3>{props.user.id}</h3>
        <h3 className="post-hours-users">{props.user.date}</h3>
      </div>
    );
  }
  TopButtonShareAndComment() {
    return (
      <div>
        <button onClick={this.OnClickBtn} className="top-Share">
          Share <i class="fas fa-bullhorn"></i>
        </button>
        <button className="top-comment">
          Comment <i className="fas fa-comment"></i>
        </button>
      </div>
    );
  }
  render() {
    return (
      <main>
        <section className="top-popular">
          <h1>TOP 5 articles</h1>
          <div className="bloc-article-top-popular">
            <article className="article-top">
              <UserInfos user={infos.user} />
              <p>Lorem ipsum dolor sit,</p>
              <TopButtonShareAndComment />
            </article>
            <article className="article-top">
              <UserInfos user={infos.user} />
              <p>Lorem ipsum dolor sit blou,</p>
              <TopButtonShareAndComment />
            </article>
            <article className="article-top">
              <UserInfos user={infos.user} />
              <div>
                {/* <img src="./logo512.png" alt="react-logo" /> */}
                <p>Lorem ipsum dolor sit,</p>
                <TopButtonShareAndComment />
              </div>
            </article>
            <article className="article-top">
              <UserInfos user={infos.user} />
              <div>
                <p>Lorem ipsum dolor sit,</p>
                <TopButtonShareAndComment />
              </div>
            </article>
            <article className="article-top">
              <UserInfos user={infos.user} />
              <p>Lorem ipsum dolor sit,</p>
              <TopButtonShareAndComment />
            </article>
          </div>
        </section>
        <PostArtc />
      </main>
    );
  }
}

export default Main;
