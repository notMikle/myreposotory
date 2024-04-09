'use server'

import { z } from 'zod'
import { FormDataSchema } from '@/lib/schema'
import axios from 'axios';

type Inputs = z.infer<typeof FormDataSchema>
export default async function sendMessage(name: string, company: string, phone:string) {
    try {
        const response = await axios.post('/api/sendMessage', { name, company, phone});
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw new Error('Failed to send message');
    }
}

export async function addEntry(data: Inputs) {
    const result = FormDataSchema.safeParse(data)

    if (result.success) {
        sendMessage(data.name, data.company, data.phone)
        return { success: true, data: result.data }
    }

    if (result.error) {
        return { success: false, error: result.error.format() }
    }
}