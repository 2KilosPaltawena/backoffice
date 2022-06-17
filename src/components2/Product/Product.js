import React from 'react';

const Product = ({index, id,name,price,category,image})=>(
    <tr >
    <th scope ="row"> {id}</th>
    <td>{name}</td>
    <td>{price}</td>
    <td>{category}</td>
    <img className='h-[100px] ' src={image}></img>
    
    <td>Editar | Eliminar</td>
</tr>

);
export default Product;