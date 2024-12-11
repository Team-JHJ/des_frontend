import { Outlet } from 'react-router-dom'

export default function BasePage() {
    return (
        <div>
            Base
            <Outlet />
        </div>
    )
}
