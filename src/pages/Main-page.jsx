import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import HouseBox from '@/components/House-box.jsx'
import AddHomeModal from '@/components/Add-home-modal.jsx'

export default function MainPage() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [houseId, setHouseId] = useState('')

    const changeInput = (e) => {
        setHouseId(e.target.value)
    }

    const searchHouse = (e) => {
        e.preventDefault()
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

    return (
        <main className="flex h-full flex-col">
            <div className="flex h-[80px] justify-between border-b-2 border-[#ECECEE] px-6 py-4 text-lg">
                <form
                    onSubmit={(e) => searchHouse(e)}
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
                {exampleObj.map((item, index) => (
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
            {isModalVisible && <AddHomeModal closeModal={modalClose} />}
        </main>
    )
}
