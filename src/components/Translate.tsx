"use client"
import React, {useEffect, useState} from 'react'
import TranslateCard from './TranslateCard'
import { Button } from './ui/button'
import {HiTranslate} from "react-icons/hi"
import { useToast } from './ui/use-toast'
import axios from 'axios'

export default function Translate() {
    const [text, setText] = useState("")
    const [translatedText, setTranslatedText] = useState("")
    const [choosenLanguage, setChoosenLanguage] = useState("")
    const [translateLanguage, setTranslateLanguage] = useState("")
    const { toast } = useToast()
    
    const handleTranslate = async () => {
        console.log(choosenLanguage, translateLanguage);
        //errors for missing language
        if(!translateLanguage){
            toast({
                title: "Missing Language",
            })
            return
        }
        if(!choosenLanguage){
            toast({
                title: "Missing Language",
            })
            return
        }

        //error for same language
        if(choosenLanguage === translateLanguage){
            toast({
                title: "Cannot translate to same language.",
            })
            return
        }

        //error for missing text in input
        //error for same language
        if(!text){
            toast({
                title: "Missing text to translate.",
            })
            return
        }
        console.log( process.env.TRANSLATE_KEY, process.env.TRANSLATE_URL);
        
        //fetch options
        const options = {
            method: 'GET',
            mode: "cors",
            url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
            params: {
              langpair: choosenLanguage + "|" + translateLanguage,
              q: text,
              mt: '1',
              onlyprivate: '0',
              de: 'a@b.c'
            },
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': process.env.TRANSLATE_KEY as string,
                'X-RapidAPI-Host': process.env.TRANSLATE_URL as string,
            },
          };

        //fetch translation
        const res = await axios.request(options)
        //update translated input
        setTranslatedText(res.data.responseData.translatedText)

    }

    


  return (
    <section
    className='w-full min-h-[80vh] grid place-content-center'
    >
        <h1
        className='text-2xl mb-2 w-full'
        >
            Translate
        </h1>
        <div
        className='flex flex-col sm:flex-row gap-4 w-full max-w-[1000px]'
        >
            <TranslateCard setLanguage={setChoosenLanguage} setText={setText} text={text}/>
            <TranslateCard setLanguage={setTranslateLanguage} text={translatedText} />
        </div>
        <Button
        className='mt-4 flex gap-2'
        onClick={() => handleTranslate()}
        >
            <HiTranslate className='text-lg' /> Translate
        </Button>
    </section>
  )
}