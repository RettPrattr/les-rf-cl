import findValue from "./findValue";

export default function findImageUrl(entireObj, keyToFind, maxQuality=false) {
    let finalObj = 0
    let foundObj;

    if (typeof window !== 'undefined') {
        const newObj = findValue(entireObj, 'formats')
        if (window.innerWidth < 800) {
            newObj ? finalObj = newObj.small : finalObj = entireObj
        }
        else {
            newObj?.large && !maxQuality ? finalObj = newObj.large : finalObj = entireObj
        }
    } else {
        finalObj = entireObj
    }

    JSON.stringify(finalObj, (_, nestedValue) => {
        if (nestedValue && nestedValue[keyToFind]) {
            foundObj = nestedValue[keyToFind];
            return foundObj
        }
        return nestedValue
    });


    return process.env.API_LINK + foundObj
};