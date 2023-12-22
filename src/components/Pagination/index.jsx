import { useEffect, useState } from 'react'
import './style.css'
import { Button } from '../button'
export const Pagination = ({ length, activeButton }) => {
    const [active, setActive] = useState(activeButton)
    let [arr, setArr] = useState([])
    useEffect(() => {
        setArr(Array(length).fill('0'))
    }, [])
    return <div className='pagination'>
        {arr.map((elm, i) => {
            return <div onClick={() => setActive(i)} id={i == active && 'activePagination'} key={i} className='paginationButton'>{i + 1}</div>
        })}
    </div>
}