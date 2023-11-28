import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './Homecomponents/Top';
import Serch from './Homecomponents/Serch';
import Navbar from './Homecomponents/Navbar'
import Favorite from './Homecomponents/Favorite';
import Mypage from './Homecomponents/Mypage';

function Home() {
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


