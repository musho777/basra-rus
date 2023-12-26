import './style.css'
export const TableItem = ({ title, img, noborder }) => {
    return <div className='TableItem' style={noborder && { border: 'none' }} id={img ? 'TableItemIMgWrapper' : ''} >
        {img && <div >
            <img className='TableItemImg' src={require('../../Assets/img/22.png')} />
        </div>}
        <div >
            <p className='Tablelabel'>{title[0]}</p>
            <p className='TablelItem'>Антон</p>
        </div>
        <div>
            <p className='Tablelabel'>{title[1]}</p>
            <p className='TablelItem'>8 965 205 23 55</p>
        </div>
        <div>
            <p className='Tablelabel'>{title[2]}</p>
            <p className='TablelItem'>hello@mail.ru</p>
        </div>
        <div>
            <p className='Tablelabel'>{title[3]}</p>
            <p className='TablelItem'>28.07.1990</p>
        </div>
        <div>
            <p className='Tablelabel'>{title[4]}</p>
            <p className='TablelItem'>12.04.2023</p>
        </div>
        <div>
            <p className='Tablelabel'>{title[5]}</p>
            <p className='TablelItem'>9</p>
        </div>

    </div>
}