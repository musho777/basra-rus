import { useEffect, useState } from 'react'
import { BackIcon } from '../../Svg'
import { TableItem } from '../../components/TableItem'
import { UserProduct } from '../../components/userProduct'
import './style.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeOrderStatus, GetSinglPorduct } from '../../Services/action/action'
export const SinglProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { GetSinglProductPage } = useSelector((st) => st)
    const [data, setData] = useState()
    useEffect(() => {
        dispatch(GetSinglPorduct({ order_id: id }))
    }, [])

    const [openChangeStatus, setOpenChangeStatus] = useState(false)
    const [selectedValue, setSelectedValue] = useState({ name: '', id: '' })

    const ChangeStatus = (data) => {
        dispatch(ChangeOrderStatus({ status: data.id, order_id: id }))
        setSelectedValue(data)
    }

    useEffect(() => {
        setData(GetSinglProductPage.data?.products)
        if (GetSinglProductPage.data?.order_status) {
            setSelectedValue({ name: GetSinglProductPage.data?.order_status.name_ru, id: GetSinglProductPage.data?.order_status.id })
        }
    }, [GetSinglProductPage])

    return <div onClick={() => setOpenChangeStatus(false)}>
        <div className='SinglProductHeader'>
            <div onClick={() => window.history.go(-1)} className='TitleHeader'>
                <BackIcon />
                <p className='BackClass'>Назад</p>
            </div>
            <div>
                <button onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setOpenChangeStatus(true)
                }} className='SinglProductButton'>Статус: {selectedValue.name}</button>
                {openChangeStatus && <div className='SelectButton'>
                    <div onClick={() => ChangeStatus({ name: 'Новый', id: 1 })}>Новый</div>
                    <div onClick={() => ChangeStatus({ name: 'Подтвержден', id: 2 })}>Подтвержден</div>
                    <div onClick={() => ChangeStatus({ name: 'Отменен', id: 3 })}>Отменен</div>
                    <div onClick={() => ChangeStatus({ name: 'Доставлен', id: 4 })}>Доставлен</div>
                </div>}
            </div>
        </div>
        <p className='UserName'>{GetSinglProductPage?.data?.name} {GetSinglProductPage?.data?.phone} {GetSinglProductPage?.data?.email}</p>
        <p className='UserName'>{GetSinglProductPage?.data.city?.name} {GetSinglProductPage?.data?.home_office} </p>
        {data?.map((elm, i) => {
            return <div key={i} style={{ marginBottom: '30px' }}>
                <div style={{ marginBottom: '30px' }}>
                    <TableItem
                        noborder
                        title={[
                            'Номер заказа',
                            'Сумма заказа',
                            'Дата заказа',
                            'Статус',
                            'Способ доставки',
                            'Способ оплаты'
                        ]}
                        name={elm.id}
                        phone={elm.product.price}
                        date_of_birth={elm.status}
                        volume={elm.deliver_status}
                        order_count={elm.payment_id}
                        created_at1={elm.created_at}
                    />
                </div>
                <UserProduct data={elm.product} />
            </div>

        })}
    </div>
}