import axiosInstance from '@/api/axios.js'

const vppAPI = {
    getVppList: async (id) => {
        return await axiosInstance.get('/api/vpp/search', {
            params: {
                vppId: id,
            },
        })
    },
}

export default vppAPI
