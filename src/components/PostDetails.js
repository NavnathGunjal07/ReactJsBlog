import { firestore } from "../firebase";
import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const [post,setPosts] = useState([]);
  const {postId} = useParams()
  useEffect(()=>{
    firestore.collection("posts").doc(postId).get().then((snapshot)=>{
      console.log("data", snapshot.data());
      setPosts(snapshot.data())
    })
  },[])
    return (
      <div className="post-detail">
       <h1>
         {post.title}
         <p>{post.content}</p>
       </h1>
      </div>
    );
  }
  
  export default PostDetails;