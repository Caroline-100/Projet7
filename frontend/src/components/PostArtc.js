import React from "react";
import Articles from "./Articles";
import description from "./description";

// key={data.id}
function PostArtc() {
  const component = description.map((data) => (
    <Articles
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
