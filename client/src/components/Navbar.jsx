import React, {useEffect, useState, useRef} from "react";

function Navbar(){
    
    return(
        <div className="flex flex-row gap-2 justify-between shadow-lg w-full px-4 py-5 font-bold 
        bg-blue-500 text-white text-xl">
            <div className="uppercase">
                <p>
                    <a href="">
                        Tienda virtual
                    </a>
                </p>
            </div>
            <div className="">
                <ul className="flex flex-row gap-1 items-center content-center uppercase">
                    <li className="hover:bg-blue-600 rounded-md px-3 py-1">
                        <a href="/">Inicio</a>
                    </li>
                    <li className="hover:bg-blue-600 rounded-md px-3 py-1">
                        <a href="/addproduct">Agregar producto</a>
                    </li>
                    <li className="hover:bg-blue-600 rounded-md px-3 py-1">
                        <a href="/">Contacto</a>
                    </li>
                    <li className="hover:bg-blue-600 rounded-md px-3 py-1">
                        <a href="/">Acerca de</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;

