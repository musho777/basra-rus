import { Item } from "./item"

export const UserProduct = ({ data }) => {
    return <div className="UserProduct">
        {data.map((elm, i) => {
            return <Item
                data={elm.product}
                product={elm}
                key={i} last={i + 1 == data.length} />
        })
        }
    </div>
}