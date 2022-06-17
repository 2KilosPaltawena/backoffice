import React,{useState} from "react";
import AddProducts from "./AdmProducts";
import AdmProducts from "./AdmProducts";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PreNavbar from '../../components/PreNavbar';
import axiosProduct from '../../config/axiosProduct';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name:'',
        price:'',
        category:'',
        image:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //guardar product
        guardarProduct();
    };

    const guardarProduct = () => {
        axiosProduct.post('/addproduct', product)
        .then(res =>{
            console.log(res);
            alert(res.data.message);
        })
    };

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    return(
        <div>
            <PreNavbar></PreNavbar>
            <Navbar/>


            <form
            onSubmit={handleSubmit}
            >

            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Ingresar nombre de producto"
                defaultValue={product.name}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="price">Precio:</label>
                <input
                type="text"
                className="form-control"
                name="price"
                placeholder="Ingresar el precio del producto"
                defaultValue={product.price}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="category">Categoría:</label>
                <input
                type="text"
                className="form-control"
                name="category"
                placeholder="Ingresar la categoría del producto"
                defaultValue={product.category}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="image">Foto:</label>
                <input
                type="text"
                className="form-control"
                name="image"
                placeholder="Ingresar link de la foto"
                defaultValue={product.image}
                onChange={handleChange}
                required
                />
            </div>
            <button
            type = "submit"
            className = "btn btn-primary"
            > Guardar Producto
            </button>
                
            </form>
            <Footer/>
        </div>    
    );
};

export default AddProduct;
