import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Post} from '../types/postTypes';

interface PostsListProps {
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({posts}) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default PostsList;
