// screens/HomeScreen.tsx
import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {fetchPosts} from '../networking/api';
import PostsList from '../components/PostsList';

interface Post {
  id: number;
  title: string;
  content: string;
}

const HomeScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (fetchError) {
        if (fetchError instanceof Error) {
          setError(fetchError.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <PostsList posts={posts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 20},
});

export default HomeScreen;
