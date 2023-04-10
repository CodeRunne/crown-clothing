import React from 'react';
import { Outlet } from 'react-router-dom';

function Shop() {
    return (
        <div className="shop-page">
            <Outlet />
        </div>
    )
}

export default Shop;