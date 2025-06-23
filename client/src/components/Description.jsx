import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'

const Description = () => {
  return (
    <motion.div  initial={{opacity:0.2 , y:100}}
    transistion={{duration:1}}
    whileInView={{opacity:1,y:0}} viewport={{once: true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
            Create AI Images
        </h1>
        <p className='text-grey-500 mb-8'>Turn your imaginations into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row itwm-center'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-97 rounded-lg'/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                <p className='text-grey-600 mb-4'>Easily bring your ideas to life with just a few words.
Our AI-powered tool transforms your text into stunning, high-quality images in seconds.
No design skills needed—just type, generate, and watch your imagination become reality</p>
<p className='text-grey-600 mb-4'>
**Whether you're an artist, student, or creator, inspiration starts here.**
Explore endless possibilities by turning thoughts into visuals effortlessly.
Let AI be your creative companion—simple, fast, and powerful.
</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description