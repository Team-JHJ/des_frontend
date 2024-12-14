import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import HouseBox from '@/components/House-box.jsx'

export default function MainPage() {
    const [houseId, setHouseId] = useState('')

    const changeInput = (e) => {
        setHouseId(e.target.value)
    }

    const searchHouse = (e) => {
        e.preventDefault()
    }

    const exampleObj = [
        {
            id: 1,
            homename: 'hanna_house',
            inverterFault: false,
            derFault: true,
            homeloadFault: true,
            smartmeterFault: false,
        },
        {
            id: 2,
            homename: 'jihyeok_house',
            inverterFault: true,
            derFault: true,
            homeloadFault: false,
            smartmeterFault: false,
        },
        {
            id: 3,
            homename: 'heeown_house',
            inverterFault: false,
            derFault: true,
            homeloadFault: true,
            smartmeterFault: true,
        },
        {
            id: 4,
            homename: 'dohyun_house',
            inverterFault: false,
            derFault: false,
            homeloadFault: false,
            smartmeterFault: null,
        },
        {
            id: 10,
            homename: 'jehyung',
            inverterFault: false,
            derFault: false,
            homeloadFault: false,
            smartmeterFault: false,
        },
        {
            id: 11,
            homename: 'jihyeok_house',
            inverterFault: false,
            derFault: false,
            homeloadFault: false,
            smartmeterFault: false,
        },
        {
            id: 12,
            homename: 'jihyeok_house',
            inverterFault: null,
            derFault: null,
            homeloadFault: null,
            smartmeterFault: null,
        },
        {
            id: 12,
            homename: 'jihyeok_house',
            inverterFault: null,
            derFault: null,
            homeloadFault: null,
            smartmeterFault: null,
        },
        {
            id: 12,
            homename: 'jihyeok_house',
            inverterFault: null,
            derFault: true,
            homeloadFault: null,
            smartmeterFault: null,
        },
        {
            id: 12,
            homename:
                'jihyeok_housejihyeok_housejihyeok_housejihyeok_housejihyeok_house',
            inverterFault: null,
            derFault: null,
            homeloadFault: null,
            smartmeterFault: null,
        },
    ]

    return (
        <main className="h-full flex flex-col">
            <div className="h-[80px] border-b-2 border-[#ECECEE] flex justify-between px-6 py-4 text-lg">
                <form
                    onSubmit={(e) => searchHouse(e)}
                    className="w-72 h-full relative border border-black rounded"
                >
                    <input
                        name="houseId"
                        type="text"
                        placeholder="house search"
                        value={houseId}
                        onChange={(e) => changeInput(e)}
                        className="w-[90%] h-full px-2 focus:outline-none rounded-l"
                    />
                    <button
                        type="submit"
                        className="absolute top-0 right-2 h-full"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
                <div>
                    <button className="h-full px-4 rounded-md border-[#D9D9D9] border-2 hover:bg-[#F1F2F4]">
                        Add House
                    </button>
                </div>
            </div>
            <div className="p-6 flex flex-wrap gap-y-4 gap-x-[2.65%]">
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
        </main>
    )
}
