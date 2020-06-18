import wretch, { WretcherError } from "wretch"

const serverAddress = "https://localhost:5001/api";

// export const UpdateItem = (data, controller) => {

//     fetch(`${serverAddress}/${controller}`, {
//         method: 'PUT', // or 'POST'
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//         console.log('Success:', data);
//         })
//         .catch((error) => {
//         console.error('Error:', error);
//     });
// }

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