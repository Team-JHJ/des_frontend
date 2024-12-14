import BaseModal from '@/components/Base-modal.jsx'
import { FaRegRectangleList } from 'react-icons/fa6'
import { useState } from 'react'

export default function AddListModal({ closeModal }) {
    const derList = ['Solar', 'Wind', 'EV Battery', 'ESS']
    const [listName, setListName] = useState('')
    const [category, setCategory] = useState('')

    const selectCategory = (e) => {
        if (category && category === e.target.innerText) {
            // 카테고리를 선택했을 때 이미 선택한 카테고리이면 선택 해제
            setCategory('')
        } else {
            // 아니라면 해당 카테고리를 선택
            setCategory(e.target.innerText)
        }
    }

    const clickSubmit = (e) => {
        if (!category) {
            // 카테고리를 선택하지 않은 경우
            alert('카테고리를 선택해주세요!')
            e.preventDefault()
        } else {
            e.preventDefault()
            // 추가 요청 처리
            console.log('DER 추가 요청 처리중!')
            // 추가 요청처리 완료 후 모달창 닫기
            closeModal()
        }
    }

    return (
        <BaseModal closeModal={closeModal}>
            <div className="flex flex-col">
                <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#CFDDF175] p-3">
                        <FaRegRectangleList size={40} color="6D8BA3" />
                    </div>
                    <p className="text-2xl font-medium">DER 등록</p>
                </div>
                <div className="flex flex-col gap-3 pl-20">
                    <p>추가하려는 DER을 클릭하고 이름을 입력해주세요.</p>
                    <div className="flex w-[430px] flex-wrap justify-between gap-3">
                        {derList.map((item, index) => (
                            <button
                                key={index}
                                className={`w-52 rounded border border-[#767676] py-2 text-xl font-medium text-[#767676] hover:bg-[#F1F2F4] ${category === item && 'bg-[#F1F2F4]'}`}
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
        </BaseModal>
    )
}
