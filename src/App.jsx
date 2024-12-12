import './App.css'
import BasePage from '@/pages/Base-page.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from '@/pages/Main-page.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasePage />,
        children: [
            {
                path: '/main',
                element: <MainPage />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
