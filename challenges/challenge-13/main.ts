export function calculateTime(deliveries: string[]): string {
  //
  const maxHours = '07:00:00'
  //
  function timeStringToSeconds(time: string): number {
    //
    const [hours, minutes, seconds] = time.split(':').map(Number)
    return hours * 3600 + minutes * 60 + seconds
  }

  function secondsToTimeString(seconds: number): string {
    //
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60

    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  function addTime(startTime: string, addTime: string): string {
    //
    const startSeconds = timeStringToSeconds(startTime)
    const addSeconds = timeStringToSeconds(addTime)
    const resultSeconds = startSeconds + addSeconds

    return secondsToTimeString(resultSeconds)
  }

  let totalDeliveryTime = '00:00:00'
  deliveries.forEach((deliveryTime) => (totalDeliveryTime = addTime(totalDeliveryTime, deliveryTime)))

  // Revisar si el tiempo de entrega acumulado supera el máximo permitido
  if (timeStringToSeconds(totalDeliveryTime) < timeStringToSeconds(maxHours)) {
    //
    const result = secondsToTimeString(timeStringToSeconds(maxHours) - timeStringToSeconds(totalDeliveryTime))
    return '-'.concat(result)
  }

  const result = secondsToTimeString(timeStringToSeconds(totalDeliveryTime) - timeStringToSeconds(maxHours))
  return result
}
