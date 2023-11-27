import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import db, { auth } from '../../services/firebase.config';
import { collection, query, getDocs, limit } from 'firebase/firestore';

function Top() {
    const [user] = useAuthState(auth)

    const [examdata, setData] = useState([]);

    useEffect(() => {
        //データベースからデータ取得
        const q = query(collection(db, "PastExamData"), limit(50));

        getDocs(q).then((snapshots) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(snapshots.docs.map((doc) => ({ ...doc.data() })))
            setData(snapshots.docs.map((doc) => ({ ...doc.data() })));
        });


    }, [])
    return (
        <div>
            {user.uid}

            <p>データリストの表示</p>
            {examdata.map((data) => (
                <div key={data.dataID}>

                    <p>{data.title}</p>

                </div>

            ))}
        </div>
    )
}

export default Top
