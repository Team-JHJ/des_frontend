import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'

const TimeDisplay = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = String(date.getMinutes()).padStart(2, '0')
    const second = String(date.getSeconds()).padStart(2, '0')

    return (
        <div className="absolute right-8 top-5 text-[#797979]">
            <FontAwesomeIcon icon={faClock} />
            {` ${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`}
        </div>
    )
}

export default function Header() {
    return (
        <div className="h-28 bg-[url('@/assets/img/header_bg.png')] bg-cover bg-no-repeat">
            <div className="container relative mx-auto h-full px-10 py-6">
                <p className="text-3xl font-medium">제목</p>
                {/* 시간 */}
                <TimeDisplay />
                {/* 헤더 관리 */}
                <div className="absolute bottom-4 right-8">
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    )
}
