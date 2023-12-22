import { useEffect, useState } from 'react'
import { Logo } from '../../Svg'
import { Button } from '../button'
import './style.css'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    const [activeButton, setActiveButton] = useState(0)
    useEffect(() => {
        const currentURL = window.location.href;
        const parts = currentURL.split('/');
        const curentPage = parts[parts.length - 1];
        if (curentPage == 'orderlist') {
            setActiveButton(0)
        }
        else if (curentPage == 'userlist') {
            setActiveButton(1)
        }
        else if (curentPage == 'Product') {
            setActiveButton(2)

        }
        else if (curentPage == 'ReviewsPage') {
            setActiveButton(4)
        }
    }, [])
    return (<div className='outLet'>
        <div className='layout'>
            <Logo />
            <p className='titleAdminPanel'>Админ-панель PLAZAN APP</p>
            <div className='buttonDiv'>
                <Button onClick={() => window.location = '/orderlist'} active={activeButton == 0} text={'Заказы'} />
                <Button onClick={() => window.location = '/userlist'} active={activeButton == 1} text={'Пользователи'} />
                <Button onClick={() => window.location = '/Product'} active={activeButton == 2} text={'Товары'} />
                <Button onClick={() => window.location = '/userlist'} active={activeButton == 3} text={'Главная и Каталог'} />
                <Button onClick={() => window.location = '/ReviewsPage'} active={activeButton == 4} text={'Отзывы'} />
            </div>
        </div>
        <div >
            <Outlet />
        </div>
    </div>
    )
}