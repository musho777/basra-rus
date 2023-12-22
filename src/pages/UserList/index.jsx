import { useEffect, useState } from 'react'
import { TableItem } from '../../components/TableItem'
import { Button } from '../../components/button'
import './style.css'
import { Pagination } from '../../components/Pagination'
import { PopUp } from '../../components/PopUp'
export const UserList = () => {
    const [data, setData] = useState(['', '', '', '', '', '', '', '', '', '',])
    const [button, setButton] = useState(['', '', '', '', ''])
    const [openPopUp, setOpenPopUp] = useState(true)

    useEffect(() => {
        if (openPopUp) {
            document.body.style.overflow = 'hidden'
        }
    }, [openPopUp])
    return <div>
        {openPopUp && <PopUp setOpen={() => setOpenPopUp(false)} />}
        <div className='header'>
            <p>Список пользователей</p>
            <div className='buttonWrapper'>
                <Button text={'PUSH-уведомления'} />
                <Button onClick={() => setOpenPopUp(true)} green text={'Скачать таблицу'} />
            </div>
        </div>
        <div className='TableWrapper'>
            {
                data.map((elm, i) => {
                    return <TableItem
                        img
                        title={[
                            'Имя',
                            'Телефон',
                            'Почта',
                            'Дата рождения',
                            'Дата регистрации',
                            'Заказы'
                        ]}

                        key={i} />
                })
            }
        </div>
        <Pagination length={4} activeButton={0} />
    </div>
}