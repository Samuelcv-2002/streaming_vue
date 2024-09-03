import { ref } from "vue"
import { LoginType } from "../types/Login"
import http from "../../../utils/http"
import { useRouter } from "vue-router"

export default () => {
    const router = useRouter()

    const loginData = ref<LoginType>({
        username: "",
        pass: ""
    })


    const Login = async () => {
        try {
            const result = await http.PostJSON("/auth/login", loginData.value)
            const {token} = result
            document.cookie = `token=${token}; path=/; Secure; SameSite=Strict`;
            router.push("/home")      
        } catch (error) {
            console.log(error)
        }
    }

    return {
        loginData,
        Login,
    }
}