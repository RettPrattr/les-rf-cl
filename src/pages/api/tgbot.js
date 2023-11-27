import axios from "axios"

export default async (req, res) => {
    try {
        
        const {message} = req.body
        
        const tg_bot_url = `https://api.telegram.org/bot${process.env.TG_API_KEY}/sendMessage`

        await axios.post(tg_bot_url, {chat_id: process.env.TG_CHAT_ID, parse_mode: 'html', text: message})
        res.status(200).json({success: true})

    }
    catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
}