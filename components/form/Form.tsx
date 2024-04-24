'use client'

import {useState} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import {addEntry} from '@/components/_actions'
import {TextField} from '@/components/textField/TextField';
import styled from 'styled-components';

const russianPhoneRegex = /^((\+7|7|8)+([0-9]){10})$/;

const FormDataSchema = z.object({
    name: z.string().nonempty('Имя не должно быть пустым.'),
    company: z.string().nonempty('Компания не должна быть пуста.'),
    phone: z.string()
        .nonempty('Телефон не должен быть пустым.')
        .regex(russianPhoneRegex, { message: 'Неверный формат телефона. Введите российский номер.' })
})

type Inputs = z.infer<typeof FormDataSchema>

export default function RhfWithAction(dataTech:any) {
    const [data, setData] = useState<Inputs>()
    const {
        register,
        handleSubmit,
        // watch,
        reset,
        formState: {errors}
    } = useForm<Inputs>({
        resolver: zodResolver(FormDataSchema)
    })

    const processForm: SubmitHandler<Inputs> = async data => {
        const result = await addEntry(data, dataTech)

        if (!result) {
            console.log('Something went wrong')
            return
        }

        if (result.error) {
            console.log(result.error)
            return
        }

        reset()
        setData(result.data)
    }

    return (
        <FormDiv>
            <Form onSubmit={handleSubmit(processForm)}>
                <FormTitle>Оставьте заявку и мы вам перезвоним!</FormTitle>
                <TextField
                    placeholder="Ваше имя"
                    {...register('name')}
                    errorMessage={errors.name?.message}
                />
                <TextField
                    placeholder="Организация"
                    {...register('company')}
                    errorMessage={errors.company?.message}
                />
                <TextField
                    placeholder="Телефон"
                    {...register('phone')}
                    errorMessage={errors.phone?.message}
                />
                <ButtonSubmit>Отправить</ButtonSubmit>
            </Form>
        </FormDiv>
    )
}
const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;
`

export const FormDiv = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  border-radius: 40px;
`

export const FormTitle = styled.h3`
  font-size: 18px;
  padding: 10px;
`
export const ButtonSubmit = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0 15px 15px 0;
  outline: none;
  border: none;
  border-radius: 3px;
  height: 37px;
  line-height: 37px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: normal;
  text-decoration: none;
  color: rgba(102, 102, 102, 0.68);
  background-color: #fff;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  transition: box-shadow .18s ease-out, background .18s ease-out, color .18s ease-out;
  &:hover{
    box-shadow: 0 1px 1px 0  #cfcfcf, 0 2px 5px 0  #cfcfcf;
  }
`