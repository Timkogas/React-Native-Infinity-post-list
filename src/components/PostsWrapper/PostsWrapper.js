import { FlatList, View, StyleSheet} from "react-native";
import Post from "./Post/Post";

export default function PostsWrapper({posts}) {
  return (

    <FlatList 
      data={posts}
      style={{width: "100%"}}
      renderItem={({item}) => 
      <Post 
        keyExtractor={(item)=>{item.data.id}}
        img={item.data.thumbnail ? item.data.url_overridden_by_dest : item.data.thumbnail}
        text={item.data.title}
      />
    
    }
      keyExtractor={post => post.id}
    />
  );
}

