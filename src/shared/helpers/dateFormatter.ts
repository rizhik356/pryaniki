const dateFormatter = (isoDate: string) => {
  const date = new Date(isoDate)
  return ` ${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`
}

export default dateFormatter
