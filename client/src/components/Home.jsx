import React, { useEffect, useState, useRef } from "react";
//importamos el componente de productos 
import ViewProduct from './ViewProduct';
import Navbar from './Navbar';

function Home() {

    return (
        <div className="App bg-slate-00">
            {/* navbar */}
            <Navbar />
            {/* LLamado de los componentes */}
            <ViewProduct />
        </div>
    )
}
export default Home;