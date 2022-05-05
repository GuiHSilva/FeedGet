import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

export const Feedbacks = { 

    BUG: { 
        title: 'Bug',
        description: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo',
        icon: { 
            path: bugImage,
            alt: 'Imagem de um inseto'
        }
    },
    IDEIA: {
        title: 'Ideia',
        description: 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!',
        icon: { 
            path: ideaImage,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        description: 'Queremos te ouvir. O que você gostaria de nos dizer?',
        icon: { 
            path: thoughtImage,
            alt: 'Balão de pensamento'
        }
    }

}

export type FeedbackTypes = keyof typeof Feedbacks

export function WidgetForm() {

    const [ feedbackType, setFeedbackType ] = useState<FeedbackTypes | null>(null)
    const [ feedbackSent, setFeedbackSent ] = useState(false)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-3xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            { feedbackSent ? (
                <FeedbackSuccessStep/>
            ) : ( 
                <>
                    { ! feedbackType ?
                        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType}/>        
                    :
                        <FeedbackContentStep 
                            feedbackType={feedbackType} onFeedbackTypeChange={setFeedbackType} 
                            onContentSent={() => setFeedbackSent(true)}
                        />
                    }
                </>
            )}

            <footer className="text-xs text-zinc-400">
                Feito por <a className="underline underline-offset-2" href="https://github.com/GuiHSilva">Guilherme</a>, na NLW ❤️
            </footer>

        </div>
    )
    
}