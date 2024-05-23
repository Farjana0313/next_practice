'use client'

import { useSearchParams } from 'next/navigation'

export default function SortProducts() {
    const searchParams = useSearchParams()

    function updateSorting(sortOrder) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', sortOrder)
        window.history.pushState(null, '', `?${params.toString()}`)
    }

    return (
        <div className='flex gap-5'>
            <button onClick={() => updateSorting('asc')} className="bg-green-500 px-3 py-2 rounded text-gray-50">Sort Ascending</button>
            <button onClick={() => updateSorting('desc')} className="bg-red-500 px-3 py-2 rounded text-gray-50">Sort Descending</button>
        </div>
    )
}