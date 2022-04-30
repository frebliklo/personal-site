export function yearsSince(startDate = new Date(2016, 8, 1)) {
  let ageDiff = Date.now() - startDate.getTime()
  let ageDate = new Date(ageDiff)

  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export function currentYear() {
  return new Date().getFullYear()
}
