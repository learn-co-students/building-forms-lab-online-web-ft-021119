export const createBand = (band) => {
    return {type: "CREATE_BAND", data: band}
}

export const getBands = () => {
    return {type: "GET_BANDS"}
}

