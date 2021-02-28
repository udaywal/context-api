import React, { useState, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';

function App() {

    return (
        <div>
            <Header />
            <div className="container">
                <h1>
                    Context API
                </h1>
            </div>
            <Footer />
        </div>
    )

}

export default App;