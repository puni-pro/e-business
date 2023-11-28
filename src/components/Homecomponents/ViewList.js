
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase.config';
import { prettyDOM } from '@testing-library/react';


function ViewList(props) {

    const [user] = useAuthState(auth);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Tokyo' };
    return (

        <div>
            {user.uid}
            <p>データリストの表示</p>
            {props.examdata.map((data) => (
                <div key={data.dataID} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <CloudStorageImg Id = {data.dataID} name = {data.firstdataName}/>
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.uploadtime.toDate().toLocaleTimeString('ja-jp',options)}</p>
                   
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ViewList




function CloudStorageImg(props) {

    const [refURL, setURL] = useState([]);
    const storage = getStorage();
    var path = "data/" + props.Id + '/' + props.name;
    useEffect(() => {
        const pathReference = ref(storage, path);
        getDownloadURL(pathReference).then((url) => {
            setURL(url)
        })
    }, [])
    return (
        <img src={refURL} height="720px" ></img>
    )
}
