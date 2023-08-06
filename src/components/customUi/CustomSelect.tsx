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
}

//constants
const languages = [
    {label: "Danish", value: "da"},
    { "label": "Chinese", "value": "zh" },
    { "label": "Spanish", "value": "es" },
    { "label": "English", "value": "en" },
    { "label": "Hindi", "value": "hi" },
    { "label": "Arabic", "value": "ar" },
    { "label": "Bengali", "value": "bn" },
    { "label": "Russian", "value": "ru" },
    { "label": "Portuguese", "value": "pt" },
    { "label": "Indonesian", "value": "id" },
    { "label": "Urdu", "value": "ur" },
    { "label": "French", "value": "fr" },
    { "label": "Japanese", "value": "ja" },
    { "label": "German", "value": "de" },
    { "label": "Turkish", "value": "tr" },
    { "label": "Korean", "value": "ko" },
    { "label": "Italian", "value": "it" },
    { "label": "Vietnamese", "value": "vi" },
    { "label": "Tamil", "value": "ta" },
    { "label": "Telugu", "value": "te" },
    { "label": "Marathi", "value": "mr" }
  ]

export function CustomSelect({setLanguage} : CustomSelectProps) {
  return (
    <Select onValueChange={(e) => setLanguage(e)}>
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
