import axiosInstance from '@/api/axios.js'

const houseAPI = {
    // 집 목록 가져오기
    getHouse: () => {
        return axiosInstance.get('/api/home')
    },

    // 집 추가하기
    addHouse: (homeName) => {
        return axiosInstance.post(`/api/home?homeName=${homeName}`)
    },

    // 집 이름 수정하기
    updateHouse: (homeId, homeName) => {
        return axiosInstance.put(`/api/home/${homeId}`, null, {
            params: {
                homeId: homeId,
                homeName: homeName,
            },
        })
    },

    // 집 삭제하기
    deleteHouse: (homeId) => {
        return axiosInstance.delete('/api/home', {
            params: {
                homeId: homeId,
            },
        })
    },

    // 집 이름 조회하기
    getHouseName: (homeId) => {
        return axiosInstance.get(`api/home/${homeId}`)
    },
}

export default houseAPI
