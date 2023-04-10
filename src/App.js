import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Component
import Header from './component/header/header';
import CollectionsOverview from './component/collections-overview/collections-overview';

// Routes
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Checkout from './pages/checkout/checkout';
import Collection from './pages/collection/collection';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import NoMatch from './pages/404/404';

// Stylesheet
import './App.css';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="shop" element={<Shop />}>
                    <Route index element={<CollectionsOverview />} />
                    <Route path=":collectionID" element={<Collection />} />
                </Route>
                <Route path="checkout" element={<Checkout />} />
                <Route path="signin" element={<SignInAndSignUpPage />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    )
}

export default App;