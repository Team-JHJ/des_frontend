import BaseModal from '@/components/Base-modal.jsx'
import { useState } from 'react'
import { RiHome6Line } from 'react-icons/ri'

export default function AddHomeModal({ closeModal }) {
    const [houseName, setHouseName] = useState('')

    const clickSubmit = (e) => {
        e.preventDefault()
        // 추가 요청 처리
        console.log('집 추가 요청 처리중!')
        // 추가 요청처리 완료 후 모달창 닫기
        closeModal()
    }

    return (
        <BaseModal closeModal={closeModal}>
            <div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#CFDDF175] rounded-full">
                        <RiHome6Line size={40} color="6D8BA3" />
                    </div>
                    <p className="text-2xl">집 등록</p>
                </div>
                <form
                    onSubmit={clickSubmit}
                    className="pl-20 flex flex-col gap-5"
                >
                    <label htmlFor="houseName">
                        모니터링을 위한 집 추가를 위해 이름을 입력해주세요.
                    </label>
                    <input
                        type="text"
                        id="houseName"
                        name="houseName"
                        value={houseName}
                        onChange={(e) => setHouseName(e.target.value)}
                        required
                        className="px-4 py-2 border border-black rounded text-lg w-[450px] focus:outline-none"
                    />
                    <div className=" flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-8 py-2 cancel-btn"
                        >
                            취소
                        </button>
                        <button type="submit" className="px-8 py-2 confirm-btn">
                            추가
                        </button>
                    </div>
                </form>
            </div>
        </BaseModal>
    )
}
