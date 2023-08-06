"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import {RxSun, RxMoon} from "react-icons/rx"
import { Button } from './button'

export default function ThemeButton() {
    const { theme , setTheme } = useTheme()
  return (
    <Button 
    variant={'outline'}
    size={'icon'}
    className=''
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        {theme === "dark" && (
            <RxMoon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        )}
        {theme === "light" && (
            <RxSun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        )}
    </Button>
  )
}
