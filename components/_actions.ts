'use server'

import { z } from 'zod'
import { FormDataSchema } from '@/lib/schema'
import axios from 'axios';

type Inputs = z.infer<typeof FormDataSchema>
export default async function sendMessage(name: string, company: string, phone:string, dataTech?:any) {
    try {
        const response = await axios.post('/api/sendMessage', { name, company, phone, dataTech});
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw new Error('Failed to send message');
    }
}

export async function addEntry(data: Inputs, dataTech:any) {
    const result = FormDataSchema.safeParse(data)
    console.log(result)
    if (result.success) {
        const message = await sendMessage(data.name, data.company, data.phone, JSON.stringify(dataTech))
        console.log(dataTech)
        return { success: true, data: message.data }
    }

    if (result.error) {
        return { success: false, error: result.error.format() }
    }
    else {
        console.error('error')}
}