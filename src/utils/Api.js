import axios from "axios"

export const getNotesApiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 101, title: "Product 1", description: "This is Product 1", quantity: 10},
                {id: 102, title: "Product 2", description: "This is Product 2", quantity: 1},
                {id: 103, title: "Product 3", description: "This is Product 3", quantity: 21},
                {id: 104, title: "Product 4", description: "This is Product 4", quantity: 2},
                {id: 105, title: "Product 5", description: "This is Product 5", quantity: 23},
                {id: 106, title: "Product 6", description: "This is Product 6", quantity: 19},
                {id: 107, title: "Product 7", description: "This is Product 7", quantity: 7},
                {id: 108, title: "Product 8", description: "This is Product 8", quantity: 4},
                {id: 109, title: "Product 9", description: "This is Product 9", quantity: 13}
              ])
        }, 2000)
    })
}

export const getArchiveNotesApiCall = () => {

    //set data in localstorage
    // localStorage.setItem("access_token", "")
    axios.get("url", { headers : {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }})
}

