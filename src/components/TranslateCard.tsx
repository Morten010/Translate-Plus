"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { CustomSelect } from './customUi/CustomSelect'
import { Textarea } from './ui/textarea'

type TranslateCardProps = {
    text: string
    setText?: Dispatch<SetStateAction<string>>
    setLanguage: Dispatch<SetStateAction<string>>
}

export default function TranslateCard({text, setText, setLanguage}: TranslateCardProps) {
    
  return (
    <Card className="w-full sm:w-[50%]">
        <CardHeader>
            <CardTitle
            className="flex items-center gap-2"
            >
            From:
            <CustomSelect setLanguage={setLanguage}/>
            </CardTitle>
        </CardHeader>

        <CardContent 
        className='w-full'
        >
            <Textarea 
            rows={10} 
            placeholder="What do you wanna translate?"
            onChange={(e) => setText ? setText(e.target.value) : () => {}}
            value={text}
            />
        </CardContent>
    </Card>
  )
}
