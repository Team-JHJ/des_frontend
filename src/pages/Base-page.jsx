import { Outlet } from 'react-router-dom'
import LeftSidebar from '@/components/Left-sidebar.jsx'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'

const ContentSection = () => {
    return (
        <div className="flex-1 max-w-screen-2xl mx-auto w-full p-5">
            <div className="rounded-[10px] border-[3px] border-[#ECECEE] h-full w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default function BasePage() {
    return (
        <div className="min-h-screen flex">
            <LeftSidebar />
            <div className="flex flex-col flex-1 pl-80">
                <Header />
                <ContentSection />
                <Footer />
            </div>
        </div>
    )
}
