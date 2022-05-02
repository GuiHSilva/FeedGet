import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'

export function Widget() {

    return (
        <Popover className='absolute right-5 bottom-5'>    

            <Popover.Panel>Menu para feedback</Popover.Panel>

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