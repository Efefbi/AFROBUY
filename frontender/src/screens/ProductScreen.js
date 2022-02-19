import React from 'react';
//import {useParams } from 'react-router-dom';
import Rating from "../components/Rating";
import Product from '../components/Products';
import { Link } from 'react-router-dom';
//import axios from 'axios';


export default function ProductScreen(){
    const product = data.products.find(x => x._id === probs.match.params);
{/*
const [loading,setLoading] = useState(true)
const [product, setProduct] = useState({})
const [error, setError] = useState(null)

  const params = useParams()
  useEffect(() =>{
      const fetchProduct = async () => {
          const res = await fetch(`http://localhost:3000/product/${params.id}`)
          const data = await res.json();
          setProduct(data)
          setLoading(false)
      }
      fetchProduct()
  })*/}
  return !product ?
(<div>
    <h1>Page is Loading!</h1>
</div>)
  : (
  <div>
      <Link to="/"> Bact to result </Link>
    <div className= 'row top'>
        <div className = "col-2">
          <img className= "large" src = {product.image} alt= {product.name}></img>

        </div>
        <div className="col-1">
            <ul>
                <li>
                    <h1>{product.name}</h1>
                </li>
                <li>
                    <Rating
                      rating= {product.rating}
                      numReviews= {product.numReviews}>

                    </Rating>
                </li>
                <li>
                    Price:${product.price}
                </li>
                <li>
                    Description:
                     <p>{product.description}</p>
                </li>
            </ul>

        </div>
        <div className= "col-1">
            <div className= "card card-body">
                <ul>
                    <li>
                        <div className= "row">
                            <div>Price</div>
                              <div className="price">${product.price}</div>
                            
                        </div>
                    </li>
                    <li>
                        <div className= "row">
                            <div>Status</div>
                              <div>
                                  {product.countInStock > 0 ? (
                                      <span className="Success">In stock</span>
                                   ) : (<span className="danger">Unavailable</span>
                                  )}
                              </div>
                        </div>

                    </li>
                    <li>
                        <button className="primary block">Add to cart</button>
                    </li>

                </ul>
            </div>
           
        </div>

    </div>
 </div>
);
}