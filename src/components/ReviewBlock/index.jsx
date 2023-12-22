import { Stars } from '../../Svg'
import './style.css'
import { Button } from '../button'

export const ReviewBlock = () => {
    return <div className='ReviewBlockDiv'>
        <div className="ReviewBlock">
            <div className='ReviewName'>
                <p>Андрей</p>
                <p>12.08.2023</p>
            </div>
            <div>
                <Stars />
            </div>
            <div className='Review'>
                Приятная кремовая текстура, готова сравнитьс дорогими средствами. Не вызывает раздражения и чувства стянутости.
            </div>
            <div className='textReviewDiv'>
                <p className='textReview'>Товар: Крем ночной</p>
                <p className='textReview'>Артикул: 000100</p>
            </div>
        </div >
        <div className='ReviewbuttonWrapper'>
            <Button text={'Опубликовать'} />
            <Button black text={'Отклонить'} />
        </div>
    </div>
}