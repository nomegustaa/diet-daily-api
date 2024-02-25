import { IMeal } from '../services/getMeal/types'

const formatDate = async (data: IMeal[]) => {
  const formatDate = data.map((item) => {
    const dateString = JSON.stringify(item.date_snack)
    const date = dateString.slice(1, 10)
    const dateFormat = date.split('-').reverse().join('/')
    const hourFormat = dateString.slice(12, 17)
    return { ...item, date_snack: dateFormat, hourMeal: hourFormat }
  })
  return formatDate
}

export default { formatDate }
