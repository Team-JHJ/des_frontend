import { Outlet } from 'react-router-dom'
import LeftSidebar from '@/components/Left-sidebar.jsx'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'

const ContentSection = () => {
    return (
        <div className="mx-auto w-full max-w-screen-2xl flex-1 p-5">
            <div className="h-full w-full rounded-[10px] border-[3px] border-[#ECECEE]">
                <Outlet />
            </div>
        </div>
    )
}

export default function BasePage() {
    return (
        <div className="flex min-h-screen overflow-hidden">
            <LeftSidebar />
            <div className="flex flex-1 flex-col pl-80">
                <Header />
                <ContentSection />
                <Footer />
            </div>
        </div>
    )
}

