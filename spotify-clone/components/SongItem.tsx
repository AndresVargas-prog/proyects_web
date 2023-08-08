"use client"

import useLoadImages from '@/hooks/useLoadImages'
import Image from 'next/image'
import { Song } from '@/types'
import PlayButton from './PlayButton'

interface SongItemProps {
    data: Song,
    onClick: (id: string) => void
}

const SongItem: React.FC<SongItemProps> = ({data, onClick}) => {
    const image_path = useLoadImages(data);

    return ( 
        <div onClick={() => onClick(data.id)} className='relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3'>
            <div className='relative aspect-square w-full h-full rounded-md overflow-hidden'>
                <Image className='object-cover' src={image_path || '/images/liked.png'} fill alt="Image"/>
            </div>
            <div className='flex flex-col item-start w-full p-4 gap-y-1'>
                <p className='font-semifold truncate w-full'>
                    {data.title}
                </p>
                <p className='text-neutral-400 text-sm pb-4 w-full truncate'>
                    By {data.author}
                </p>
            </div>
            <div className='absolute bottom-24 right-5'>
                <PlayButton />
            </div>
        </div>
     );
}
 
export default SongItem;