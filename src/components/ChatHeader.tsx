import { FC } from 'react'
import Image from 'next/image'

const ChatHeader: FC = () => {
  return (
    <div className='w-full flex gap-3 justify-start items-center text-zinc-800'>
      <div className='flex flex-col items-start text-sm'>
        <div className='flex gap-1.5 items-center'>
          <p className='w-2 h-2 rounded-full bg-green-500' />
          <Image
            src="/icon.png"
            alt='liwa college'
            width={20}
            height={20}
          />
          <p className='font-medium'>Liwa College Bot</p>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
