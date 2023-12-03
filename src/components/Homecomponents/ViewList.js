
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase.config';


function ViewList(props) {

    const [user] = useAuthState(auth);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Tokyo' };
    return (
        <div key = "viewer" className='bg-slate-600 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {props.examdata.map((data) => (
                <div key={data.dataID}>
                    <div  className="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <a href='#'>
                            <div>
                                <CloudStorageImg Id={data.dataID} name={data.firstdataName} />

                            </div>
                            <div>
                                <h5 >{data.title}</h5>
                                <p>{data.uploadtime.toDate().toLocaleTimeString('ja-jp', options)}</p>
                            </div>
                        </a>

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
        <div className="max-w-screen-lg mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <img className="absolute inset-0 w-full h-full object-cover" src={refURL} ></img>
            </div>
        </div>

    )
}
