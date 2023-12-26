import './style.css'
export const Item = ({ last }) => {
    return <div className="UserProductItem" id={last ? 'last' : ''}>
        <div className='ImgWrapperUserProduct'>
            <img className='UserProductImg' src={require('../../Assets/img/22.png')} />
            <div className='UserProductText'>
                <p className='Artikle'>Артикул: 000101</p>
                <p className='Krem'>КРЕМ Коллагеновый</p>
                <p className='volume'>Объем: 50 мл</p>
            </div>
        </div>
        <div className='UserProductColume'>
            <div className='userProductAmount'>1 шт.</div>
            <div className='UserProductPrice'>
                <p className='userProductAmount'>678 ₽</p>
                <p className='userProductSale'>999 ₽</p>
            </div>
        </div>
    </div>
}