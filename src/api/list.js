import axiosInstance from '@/api/axios.js'

const listAPI = {
    // 리스트 정보 가져오기
    getList: (homeId, category) => {
        return axiosInstance.get(`/api/${category}/search?homeId=${homeId}`)
    },

    // // 리스트 추가하기
    // addList: ({ id }) => {
    //
    // }
    //
    // // 리스트 내용 수정하기
    // updateList: ({ id }) => {
    //
    // }
    //
    // 리스트 삭제하기
    deleteList: ({ category, id }) => {
        return axiosInstance.delete(`/api/${category}?${category}Id=${id}`, {
            params: {
                [`${category}Id`]: id,
            },
        })
    },
}

export default listAPI
