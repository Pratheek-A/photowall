import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto">
        Click me
      </Link>

      <div className="photoGrid">
        {props.posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              key={index}
              post={post}
              {...props}
              index={index}
            />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;

//function is stateless components & class is statefull components
// class PhotoWall extends Component{
//     render(){
//         return <div className="photoGrid">
//             {this.props.posts.map((post,index)=><Photo key={index} post={post}/>)}
//         </div>
//     }
// }
