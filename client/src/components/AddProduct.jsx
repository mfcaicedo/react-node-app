import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { useFormik } from 'formik';

function AddProduct({valuesProduct, closeModal, updateProduct}) {

    //formulairo 
    const formik = useFormik({
        initialValues: {
            name: valuesProduct ? valuesProduct.name : '',
            description: valuesProduct ? valuesProduct.description : '',
            price: valuesProduct ? valuesProduct.price : '',
            stock: valuesProduct ? valuesProduct.stock : '',
            image: valuesProduct ? valuesProduct.image : '',
            category: valuesProduct ? valuesProduct.category : '',

        },
        onSubmit: values => {
            values.image = "image.jpg"
            //TODO enviar datos al servidor
            fetch("/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then(response => response.json())
                .then(data => {
                        console.log(data);
                        alert("Producto agregado correctamente");
                    });
            //redireccionar a la pagina principal
            window.location.href = "/";
        },
    });
    console.log(valuesProduct);

    return(
        <div className="">
            {!valuesProduct ?  
            <Navbar />
            : null
        }
            <div className="mt-2 mx-2 xl:mx-auto">
            <h1 className="text-2xl uppercase text-blue-500 font-bold text-center">
                {valuesProduct ? (
                    <span>Editar producto</span>
                ) :
                    <span>Agregar producto</span> 
                }
            </h1>
            <div className="w-full my-2 xl:mx-auto xl:w-3/5">
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name" className="uppercase font-semibold">
                            Nombre:
                        </label>
                        <input type="text" name="name" id="name" className="w-full border-2 border-blue-400 rounded-md p-2 focus:border-blue-600 focus:outline-none"
                        onChange={formik.handleChange} value={formik.values.name} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="description" className="uppercase font-semibold">
                            Descripción:
                        </label>
                        <textarea name="description" id="description" cols="30" rows="5" className="w-full border-2 border-blue-400 rounded-md p-2 focus:border-blue-600 focus:outline-none"
                        onChange={formik.handleChange} value={formik.values.description}></textarea>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="price" className="uppercase font-semibold">
                            Precio:
                        </label>
                        <input type="number" name="price" id="price" className="w-full border-2 border-blue-400 rounded-md p-2 focus:border-blue-600 focus:outline-none"
                        onChange={formik.handleChange} value={formik.values.price} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="stock" className="uppercase font-semibold">
                            Stock:
                        </label>
                        <input type="number" name="stock" id="stock" className="w-full border-2 border-blue-400 rounded-md p-2 focus:border-blue-600 focus:outline-none"
                        onChange={formik.handleChange} value={formik.values.stock} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="image" className="uppercase font-semibold">
                            Imagen:
                        </label>
                        <input type="file" name="image" id="image" className="w-full pb-2 focus:outline-none"
                        onChange={formik.handleChange} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="category" className="uppercase font-semibold">
                            Categoría:
                        </label>
                        <select name="category" id="category" className="w-full border-2 border-blue-400 rounded-md p-2 focus:border-blue-600 focus:outline-none"
                        onChange={formik.handleChange} value={formik.values.category}>
                            <option value="Electrodoméstico">Electrodoméstico</option>
                            <option value="Ropa">Ropa</option>
                            <option value="Calzado">Calzado</option>
                            <option value="Accesorios">Accesorios</option>
                            <option value="Otros">Otros</option>
                        </select>
                    </div>
                    <div className="mt-2">
                        <button 
                        type={valuesProduct ? "button" : "submit"}
                        onClick={valuesProduct ? () => updateProduct(formik.values) : null}
                        className="uppercase bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
                            {valuesProduct ? (
                                <span>Actualizar</span>
                                ) :
                                <span>Agregar</span>
                            }
                        </button>
                        <button
                        type="button"
                        className="uppercase bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 ml-2"
                        onClick={valuesProduct ? closeModal : null}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}
export default AddProduct;