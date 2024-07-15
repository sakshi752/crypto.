const convertDate = (date) => {
    const opDate = new Date(date)
    return opDate.getDate() + "/" + (opDate.getMonth() + 1)
}
export default convertDate