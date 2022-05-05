import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";

interface ScreenshotButtonProps { 
    onScreenshotTook: (screenshot: string | null) => void,
    screenshot: string | null
}

export function ScreenshotButton({onScreenshotTook, screenshot}: ScreenshotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleScreenshot() 
    { 
        setIsTakingScreenshot(true)

        let screenshot = await html2canvas( document.querySelector('html')! )
        let base64 = screenshot.toDataURL('image/png')

        onScreenshotTook(base64)

        setIsTakingScreenshot(false)
    } 

    if (screenshot) {

        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-2xl border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 100
                }}
                onClick={() => onScreenshotTook(null)}
            >
                {/* <img src={screenshot} alt="" /> */}
                <Trash weight="fill"/>
                
            </button>
        )

    }
    
    return (
 
        <button
            className="p-2 bg-zinc-800 hover:bg-zinc-700 focus:ring-violet-400 focus:ring-2 focus:ring-offset-zinc-900 focus:ring-offset-2 focus:outline-none transition-colors rounded-2xl border-transparent"
            onClick={handleScreenshot}
        >
            {
                isTakingScreenshot ?
                <Loading/>
                :  
                <Camera className="w-6 h-6 text-zinc-400"/>
            }
        </button>  

    )

}