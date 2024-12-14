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
            className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-[#D9D9D9AB]"
            // 모달 배경을 눌렀을 때 모달창이 닫히도록
            onClick={() => closeModal()}
        >
            <div
                className="min-w-80 rounded-lg bg-white px-9 py-8"
                // 모달창을 눌렀을 때 모달창이 닫히지 않도록
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
