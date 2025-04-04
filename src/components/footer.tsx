import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='px-4 md:px-8 lg:px-16 bg-gray-100 text-sm mt-24 py-12'>
            {/* TOP */}
            <div className='flex flex-col md:flex-row justify-between gap-12 ' >
                {/* LEFT */}
                <div className='w-full md:w-1/2 lg:w-1/4 flex gap-4 flex-col '>
                    <Link href='/'>
                        <div className='text-2xl tracking-wide'>CATCOM</div>
                    </Link>
                    <p>
                        V101 Billionair Bey, Palm Jumeirah, Dubai, UAE
                    </p>
                    <span className='font-semibold'>shyamg63v8@gmail.com</span>
                    <span className='font-semibold'>+91 6376426677</span>
                    <div className='flex gap-6'>
                        <Image src='/facebook.png' width={16} height={16} alt='social media icon' />
                        <Image src='/instagram.png' width={16} height={16} alt='social media icon' />
                        <Image src='/youtube.png' width={16} height={16} alt='social media icon' />
                        <Image src='/pinterest.png' width={16} height={16} alt='social media icon' />
                        <Image src='/x.png' width={16} height={16} alt='social media icon' />
                    </div>
                </div>

                {/* CENTER */}
                <div className='w-1/2 hidden lg:flex justify-between '>
                    <div className='flex flex-col justify-between gap-4'>
                        <h1 className='font-medium text-lg'>COMPANY</h1>
                        <div className='flex flex-col gap-4'>
                            <Link href='/'>About Us</Link>
                            <Link href='/'>Careers</Link>
                            <Link href='/'>Affiliates</Link>
                            <Link href='/'>Blog</Link>
                            <Link href='/'>Contact Us</Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between gap-4'>
                        <h1 className='font-medium text-lg'>SHOP</h1>
                        <div className='flex flex-col gap-4'>
                            <Link href='/'>New Arrivals</Link>
                            <Link href='/'>Accessories</Link>
                            <Link href='/'>Men</Link>
                            <Link href='/'>Women</Link>
                            <Link href='/'>All Products</Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between gap-4'>
                        <h1 className='font-medium text-lg'>HELP</h1>
                        <div className='flex flex-col gap-4'>
                            <Link href='/'>Customer Service</Link>
                            <Link href='/'>My Account</Link>
                            <Link href='/'>Find a Store</Link>
                            <Link href='/'>Legal & Privacy</Link>
                            <Link href='/'>Gift Card</Link>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='w-full md:w-1/2 lg:w-1/4 flex gap-4 flex-col'>
                    <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
                    <p>
                        Be the first to get the latest news about trends, promotions and much more!
                    </p>
                    <div className='flex'>
                        <input
                            type="text"
                            placeholder='Email address'
                            className='p-4 w-3/4'
                        />
                        <button className='w-1/4 bg-batpink text-white'>JOIN</button>
                    </div>
                    <span className='font-semibold'>Secure Payments</span>
                    <div className='flex justify-between'>
                        <Image src='/discover.png' alt='' width={40} height={20} />
                        <Image src='/skrill.png' alt='' width={40} height={20} />
                        <Image src='/paypal.png' alt='' width={40} height={20} />
                        <Image src='/mastercard.png' alt='' width={40} height={20} />
                        <Image src='/visa.png' alt='' width={40} height={20} />
                    </div>
                </div>

            </div>
            {/* BOTTOM */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
                <div>© 2025 CATCOM SHOP</div>
                <div className='flex flex-col gap-8 md:flex-row'>
                    <div>
                        <span className='text-gray-500 mr-4'>Langauge</span>
                        <span className='font-medium'>United States | English</span>
                    </div>
                    <div>
                        <span className='text-gray-500 mr-4'>Currency</span>
                        <span className='font-medium'>$ USD</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
