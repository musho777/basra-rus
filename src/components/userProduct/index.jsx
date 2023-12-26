import { TableItem } from "../TableItem"
import { Item } from "./item"

export const UserProduct = () => {
    const data = ['', '', '']
    return <div className="UserProduct">

        {data.map((elm, i) => {
            return <Item last={i + 1 == data.length} />
        })
        }
    </div>
}