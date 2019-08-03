export const state = () => ({
    categories: []
})


export const getters = {
    categories (state) {
        return state.categories
    }
}

export const mutations = {
    SET_CATEGOIES (state, categories) {
        state.categories = categories
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        let response = await this.$axios.$get('categories')

        commit ('SET_CATEGOIES', response.data)
    }
}
