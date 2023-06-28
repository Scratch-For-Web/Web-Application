import pocketdb from "../../pocketbase.mjs"
const pb = new pocketdb('https://shaggy-denmark.pockethost.io')

export const auth = {
    login: async (email, password) => {
        let res = await pb.collection('users').authWithPassword(email, password)
        return res
    },
    signup: async (email, password, username) => {
         try {
            await pb.collection('users').create({
                email: email,
                password: password,
                passwordConfirm: password,
                username: username
            })
            
            return res
         }
            catch (err) {   
            return err
        }
    },
    checkStatus:   () => {
        return  pb.authStore.isValid
    },
}
