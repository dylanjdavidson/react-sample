export const YELP_BASE_URL =
    "http://localhost:1337/https://api.yelp.com/v3/businesses/search?";

export const getYelpBusinessResponse = async(params) => {
    const { location } = params;
    let response = {};
    let paramString = "term=restaurants";
    if (location) {
        paramString += "&location=" + location;
    }
    response = await fetch(YELP_BASE_URL + paramString, {
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: "Bearer V3445dhF47n4C6eCt7W2SZKHXFyg5fEo62rLF_pdVIBZ8yeFiHsA6tRLbycg8lt-AH7odVfXgquDNGJZUJQJLATATXDVZduMnOrBX8lgCcxuMmTgQ-FcPdzUGWG2YXYx",
            },
        })
        .then((res) => res.json())
        .catch(console.error);
    return response;
};

export const moveElement = (arr, index, moveUp) => {
    // ran out of time :/
    return arr;
};