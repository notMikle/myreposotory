import { z } from 'zod'

export const FormDataSchema = z.object({
    name: z.string().nonempty('Name is required.'),
    company: z
        .string()
        .nonempty('Message is required.')
        .min(6, { message: 'Message must be at least 6 characters.' }),
    phone:z.string()
})