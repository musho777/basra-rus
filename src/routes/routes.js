import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../components/Layout"
import { UserList } from "../pages/UserList"
import { OrderList } from "../pages/OrderList"
import { ReviewsPage } from "../pages/ReviewsPage"
import { Product } from "../pages/Products"
import { UserScreen } from "../pages/userScreen"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/orderlist" element={<OrderList />} />
                    <Route path="/userlist" element={<UserList />} />
                    <Route path="/ReviewsPage" element={<ReviewsPage />} />
                    <Route path="/Product" element={<Product />} />
                    <Route path="/UserScreen" element={<UserScreen />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

// OrderList
// ReviewsPage
// UserScreen