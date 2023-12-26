import { useEffect, useState } from 'react'
import { TableItem } from '../../components/TableItem'
import { Button } from '../../components/button'
import './style.css'
import { Pagination } from '../../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllOrder } from '../../Services/action/action'
export const OrderList = () => {
    const [data, setData] = useState([])
    const [active, setActive] = useState(0)
    const dispatch = useDispatch()
    const { GetAllOrdersReducer } = useSelector((st) => st)
    useEffect(() => {
        dispatch(GetAllOrder({}, active))
    }, [active])

    useEffect(() => {
        setData(GetAllOrdersReducer?.data?.data)
    }, [GetAllOrdersReducer])

    return <div>
        <div className='header'>
            <p>Список заказов</p>
            <div className='buttonWrapper'>
                <Button text={'Поиск по номеру'} />
                <Button text={'Фильтр по дате'} />
                <Button green text={'Скачать таблицу'} />
            </div>
        </div>
        <div className='TableWrapper'>
            {
                data?.map((elm, i) => {
                    return <TableItem
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
                        volume={elm.deliver?.name}
                        order_count={elm.payment_id}
                        created_at1={elm.created_at}
                        key={i} />
                })
            }
        </div>
        {GetAllOrdersReducer?.data?.last_page > 1 && <Pagination changeActiveButton={(e) => setActive(e)} length={GetAllOrdersReducer?.data?.last_page} activeButton={active} />}

    </div>
}