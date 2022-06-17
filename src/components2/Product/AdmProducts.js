import React,{useEffect, useState,Link} from 'react';
import PreNavbar from '../../components/PreNavbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Product from './Product';


function AddProducts(){

    const[products, setProducts] = useState([]);

    const urll = "http://localhost/proyectoag/api-rest-laravel-ag/public/api/product";
    const fetchApi = async () => {
      const data = await fetch(urll);
      const products = await data.json()
      setProducts(products.products)
      console.log(products)
    }
  
    useEffect(() => {
      fetchApi(urll)
    },[])

    const renderProducts = ()=>{
        return(
            <tbody>
                {
                    products.map((product, index)=>(
                    <Product
                    index={index} 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category_id}
                    image={product.image}
                    />

                    ))
                }
            </tbody>
        )
    }

    return(
        <div >
            <PreNavbar></PreNavbar>
            <Navbar/>
            
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Imagen</th>
                        <th>

                        </th>
                        
                        </tr>
                    </thead>
                    {renderProducts()}
                </table>
            <Footer/>
        </div>    
    )

}export default AddProducts;