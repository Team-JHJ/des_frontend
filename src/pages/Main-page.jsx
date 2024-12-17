import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import HouseBox from '@/components/House-box.jsx'
import AddHomeModal from '@/components/Add-home-modal.jsx'
import houseAPI from '@/api/house.js'
import Loading from '@/components/Loading.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setHouse } from '@/store/house-slice.js'

export default function MainPage() {
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // 검색 입력값
    const [houseId, setHouseId] = useState('')
    // 가져온 집 목록
    const [houseList, setHouseList] = useState([])
    // 검색된 일치 집 목록
    const [searchHouseList, setSearchHouseList] = useState([])

    // const houseIde = useSelector((state) => state.houseSlice.houseId)
    // console.log(houseIde)
    console.log('다시')

    const changeInput = (e) => {
        setHouseId(e.target.value)
        console.log(houseId)
    }

    const searchHouse = () => {
        // e.preventDefault()
        const result = houseList.filter((house) => {
            return house.homename.includes(houseId)
        })
        setSearchHouseList(result)
    }

    const modalOpen = () => {
        setIsModalVisible(true)
    }

    const modalClose = () => {
        setIsModalVisible(false)
    }

    const exampleObj = [
        {
            id: 100,
            homename: 'hanna_house',
            inverterFault: false,
            derFault: true,
            homeloadFault: true,
            smartmeterFault: false,
        },
        {
            id: 102,
            homename: 'jihyeok_house',
            inverterFault: true,
            derFault: true,
            homeloadFault: false,
            smartmeterFault: false,
        },
        {
            id: 103,
            homename: 'heeown_house',
            inverterFault: false,
            derFault: true,
            homeloadFault: true,
            smartmeterFault: true,
        },
        {
            id: 104,
            homename: 'dohyun_house',
            inverterFault: false,
            derFault: false,
            homeloadFault: false,
            smartmeterFault: null,
        },
        {
            id: 110,
            homename: 'jehyung',
            inverterFault: false,
            derFault: false,
            homeloadFault: false,
            smartmeterFault: false,
        },
        {
            id: 111,
            homename: 'jihyeok_house',
            inverterFault: false,
            derFault: false,
            homeloadFault: false,
            smartmeterFault: false,
        },
        {
            id: 112,
            homename: 'jihyeok_house',
            inverterFault: null,
            derFault: null,
            homeloadFault: null,
            smartmeterFault: null,
        },
        {
            id: 20,
            homename: 'jihyeok_house',
            inverterFault: null,
            derFault: null,
            homeloadFault: null,
            smartmeterFault: null,
        },
        {
            id: 21,
            homename: 'jihyeok_house',
            inverterFault: null,
            derFault: true,
            homeloadFault: null,
            smartmeterFault: null,
        },
        {
            id: 22,
            homename:
                'jihyeok_housejihyeok_housejihyeok_housejihyeok_housejihyeok_house',
            inverterFault: null,
            derFault: null,
            homeloadFault: null,
            smartmeterFault: null,
        },
    ]

    const getHouse = async () => {
        try {
            setIsLoading(true)
            const response = await houseAPI.getHouse()
            console.log(response.data)
            setHouseList(response.data)
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const updateHouse = () => [getHouse()]

    useEffect(() => {
        dispatch(setHouse({ houseId: null, houseName: null }))
        getHouse()
    }, [])

    useEffect(() => {
        searchHouse()
    }, [houseId])

    return (
        <main className="flex h-full flex-col">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="flex h-[80px] justify-between border-b-2 border-[#ECECEE] px-6 py-4 text-lg">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                searchHouse()
                            }}
                            className="relative h-full w-72 rounded border border-black"
                        >
                            <input
                                name="houseId"
                                type="text"
                                placeholder="house search"
                                value={houseId}
                                onChange={(e) => changeInput(e)}
                                className="h-full w-[90%] rounded-l px-2 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-0 h-full"
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                        <div>
                            <button
                                className="h-full rounded-md border-2 border-[#D9D9D9] px-4 hover:bg-[#F1F2F4]"
                                onClick={() => modalOpen()}
                            >
                                집 등록
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-[2.65%] gap-y-4 p-6">
                        {searchHouseList.length !== 0 || houseId !== ''
                            ? searchHouseList.map((item, index) => (
                                  <HouseBox
                                      key={index}
                                      id={item.id}
                                      name={item.homename}
                                      der={item.derFault}
                                      homeload={item.homeloadFault}
                                      inverter={item.inverterFault}
                                      smartmeter={item.smartmeterFault}
                                  />
                              ))
                            : houseList.map((item, index) => (
                                  <HouseBox
                                      key={index}
                                      id={item.id}
                                      name={item.homename}
                                      der={item.derFault}
                                      homeload={item.homeloadFault}
                                      inverter={item.inverterFault}
                                      smartmeter={item.smartmeterFault}
                                  />
                              ))}
                    </div>
                </>
            )}
            {isModalVisible && (
                <AddHomeModal closeModal={modalClose} onSuccess={updateHouse} />
            )}
        </main>
    )
}
