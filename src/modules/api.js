const baseUrl = 'https://cors-escape.herokuapp.com/http://api.spending.gov.ua/api/v2'

const regions = {
  getRegions () {
    return '/dictionaries/regions'
  }
}

const transactions = {
  getTransactions () {
    return 'api/transactions/top100'
  }
}

export const api = {
  baseUrl,
  regions,
  transactions
}