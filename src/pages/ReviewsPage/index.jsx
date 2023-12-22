import { Pagination } from '../../components/Pagination'
import { ReviewBlock } from '../../components/ReviewBlock'
import './style.css'
export const ReviewsPage = () => {
    return <div>
        <div className='header'>
            <p>Отзывы</p>
        </div>
        <div className='ReviewWrapper'>
            <ReviewBlock />
            <ReviewBlock />
            <ReviewBlock />
            <ReviewBlock />
            <ReviewBlock />
            <ReviewBlock />
        </div>
        <Pagination length={4} activeButton={0} />

    </div>
}