export const undefinedChecker = (inputObject, objectProperty) => {
    return inputObject != undefined ? inputObject[objectProperty] : "";
}