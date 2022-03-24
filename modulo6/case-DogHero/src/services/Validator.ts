export class Validator {
  public givenDateIsGreaterThanTodayShouldReturnTrue = (date: string) => {
    const arrDate = date.split("/")
    const tomorrow = new Date(Number(arrDate[2]), Number(arrDate[1]) - 1, Number(arrDate[0])).getTime()
    const today = new Date().getTime()

    if (new Date(today) < new Date(tomorrow)) {
      return true
    }
  }

  public isTheTimeFormatValid = (startTime: string, endTime: string) => {
    const regex = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/
    if (regex.test(startTime) && regex.test(endTime)) {
      return true
    }
  }

  public totalPricePerPetIsCorrect = (duration: string, pets: number) => {
    const pricePerHour = 35
    const pricePerHalfAnHour = 25
    const pricePerExtraPetsInHalfAnHour = 15
    const pricePerExtraPetsInOneHour = 20
    const pet = Number(pets)
    let result = 0

    if (duration === "30" && pet > 1) {
      result = pricePerHalfAnHour + (pet * pricePerExtraPetsInHalfAnHour)
    }

    if (duration === "60" && pet > 1) {
      result = pricePerHour + (pet * pricePerExtraPetsInOneHour)
    }

    if (duration === "30" && pet === 1) {
      result = pricePerHalfAnHour
    }

    if (duration === "60" && pet === 1) {
      result = pricePerHour
    }

    return result
  }

  public areLatituteAndLongituteValid = (latitute: string, longitute: string) => {
    const regexLatitute = /^[+-]?(([1-8]?[0-9])(\.[0-9]{1,6})?|90(\.0{1,6})?)$/
    const regexLongitute = /^[+-]?((([1-9]?[0-9]|1[0-7][0-9])(\.[0-9]{1,6})?)|180(\.0{1,6})?)$/

    if (regexLatitute.test(latitute) === true && regexLongitute.test(longitute) === true) {
      return true
    }
  }

  public validateWalkTimes = (startTime: string, endTime: string) => {
    const arrStart = startTime.split(":")
    const arrEnd = endTime.split(":")
    const startInMinutes = Number(arrStart[0]) * 60 + Number(arrStart[1])
    const endInMinutes = Number(arrEnd[0]) * 60 + Number(arrEnd[1])

    if (endInMinutes - 30 === startInMinutes || endInMinutes - 60 === startInMinutes) {
      return true
    }
  }

  public validDateForMysql = (date: string) => {
    const newDate = date.split("/")
    const mysqlDate = newDate[2] + "-" + newDate[1] + "-" + newDate[0]

    return mysqlDate
  }
}