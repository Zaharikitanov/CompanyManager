import wretch, { WretcherError } from "wretch"

const serverAddress = "http://localhost:5000/api";

export const CreateItem = async (data, controller) => {

    return await wretch(`${serverAddress}/${controller}`)
        .json(data)
        .post();
}

export const GetItems = async (controller: string) => {

    return await wretch(`${serverAddress}/${controller}`)
        .get()
        .json();
}

export const GetPaginatedItems = async (controller: string, searchCriteria?) => {
    if (searchCriteria) {
        console.log(searchCriteria);
        return await wretch(`${serverAddress}/${controller}`)
        .json(searchCriteria)
        .get();
    }
    return await wretch(`${serverAddress}/${controller}`)
        .get()
        .json();
}

export const DeleteItem = (controller: string) => {
    wretch(`${serverAddress}/${controller}`)
        .delete();
}

export const UpdateItem = (data, controller: string) => {
    wretch(`${serverAddress}/${controller}`)
        .put(data);
}