import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MetaData from './Layout/MetaData'
import axios from 'axios'
import Product from './Product/Product'
import Pagination from 'react-js-pagination'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';



const Home = () => {
    const [products, setProducts] = useState([])
    const [productsCount, setProductsCount] = useState(0)
    const [filteredProductsCount, setFilteredProductsCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [resPerPage, setResPerPage] = useState(0)
    const [price, setPrice] = useState([1, 1000]);
    // const [search, setSearch] = useState('')
    let { keyword } = useParams();

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);


    const getProducts = async (keyword = '', page=1, price) => {

        let link = `http://localhost:4001/api/v1/products?page=${page}&keyword=${keyword}&price[lte]=${price[1]}&price[gte]=${price[0]}`
        // link = `http://localhost:4001/api/v1/products?page=${page}&keyword=${keyword}&price[lte]=${price[1]}&price[gte]=${price[0]}`


        let res = await axios.get(link)
        console.log(res)
        setProducts(res.data.products)
        setProductsCount(res.data.productsCount)
        setFilteredProductsCount(res.data.filteredProductsCount)
        setResPerPage(res.data.resPerPage)
    }

    let count = productsCount
    if (keyword) {
        count = filteredProductsCount
    }

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        getProducts(keyword, currentPage, price)
    }, [keyword, currentPage, price]);
    return (
        <>
            <MetaData title={'Buy Best Products Online'} />
            <div className="container container-fluid">
                <h1 id="products_heading">Latest Products</h1>
                <section id="products" className="container mt-5">
                        {/* <div className="row">
                            {products && products.map(product => (
                                <Product key={product._id} product={product} />
                            ))}
                        </div> */}
                        <div className="row">
                            {keyword ? (
                                <>
                                    <div className="col-6 col-md-3 mt-5 mb-5">
                                        <div className="px-5">
                                            <Range
                                                marks={{
                                                    1: `$1`,
                                                    1000: `$1000`
                                                }}
                                                min={1}
                                                max={1000}
                                                defaultValue={[1, 1000]}
                                                tipFormatter={value => `$${value}`}
                                                tipProps={{
                                                    placement: "top",
                                                    visible: true
                                                }}
                                                value={price}
                                                onChange={price => setPrice(price)}
                                            />
                                            <hr className="my-5" />
                                            

                                        </div>
                                    </div>

                                    <div className="col-6 col-md-9">
                                        <div className="row">
                                            { products.map(product => (
                                                <Product key={product._id} product={product}  />
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                products.map(product => (
                                    <Product key={product._id} product={product} />
                                ))
                            )}

                        </div>
                    </section>
                    {resPerPage <= count && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>)}
              
            </div>
        </>
    )
}

export default Home