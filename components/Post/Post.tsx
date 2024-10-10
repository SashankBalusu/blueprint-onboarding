'use client';

import { useEffect, useState } from 'react';
import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import { UUID } from 'crypto';
import supabase from '@/supabase/client';
import styles from './postStyles.module.css';

interface PostI {
  uuid: UUID;
  created_at: string;
  description: string;
  username: string;
  image_url: string;
  like_count: number;
}

export default function Post() {
  // Define a state variable to store the fetched data
  const [postData, setPostData] = useState<PostI[] | undefined>(undefined);

  async function fetchPostData() {
    // TODO: Fetch data using the supabase client
    const { data, error } = await supabase.from('posts').select();
    if (error) {
      console.error(error);
      return;
    }
    // TODO: Format data into the Post type
    console.log(data);
    const format: PostI[] = data?.map(
      val =>
        ({
          uuid: val.uuid as UUID,
          created_at: val.created_at as string,
          description: val.description as string,
          username: val.username as string,
          image_url: val.image_url as string,
          like_count: val.like_count as number,
        })!,
    );
    return format;
  }

  // useEffect with an empty dependency array runs only once after the component is first rendered
  useEffect(() => {
    // Inside useEffect, you can perform side effects, like fetching data
    // Here, we fetch some data from an API
    const fetchData = async () => {
      const result = await fetchPostData();
      setPostData(result);
    };
    fetchData();
  }, []); // Empty dependency array means this effect runs only once

  // Render the fetched data
  return (
    <div>
      {!postData ? (
        <p>Loading...</p>
      ) : (
        postData.map(post => (
          <>
            <div className={styles.content}>
              <div className={styles.post}>
                <div className={styles.headingInfo}>
                  <ProfileIcon size={24} />
                  <p>{post.username}</p>
                  <p>{post.created_at}</p>
                </div>
                <p className={styles.descriptionText}>{post.description}</p>
                <img
                  style={{
                    width: '-webkit-fill-available',
                    borderRadius: '8px',
                    marginTop: '2%',
                  }}
                  src={post.image_url}
                ></img>
                <div className={styles.postInteractions}>
                  <HeartIcon size={post.like_count} />
                  <p>256 Likes</p>
                  <ShareIcon size={24} />
                </div>
              </div>
            </div>
          </>
        ))

        // ... Render data within our component structure
      )}
    </div>
  );
}
