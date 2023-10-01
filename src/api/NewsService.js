import axios from "axios";
const href = `https://victoryaura.pythonanywhere.com/api/news/`
export default class ImgService {
    static async getImg(src) {
        const response = await axios.get(href+src+'/')
        return response
    }
}