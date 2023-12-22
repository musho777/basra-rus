import { useState } from 'react'
import { TableItem } from '../../components/TableItem'
import { Button } from '../../components/button'
import './style.css'
import { Pagination } from '../../components/Pagination'
export const OrderList = () => {
    const [data, setData] = useState(['', '', '', '', '', '', '', '', '', '',])
    const [button, setButton] = useState(['', '', '', '', ''])
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
                data.map((elm, i) => {
                    return <TableItem
                        title={[
                            'Номер заказа',
                            'Сумма заказа',
                            'Дата заказа',
                            'Статус',
                            'Способ доставки',
                            'Способ оплаты'
                        ]}

                        key={i} />
                })
            }
        </div>
        <Pagination length={4} activeButton={0} />
    </div>
}