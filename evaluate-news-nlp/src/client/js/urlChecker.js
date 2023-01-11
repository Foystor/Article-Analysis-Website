// check whether a string is valid URL
function isValidHttpUrl(string) {
    console.log("::: Running isValidHttpUrl :::", string)

    let url
    try {
        url = new URL(string)
    } catch (error) {
        return false
    }
    return url.protocol === "http:" || url.protocol === "https:"
}

export { isValidHttpUrl }
