import { ArrowLeft } from "phosphor-react"
import { FormEvent, useState } from "react"
import { Feedbacks, FeedbackTypes } from ".."
import { api } from "../../../libs/api"
import { CloseButton } from "../../CloseButton"
import { Loading } from "../../Loading"
import { ScreenshotButton } from "../../ScreenshotButton"
 
interface FeedbackContentStep {
    feedbackType: FeedbackTypes
    onFeedbackTypeChange: (type: FeedbackTypes | null) => void,
    onContentSent: () => void
} 
export function FeedbackContentStep({onFeedbackTypeChange, feedbackType, onContentSent}: FeedbackContentStep) {

    const feedbackTypeInfo = Feedbacks[feedbackType] 
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState<string>('')
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    async function handleFormSubmit(event: FormEvent) { 

        event.preventDefault()

        if ( isSendingFeedback ) return
        
        setIsSendingFeedback(true)
        
        await api.post('/feedback', {
            type: feedbackType,
            message: comment,
            screenshot: screenshot  
        })
        
        setIsSendingFeedback(false)
        onContentSent()

    }        

    return (
        <>
            <header>

                <button 
                    className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100 transition-colors"
                    onClick={() => onFeedbackTypeChange(null)}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.icon.path} alt={feedbackTypeInfo.icon.alt} className='w-6 h-6'/>
                    { feedbackTypeInfo.title }
                </span>

                <CloseButton/>
            </header>

            <form className="my-4 w-full" onSubmit={handleFormSubmit}>

                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 bg-transparent rounded-2xl focus:border-violet-500 focus:ring-violet-500 focus:outline-none resize-none scrollbar scrollbar-thumb-violet-600 scrollbar-track-transparent scrollbar-thin"
                    placeholder={feedbackTypeInfo.description}
                    onChange={(event => setComment(event.target.value))}
                ></textarea>

                <footer className="flex gap-2 mt-2">

                    <ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot}/>

                    <button
                        type="submit"
                        className="p-2 bg-violet-500 hover:bg-violet-600 focus:ring-violet-400 focus:ring-2 focus:ring-offset-zinc-900 focus:ring-offset-2 focus:outline-none transition-colors rounded-2xl border-transparent flex-1 flex justify-center items-center disabled:bg-violet-400"
                        disabled={comment.length == 0 || isSendingFeedback}
                    >
                        {
                            isSendingFeedback ?
                            <Loading/>
                            :  
                            'Enviar feedback'
                        }
                    </button>

                </footer>

            </form>
        </> 
    )


}