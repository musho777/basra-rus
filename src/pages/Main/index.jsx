import { MenuItem, Select } from '@mui/material'
import './style.css'
import { useState } from 'react'
import { Plus } from '../../Svg'
export const Main = () => {
    const [data, setData] = useState(['Подборка-1', 'Нет', 'Подборка-2'])
    const [selected, setSelected] = useState([])
    return <div>
        <div className='header'>
            <p>Главная</p>
        </div>
        <div className='BanerBlock1'>
            <div className='BanerBlock'>
                <p className="baner">Баннеры</p>
                <div className='imgWrapperBaner'>
                    <img className='imgBaner' src={require('../../Assets/img/image_white.png')} />
                    <p>Акция ИМЯ</p>
                    <Select className='select' label="Платформа" value={selected} onChange={(e) => setSelected(e)}>
                        {data?.map((elm, i) => {
                            return <MenuItem value={elm}>{elm}</MenuItem>
                        })}
                    </Select>

                </div>
            </div>
            <Plus />
        </div>
        <div className='BanerBlock1'>
            <div className='BanerBlock'>
                <p className="baner">Хиты продаж </p>
                <div className='imgWrapperBaner'>
                    <img className='imgBaner' src={require('../../Assets/img/image_white.png')} />
                    <p>А</p>
                </div>
            </div>
            <Plus />
        </div>
        <div className='BanerBlock1'>
            <div className='BanerBlock'>
                <p className="baner">Рекомендуемое </p>
                <div className='imgWrapperBaner'>
                    <img className='imgBaner' src={require('../../Assets/img/image_white.png')} />
                    <p>А</p>
                </div>
            </div>
            <Plus />
        </div>
    </div >
}