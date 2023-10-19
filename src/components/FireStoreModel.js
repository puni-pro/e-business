import React, { useEffect, useState } from 'react'
import db from '../services/firebase.config'
import { collection, getDocs, onSnapshot } from 'firebase/firestore';


const FireStoreModel = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        //データベースから取得
        const postData = collection(db, 'posts')
        getDocs(postData).then((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({...doc.data()})))
        })
        //リアルタイム取得
        onSnapshot(postData, (post) => {
            setPosts(post.docs.map((doc) => ({...doc.data()})))
        });
    },[])

  return (
    <div>
        {posts.map((post)=> (
            <div key = {post.title}>
                <h1 class = "text-xl text-cyan-300">{post.title}</h1>
                <p class = "text-xs">{post.test}</p>
            </div>
        ))}
    </div>
  )
}

export default FireStoreModel;
