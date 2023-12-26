import { useEffect, useState } from 'react'
import './style.css'
export const TableItem = ({ title, img, noborder, data, name, phone, email, date_of_birth, order_count, created_at, volume, created_at1 }) => {
    console.log(img)
    const [date, setDate] = useState()
    useEffect(() => {
        if ((created_at)) {

            setDate(new Date(created_at))
        }
        if (created_at1) {
            setDate(new Date(created_at1))

        }

    }, [created_at])
    return <div className='TableItem' style={noborder && { border: 'none' }} id={img ? 'TableItemIMgWrapper' : ''} >
        {img && <div >
            <img className='TableItemImg' src={`https://basrabackend.justcode.am/uploads/${img.photo}`} />
        </div>}
        <div >
            <p className='Tablelabel'>{title[0]}</p>
            <p className='TablelItem'>{name}</p>
        </div>
        <div>
            <p className='Tablelabel'>{title[1]}</p>
            <p className='TablelItem'>{phone}</p>
        </div>
        <div>
            <p className='Tablelabel'>{title[2]}</p>
            {email ? <p className='TablelItem'>{email}</p>
                : <p className='TablelItem'>{date?.getMonth() + 1}.{date?.getDate()}.{date?.getFullYear()}</p>
            }
        </div>
        <div>
            <p className='Tablelabel'>{title[3]}</p>
            <p className='TablelItem'>{date_of_birth}</p>
        </div>
        <div>
            <p className='Tablelabel'>{title[4]}</p>
            {created_at ?

                <p className='TablelItem'>{date?.getMonth() + 1}.{date?.getDate()}.{date?.getFullYear()}</p> :
                <p className='TablelItem'>{volume}</p>
            }
        </div>
        <div>
            <p className='Tablelabel'>{title[5]}</p>
            <p className='TablelItem'>{order_count}</p>
        </div>

    </div>
}