import BaseModal from '@/components/Base-modal.jsx'
import { FaRegRectangleList } from 'react-icons/fa6'
import { useState } from 'react'
import listAPI from '@/api/list.js'
import { useSelector } from 'react-redux'
import LoadingScreen from '@/components/Loading-screen.jsx'

export default function AddListModal({ closeModal, category, onSuccess }) {
    const choiceList = {
        der: ['Solar', 'Wind', 'EV Battery', 'ESS'],
        homeload: [
            'HVAC',
            'Lighting',
            'EV Charger',
            'Refrigerator',
            'Washing Machine',
            'Dishwasher',
        ],
        inverter: ['inverter'],
        smartmeter: ['smartmeter'],
    }
    const houseId = useSelector((state) => state.houseSlice.houseId)
    const [listName, setListName] = useState('')
    const [choiceCategory, setChoiceCategory] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const selectCategory = (e) => {
        if (choiceCategory && choiceCategory === e.target.innerText) {
            // 카테고리를 선택했을 때 이미 선택한 카테고리이면 선택 해제
            setChoiceCategory('')
        } else {
            // 아니라면 해당 카테고리를 선택
            setChoiceCategory(e.target.innerText)
        }
    }

    const addList = async (houseId, category, listName, choiceCategory) => {
        try {
            setIsLoading(true)
            const response = await listAPI.addList({
                id: houseId,
                category: category,
                name: listName,
                type: choiceCategory,
            })
            if (response.status === 200 || response.status === 201) {
                onSuccess()
            }
            setTimeout(() => setIsLoading(false), 1000)
            // 추가 요청처리 완료 후 모달창 닫기
            closeModal()
        } catch (error) {
            console.error(error)
        }
    }

    const clickSubmit = (e) => {
        if (!choiceCategory) {
            // 카테고리를 선택하지 않은 경우
            alert('카테고리를 선택해주세요!')
            e.preventDefault()
        } else {
            e.preventDefault()
            // console.log(choiceCategory)
            // 추가 요청 처리
            addList(houseId, category, listName, choiceCategory)
        }
    }

    return (
        <BaseModal closeModal={closeModal}>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className="flex flex-col">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#CFDDF175] p-3">
                            <FaRegRectangleList size={40} color="6D8BA3" />
                        </div>
                        <p className="text-2xl font-medium">{category} 등록</p>
                    </div>
                    <div className="flex flex-col gap-3 pl-20">
                        <p>추가하려는 메뉴를 클릭하고 이름을 입력해주세요.</p>
                        <div className="flex w-[430px] flex-wrap justify-between gap-3">
                            {choiceList[category].map((item, index) => (
                                <button
                                    key={index}
                                    className={`w-52 rounded border border-[#767676] py-2 text-xl font-medium text-[#767676] hover:bg-[#F1F2F4] ${choiceCategory === item && 'bg-[#F1F2F4]'}`}
                                    onClick={(e) => selectCategory(e)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <form
                            action=""
                            className="flex flex-col gap-3"
                            onSubmit={clickSubmit}
                        >
                            <input
                                type="text"
                                placeholder="이름을 입력해주세요"
                                value={listName}
                                onChange={(e) => setListName(e.target.value)}
                                className="w-full rounded border border-black px-4 py-2 focus:outline-none"
                                required
                            />
                            <div className="flex w-full justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="cancel-btn px-8 py-2"
                                >
                                    취소
                                </button>
                                <button
                                    type="submit"
                                    className="confirm-btn px-8 py-2"
                                >
                                    추가
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </BaseModal>
    )
}
