import { useEffect, useState } from 'react'
import { TableItem } from '../../components/TableItem'
import { Button } from '../../components/button'
import './style.css'
import { Pagination } from '../../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllOrder } from '../../Services/action/action'
import { Input } from '../../components/Input'
export const OrderList = () => {
    const [data, setData] = useState([])
    const [active, setActive] = useState(0)
    const dispatch = useDispatch()
    const { GetAllOrdersReducer } = useSelector((st) => st)
    const [searchNumber, setSearchNumber] = useState()
    useEffect(() => {
        dispatch(GetAllOrder({ search: searchNumber }, active))
    }, [active, searchNumber])

    useEffect(() => {
        setData(GetAllOrdersReducer?.data?.data)
    }, [GetAllOrdersReducer])

    return <div>
        <div className='header'>
            <p>Список заказов</p>
            <div className='buttonWrapper'>
                <Input value={searchNumber} onChange={(e) => setSearchNumber(e)} width='200px' placeholder={'Поиск по номеру'} />
                {/* <Button text={'Поиск по номеру'} /> */}
                {/* <Button text={'Фильтр по дате'} /> */}
                <Button green text={'Скачать таблицу'} />
            </div>
        </div>
        <div className='TableWrapper'>
            {
                data?.map((elm, i) => {
                    return <TableItem
                        onClick={() => window.location = `/SinglProduct/${elm.id}`}
                        title={[
                            'Номер заказа',
                            'Сумма заказа',
                            'Дата заказа',
                            'Статус',
                            'Способ доставки',
                            'Способ оплаты'
                        ]}
                        name={elm.id}
                        phone={elm.order_sum}
                        date_of_birth={elm.status}
                        volume={elm.delivery_id}
                        order_count={elm.payment_id}
                        created_at1={elm.created_at}
                        key={i} />
                })
            }
        </div>
        {GetAllOrdersReducer?.data?.last_page > 1 && <Pagination changeActiveButton={(e) => setActive(e)} length={GetAllOrdersReducer?.data?.last_page} activeButton={active} />}

    </div>
}