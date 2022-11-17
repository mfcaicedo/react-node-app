
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import AddProduct from "./AddProduct";

function ViewProduct() {
    //Se declara un estado para guardar los datos que se obtengan del servidor 
    const [product, setProduct] = useState([]);
    const [data, setData] = useState([]);
    //estado para el modal
    const [valuesProduct, setValuesProduct] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = (prod) => {
        console.log("que llega: ", prod);
        setValuesProduct(prod);
        setIsOpen(true);
    }
    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    /**
     * @brief Metodo para obtemer los productos de la base de datos haciendo peticion al servidor
     */
    const getProduct = async () => {
        fetch("/products")
            .then(response => response.json())
            .then(data => setProduct(data));
    };
    /**
     * Metodo para eliminar un producto de la base de datos
     * 
     */
    const deleteProduct = async (id) => {
        fetch("/products/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json", 
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.message === "Producto eliminado correctamente") {
                    alert(data.message);
                    getProduct();
                }
                getProduct();
            });
    };

    /**
     * Metodo para actualizar un producto de la base de datos
     * 
     */
    const updateProduct = async (values) => {
        fetch("/products/" + values.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Producto actualizado correctamente");
                getProduct();
                closeModal();
            });
    };

    //UseEffect se ejecuta cuando se carga el componente
    useEffect(() => {
        getProduct();
    }, []);

    //Custom styles para el modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
        },
    };

    return (
        <div className=" mt-6 mx-3 xl:mx-0">
            <h1 className="font-bold uppercase text-center text-2xl text-blue-500">Tabla de productos disponibles</h1>
            <div className="w-full xl:w-10/12 xl:mx-auto mt-3">
                {/* BUSCADOR Y BOTON AGREGAR PRODUCTO */}
                <div className="flex flex-row gap-2 justify-between items-center pb-3">
                    <div className="flex flex-1">
                        <input
                            type="text"
                            className="border-2 border-gray-200 hover:border-gray-300 focus:outline-none rounded-full px-4 py-2 w-full shadow-lg"
                            placeholder="Buscar producto"

                        />
                    </div>
                    <div className="">
                        <Link to={"/addProduct"}>
                            <button
                                type="button"
                                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md uppercase font-bold"
                            >
                                Agregar producto
                            </button>
                        </Link>
                    </div>
                </div>
                <table className="border-collapse text-lg w-full">
                    <thead className="">
                        <tr className="uppercase bg-blue-200">
                            <th className="pr-3 pl-3 py-4 rounded-tl-md">Nombre</th>
                            <th className="pr-3 py-4 ">Descripción</th>
                            <th className="pr-3 py-4 ">Precio</th>
                            <th className="pr-3 py-4 ">Cantidad</th>
                            <th className="pr-3 py-4 ">Imagen</th>
                            <th className="pr-3 py-4 ">Categoria</th>
                            <th className=" pl-3 rounded-tr-md">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.length > 0 ? ( //Si el arreglo de productos tiene datos se muestran en la tabla
                            product.map((prod, index) => (
                                <tr key={index} className="bg-blue-100">
                                    <td>{prod.name}</td>
                                    <td>{prod.description}</td>
                                    <td>{prod.price}</td>
                                    <td>{prod.stock}</td>
                                    <td>{prod.image}</td>
                                    <td>{prod.category}</td>
                                    <td>
                                        <div className="flex flex-row gap-2 justify-center pt-1">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    openModal(prod);
                                                }}
                                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded">
                                                Editar
                                            </button>
                                            {/* <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded">
                                                Ver
                                            </button> */}
                                            <button
                                                type="button"
                                                onClick={() => deleteProduct(prod._id)}
                                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded">
                                                Eliminar
                                            </button>
                                        </div>

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No hay productos</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* MODAL */}
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <AddProduct valuesProduct={valuesProduct} closeModal={closeModal} updateProduct={updateProduct} />                        
                    {/* <button
                        type="button"
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded"
                        onClick={closeModal}>Cerrar
                    </button> */}
                </Modal>
            </div>

        </div>
    )
}
export default ViewProduct;