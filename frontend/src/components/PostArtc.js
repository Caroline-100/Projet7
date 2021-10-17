import React from "react";
import Articles from "./Articles";
import description from "./description";

function PostArtc() {
  const component = description.map((data) => (
    <Articles
      key={data.id}
      name={data.name}
      imgUrl={"./image/" + data.imgUrl}
      alt={data.alt}
    />
    // imgUrl={data.imgUrl}
    // alt={data.alt}
  ));
  return <div className="image-text">{component}</div>;
}
// article.map((data) => {
//   <Data name={data.name} imgUrl={data.imgUrl} alt={data.alt} />;
// });

export default PostArtc;
