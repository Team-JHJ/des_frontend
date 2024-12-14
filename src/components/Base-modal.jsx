import { useEffect } from 'react'

export default function BaseModal({ closeModal, children }) {
    useEffect(() => {
        // 모달창이 열리면 배경 스크롤이 안되도록
        document.body.style.overflow = 'hidden'

        // 모달이 닫히면 배경이 다시 스크롤이 되도록
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[#D9D9D9AB] flex justify-center items-center z-10"
            // 모달 배경을 눌렀을 때 모달창이 닫히도록
            onClick={() => closeModal()}
        >
            <div
                className="min-w-80 px-9 py-8 rounded-lg bg-white"
                // 모달창을 눌렀을 때 모달창이 닫히지 않도록
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
