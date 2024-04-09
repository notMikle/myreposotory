import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './textField.module.scss'
import styled from 'styled-components';

export type TextFieldProps = {
    containerProps?: ComponentProps<'div'>
    errorMessage?: string
    label?: string
    labelProps?: ComponentProps<'label'>
    onValueChange?: (value: string) => void
    search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            className,
            containerProps,
            errorMessage,
            label,
            labelProps,
            onChange,
            onValueChange,
            placeholder,
            search,
            type,
            ...restProps
        },
        ref
    ) => {

        function handleChange(e: ChangeEvent<HTMLInputElement>) {
            onChange?.(e)
            onValueChange?.(e.target.value)
        }

        const classNames = {
            error: clsx(s.error),
            field: clsx(s.field, !!errorMessage && s.error, search && s.hasLeadingIcon, className),
            fieldContainer: clsx(s.fieldContainer),
            label: clsx(s.label, labelProps?.className),
            root: clsx(s.root, containerProps?.className),
        }

        return (
            <Root>
                {label && (
                    <span>
                        {label}
                    </span>
                )}
                <div className={classNames.fieldContainer}>
                    <input
                        className={classNames.field}
                        onChange={handleChange}
                        placeholder={placeholder}
                        ref={ref}
                        {...restProps}
                    />
                </div>
                <span>
                    {errorMessage}
                </span>
            </Root>
        )
    }
)
const Root = styled.div`
    width: 100%;
`