const baseUrl = 'https://cors-anywhere.herokuapp.com/http://api.spending.gov.ua/api/v2'

const regions = {
  getRegions () {
    return '/dictionaries/regions'
  }
}

const transactions = {
  getTransactions () {
    return '/transactions/top100'
  }
}

export const api = {
  baseUrl,
  regions,
  transactions
}