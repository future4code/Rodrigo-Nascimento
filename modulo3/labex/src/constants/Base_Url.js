export const Base_Url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/desatinar"

export const token = localStorage.getItem("token")

export const header = {

    headers: {
        auth: token
    }
}


