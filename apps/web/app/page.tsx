'use client';

// import Image, { type ImageProps } from "next/image";
import { AuroraBackground } from './_aurora-background';
import { motion } from 'motion/react';

// type Props = Omit<ImageProps, "src"> & {
//   srcLight: string;
//   srcDark: string;
// };

// const ThemeImage = (props: Props) => {
//   const { srcLight, srcDark, ...rest } = props;

//   return (
//     <>
//       <Image {...rest} src={srcLight} className="imgLight" />
//       <Image {...rest} src={srcDark} className="imgDark" />
//     </>
//   );
// };

export default function Home() {
  return (
    <main className='flex h-screen w-screen flex-col items-center justify-center'>
      <AuroraBackground className='h-screen w-screen'>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='relative flex flex-col items-center justify-center gap-6 px-4'
        >
          <div className='text-center text-6xl font-bold md:text-9xl dark:text-white'>
            Content Canvas
          </div>
          <div className='py-4 text-base font-extralight md:text-4xl dark:text-neutral-200'>
            Distributing your content, your way.
          </div>
          <span className='w-full border-b border-gray-500'></span>
          <div className='py-4 text-base md:text-2xl dark:text-neutral-200'>
            Coming soon.
          </div>
          <div className='py-4 text-base text-gray-600 md:text-2xl'>
            All enquiries please contact{' '}
            <a className='hover:underline' href='mailto:lth3@bath.ac.uk'>
              lth30@bath.ac.uk
            </a>
          </div>
        </motion.div>
      </AuroraBackground>
    </main>
  );
}
