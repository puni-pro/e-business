import React, { useEffect, useState } from 'react'
import { collection, query, getDocs, limit, orderBy, onSnapshot } from 'firebase/firestore';
import db from '../../services/firebase.config';
import ViewList from './ViewList';

function Top() {
    const [examdata, setData] = useState([]);
    useEffect(() => {
        //データベースからデータ取得
        const q = query(collection(db, "PastExamData"), orderBy("uploadtime", "desc"), limit(50));

        getDocs(q).then((snapshots) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(snapshots.docs.map((doc) => ({ ...doc.data() })))
            setData(snapshots.docs.map((doc) => ({ ...doc.data() })));
        });

        onSnapshot(q, (snapshots) => {
            setData(snapshots.docs.map((doc) => ({ ...doc.data() })));
        });

    }, [])
    return (
        <ViewList examdata = {examdata}/>   
    )
}

export default Top;