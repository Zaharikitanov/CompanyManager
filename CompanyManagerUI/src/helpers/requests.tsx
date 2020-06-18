import wretch, { WretcherError } from "wretch"

const serverAddress = "https://localhost:5001/api";

export const CreateItem = (data, controller) => {
    wretch(`${serverAddress}/${controller}`)
        .json(data)
        .post();
}

export const GetItems = async (controller: string) => {

    return await wretch(`${serverAddress}/${controller}`)
        .get()
        .json();
}

export const DeleteItem = (controller) => {
    wretch(`${serverAddress}/${controller}`)
        .delete();
}

export const UpdateItem = (data, controller) => {
    wretch(`${serverAddress}/${controller}`)
        .put(data);
}