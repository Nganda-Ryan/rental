import React from 'react';
import { HomeIcon, HomeModernIcon } from '@heroicons/react/20/solid';

const PropertyTile = () => {
  return (
    <div className='flex flex-nowrap items-center bg-slate-50 rounded-sm min-w-60 maw-w-80 p-2 drop-shadow-1 m-2'>
        <div className='w-1/3 flex justify-center'>
            <HomeIcon className="size-13 fill-slate-300"/>
        </div>
        <div className='w-2/3 flex flex-col justify-start'>
            <div className='text-xs font-bold text-slate-700'>LOUE/NON LOUE</div>
            <div className='mt-1 font-bold text-slate-500'>0/1</div>
        </div>
    </div>
  )
}

export default PropertyTile