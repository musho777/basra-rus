import { useEffect, useState } from 'react'
import { TableItem } from '../../components/TableItem'
import { Button } from '../../components/button'
import './style.css'
import { Pagination } from '../../components/Pagination'
import { Input } from '../../components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProducts } from '../../Services/action/action'
import { AddProduct } from '../AddProduct/index'
export const Product = () => {
    const [data, setData] = useState([])
    const [addProduct, setAddProduct] = useState(false)
    const [active, setActive] = useState(0)
    const dispatch = useDispatch()
    const { GetAllProductsReducer } = useSelector((st) => st)
    useEffect(() => {
        dispatch(GetAllProducts())
    }, [])
    useEffect(() => {
        setData(GetAllProductsReducer?.data?.data)
    }, [GetAllProductsReducer])
    return <div>
        {addProduct &&
            <AddProduct
                open={addProduct}
                setOpen={setAddProduct}
            />
        }
        <div className='header'>
            <p>Товаров: {GetAllProductsReducer.data?.data?.length}</p>
            <div className='buttonWrapper'>
                <div className='selectCategory'>
                    <p>
                        Категория
                    </p>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.50595 7.34646C5.561 7.41365 5.63465 7.46858 5.72058 7.50654C5.8065 7.54449 5.90212 7.56432 5.99919 7.56432C6.09626 7.56432 6.19187 7.54449 6.27779 7.50654C6.36372 7.46858 6.43738 7.41365 6.49243 7.34646L11.8928 0.791173C11.9554 0.715564 11.992 0.627004 11.9988 0.535116C12.0057 0.443228 11.9824 0.351526 11.9315 0.269974C11.8807 0.188422 11.8042 0.120137 11.7105 0.0725409C11.6167 0.0249444 11.5092 -0.00014439 11.3996 6.25099e-07H0.598764C0.489461 0.00038003 0.38235 0.0257915 0.288948 0.073502C0.195546 0.121213 0.119388 0.189417 0.0686635 0.270781C0.0179391 0.352145 -0.00543232 0.443589 0.00106256 0.535281C0.00755745 0.626972 0.0436729 0.715441 0.105525 0.791173L5.50595 7.34646Z" fill="black" />
                    </svg>

                </div>
                <Input placeholder={'Поиск товара'} />
                <Button onClick={() => setAddProduct(true)} green text={'Добавить товар'} />
            </div>
        </div>
        <div className='TableWrapper'>
            {
                data?.map((elm, i) => {
                    return <TableItem
                        img={elm.photos[0]}
                        title={[
                            'Наименование',
                            'Категория',
                            'Артикул',
                            'Цена без скидки',
                            'Цена со скидкой',
                            'Количество'
                        ]}
                        name={elm.name}
                        phone={elm?.category?.name}
                        date_of_birth={elm?.price}
                        volume={elm.volume}
                        order_count={elm?.product_count}
                        email={elm.vendor_code}
                        key={i}
                    />
                })
            }
        </div>
        {GetAllProductsReducer?.data?.last_page > 1 && <Pagination changeActiveButton={(e) => setActive(e)} length={GetAllProductsReducer?.data?.last_page} activeButton={active} />}

        {/* <Pagination length={4} activeButton={0} /> */}
    </div>
}