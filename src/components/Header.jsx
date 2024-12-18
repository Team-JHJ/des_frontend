import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import houseAPI from '@/api/house.js'
import LoadingScreen from '@/components/Loading-screen.jsx'
import { setHouse } from '@/store/house-slice.js'

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

const EditMode = ({ id, name, editmode }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [inputName, setInputName] = useState(name)
    const [isLoading, setIsLoading] = useState(false)

    const changeInputName = (e) => {
        setInputName(e.target.value)
    }

    const deleteHouse = async () => {
        try {
            setIsLoading(true)
            navigate('/')
            const response = await houseAPI.deleteHouse(id, name)
            console.log(response.status)
            console.log('집 삭제')
            editmode('')
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const updateHouse = async () => {
        try {
            setIsLoading(true)
            await houseAPI.updateHouse(id, inputName)
            console.log('집 수정')
            editmode('')
            dispatch(setHouse({ houseId: id, houseName: inputName }))
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form onSubmit={updateHouse}>
                <input
                    type="text"
                    value={inputName}
                    onChange={changeInputName}
                    required
                    className="my-auto w-[450px] rounded border border-black px-4 py-2 text-3xl font-semibold focus:outline-none"
                />
                {/* 헤더 관리 */}
                {name !== 'DES' && name !== 'VPP' && (
                    <div className="absolute bottom-4 right-8 flex gap-3">
                        <button
                            onClick={() => {
                                deleteHouse()
                            }}
                            className="cancel-btn px-4 py-1"
                        >
                            집 삭제
                        </button>
                        <button
                            // onClick={() => updateHouse()}
                            className="cancel-btn px-4 py-1"
                        >
                            수정 완료
                        </button>
                    </div>
                )}
            </form>
            {isLoading && <LoadingScreen />}
        </div>
    )
}

export default function Header() {
    const houseId = useSelector((state) => state.houseSlice.houseId)
    const houseName = useSelector((state) => state.houseSlice.houseName)
    const location = useLocation()
    const [mode, setMode] = useState('')
    // console.log(location.pathname)
    const title = houseName
        ? houseName
        : location.pathname === '/vpp'
          ? 'VPP'
          : 'DES'
    console.log(houseId)
    console.log(houseName)
    console.log(mode)

    // useEffect(() => {
    //     setMode('')
    // }, [houseId])
    //
    // console.log(mode)
    useEffect(() => {
        setMode('')
    }, [location.pathname])

    return (
        <div className="h-28 bg-[url('@/assets/img/header_bg.png')] bg-cover bg-no-repeat">
            <div className="container relative flex h-full items-center px-10 py-6">
                {mode === 'edit' ? (
                    <EditMode id={houseId} name={title} editmode={setMode} />
                ) : (
                    <>
                        <p className="text-4xl font-semibold">{title}</p>
                        {/* 시간 */}
                        <TimeDisplay />
                        {/* 헤더 관리 */}
                        {title !== 'DES' && title !== 'VPP' && (
                            <div className="absolute bottom-4 right-8">
                                <button
                                    onClick={() => setMode('edit')}
                                    className="cancel-btn px-4 py-1"
                                >
                                    관리
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
