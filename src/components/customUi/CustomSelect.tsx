"use client"
import * as React from "react"
import { Dispatch, SetStateAction } from 'react'
import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select"


//Props types
type CustomSelectProps = {
    setLanguage: Dispatch<SetStateAction<string>>
    language: string
}

export function CustomSelect({setLanguage, language} : CustomSelectProps) {
  
  return (
    <Select value={language} onValueChange={(e) => setLanguage(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup
        className="max-h-[200px]"
        >
            <SelectLabel>Languages</SelectLabel>
            <SelectItem value="da">Danish</SelectItem>
            <SelectItem value="zh">Chinese</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="hi">Hindi</SelectItem>
            <SelectItem value="ar">Arabic</SelectItem>
            <SelectItem value="bn">Bengali</SelectItem>
            <SelectItem value="ru">Russian</SelectItem>
            <SelectItem value="pt">Portuguese</SelectItem>
            <SelectItem value="id">Indonesian</SelectItem>
            <SelectItem value="ur">Urdu</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="ja">Japanese</SelectItem>
            <SelectItem value="de">German</SelectItem>
            <SelectItem value="tr">Turkish</SelectItem>
            <SelectItem value="ko">Korean</SelectItem>
            <SelectItem value="it">Italian</SelectItem>
            <SelectItem value="vi">Vietnamese</SelectItem>
            <SelectItem value="ta">Tamil</SelectItem>
            <SelectItem value="te">Telugu</SelectItem>
            <SelectItem value="mr">Marathi</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
