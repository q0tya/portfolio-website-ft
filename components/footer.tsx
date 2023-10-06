import React from 'react'

export default function Footer() {
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='mb-2 block text-xs'>
                &copy; 2023 q0tya. All rights not reserved.
            </small>
            <p className='text-xs'><span className='font-semibold'>About this website:</span> built with React & Next.js (App router & Server Actions), TypeScript, TailwindCSS, Framer Motion, React email & Resend, Vercel hosting.</p>
        </footer>
    )
}
