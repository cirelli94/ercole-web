import axiosDefault from '@/axios/axios-default.js'
import { filterByKeys } from '@/helpers/helpers.js'
import _ from 'lodash'

export const state = () => ({
  licenseList: []
})

export const getters = {
  getUsedLicenses: (state, getters, rootState) => {
    if (rootState.localFilters.hasFilters) {
      return filterByKeys(state.licenseList, rootState.localFilters.filters)
    } else {
      return state.licenseList
    }
  }
}

export const mutations = {
  SET_LICENSE_LIST: (state, payload) => {
    state.licenseList = payload
  }
}

export const actions = {
  async getLicensesList({ commit, getters }) {
    const licensesList = await axiosDefault.get(
      '/hosts/technologies/oracle/databases/consumed-licenses',
      {
        params: {
          'older-than': getters.getActiveFilters.date,
          environment: getters.getActiveFilters.environment,
          location: getters.getActiveFilters.location
        }
      }
    )
    const response = await licensesList.data

    let setLicensesInfo = _.map(response, val => {
      return {
        ...val,
        description: getters.returnMetricAndDescription(val.licenseTypeID)
          .description,
        metric: getters.returnMetricAndDescription(val.licenseTypeID).metric
      }
    })

    commit('SET_LICENSE_LIST', setLicensesInfo)
  }
}
