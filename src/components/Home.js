import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase.config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './Homecomponents/Top';
import Serch from './Homecomponents/Serch';
import Navbar from './Homecomponents/Navbar'
import Favorite from './Homecomponents/Favorite';
import Mypage from './Homecomponents/Mypage';

function Home() {
    const [user] = useAuthState(auth);
    const uid = user ? user.uid : null;
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Top />} />
                    <Route path='/favorite' element={<Favorite />} />
                    <Route path='/mypage' element={<Mypage />} />
                    <Route path='/serch-result' element={<Serch />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Home;


