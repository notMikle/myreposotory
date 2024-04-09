import axios from 'axios';
type TechType = {
    id: string;
    images: string[];
    brand: string;
    title: string;
    info: string;
    category: string;
    finalPrice: number;
    originalPrice: number;
    quantity: number;
    gosNum: string;
};

export const updateTechData = async (id: string, newData: Partial<TechType>) => {
    try {
        // Отправляем PUT запрос на сервер для обновления данных карточки техники
        const response = await axios.put('/api/data/techniks', { id, ...newData });
        // Возвращаем обновленные данные карточки техники
        return response.data;
    } catch (error) {
        console.error('Error updating tech data:', error);
        // В случае ошибки возвращаем null или бросаем исключение
        throw new Error('Failed to update tech data');
    }
};

