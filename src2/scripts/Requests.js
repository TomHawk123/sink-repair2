import { getRequests } from "./dataAccess.js"


const ServiceRequests = (serviceRequestObject) => {
    return `
    <li>${serviceRequestObject.description} at ${serviceRequestObject.address} with a budget of 
    $${serviceRequestObject.budget} to be completed no later than ${serviceRequestObject.neededBy}</li>
    `
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(ServiceRequests).join("")
            }
        </ul>
    `

    return html
}



// DOES NOT WORK

// export const Requests = () => {
//     const requests = getRequests()

//     let html = `
//         <ul>
//             ${
//                 requests.forEach(serviceRequestObject => document.querySelector("#container") += `
//                         <li>${serviceRequestObject.description} at ${serviceRequestObject.address} with a budget of 
//                         ${serviceRequestObject.budget} to be completed no later than ${serviceRequestObject.date}
//                         </li>
//                         `
//                     )
//             }
//         </ul>
//     `

//     return html
// }