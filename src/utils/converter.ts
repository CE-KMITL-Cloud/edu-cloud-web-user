import dayjs from 'dayjs'

export const formatDateFromUnix = (timestamp: string): string => {
  const intTimestamp = parseInt(timestamp)
  return dayjs.unix(intTimestamp).format('YYYY-MM-DD')
}
