import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

const token = process.env.TOKEN
const chatId = process.env.CHATID
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Получаем данные из тела запроса
        const { name, company, phone } = req.body;

        // Отправляем запрос к API Telegram
        const telegramResponse = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            parse_mode: 'html',
            text: `
            Новая заявка!
            Имя: ${name} 
            Организация: ${company} 
            Телефон: ${phone}`
        });

        // Отправляем успешный ответ
        res.status(200).json({ success: true, response: telegramResponse.data });
    } catch (error) {
        // Если произошла ошибка, отправляем ответ с ошибкой
        res.status(500).json({ success: false, error: 'error.message' });
    }
}