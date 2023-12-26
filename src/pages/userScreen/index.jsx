import { BackIcon } from '../../Svg'
import { TableItem } from '../../components/TableItem'
import { UserProduct } from '../../components/userProduct'
import './style.css'
export const UserScreen = () => {
    return <div className='UserScreen'>
        <div className='UserScreenHeader'>
            <div className='TitleHeader'>
                <BackIcon />
                <p className='BackClass'>Назад</p>
            </div>
            <p className='UserName'>Антон, 8 965 205 23 55, hello@mail.ru</p>
        </div>
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

            />
        </div>
        <UserProduct />
    </div>
}