import { Feedbacks, FeedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackTypeProps {
    onFeedbackTypeChange: (type: FeedbackTypes) => void
}

export function FeedbackTypeStep(props: FeedbackTypeProps) {

    return (
        <>
            <header>
                <span className="text-xl leading-6">
                    Deixe o seu feedback
                </span>

                <CloseButton/>
            </header>

            <div className="py-8 flex gap-2 w-full">

                { Object.entries(Feedbacks).map(([key, feedback]) => { 
                    /**
                     * flex = para ser flex
                     * flex-col = para ficar um em cima do outro
                     * items-center = alinhar os items ao meio
                     * gap-2 = é um espaço entre os elementos, neste caso, espaço entre a imagem e o texto 
                     * focus:border-violet-500 = quando o elemento for focado (com o teclado), usar a bordar
                     * focus:outline-none = qnd o elemento for focado não usar a borda branca padrão do navegador 
                     */
                    return ( 
                        <button
                            key={key}
                            className="bg-zinc-800 w-full md:w-24 py-4 rounded-2xl border-2 flex flex-col items-center gap-2 border-transparent hover:border-violet-500 transition-colors focus:border-violet-500 focus:outline-none" 
                            onClick={() => props.onFeedbackTypeChange(key as FeedbackTypes)}
                        >
                            <img src={feedback.icon.path} alt={feedback.icon.alt} />
                            <span>{ feedback.title }</span>
                        </button>
                    )
                }) }

            </div>
        </> 
    )

}