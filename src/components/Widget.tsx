import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {

    return (
        <Popover className='absolute right-3 bottom-3 md:right-6 md:bottom-6 flex flex-col items-end'>    

            <Popover.Panel>
                <WidgetForm/>
            </Popover.Panel>

            <Popover.Button className='bg-violet-500 rounded rounded-t-2xl rounded-bl-2xl px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6'/>

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 h-6'>
                    <span className="pr-2"></span>
                    Dar feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}