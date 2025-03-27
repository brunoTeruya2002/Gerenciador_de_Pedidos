import axios from "axios";
export const getURLConnection = (conn :string) => {
    let url = "http://localhost"
    let port = "8080"
    if(conn.includes("192.192.824.041")){
        url = 'https://192.192.824.041'
    }


    return `${url}:${port}`

}



export const ApiConnection = (conn :string) => {
    return axios.create({
        baseURL:getURLConnection(conn),
        timeout:30*1000,
        timeoutErrorMessage:'Deu erro no servidor...'
    })
}