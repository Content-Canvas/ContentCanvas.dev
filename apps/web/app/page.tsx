import Link from "next/link";
import Image from "next/image";
import PageBackground from "./_page-bg";

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
    <main className="flex flex-col items-center justify-center">
      <PageBackground className="relative flex h-full w-screen flex-col items-center justify-center gap-6 px-4">
        <div className="flex h-screen flex-col items-center justify-center gap-6 px-4">
          <div className="text-center text-6xl font-bold md:text-9xl dark:text-white">
            Content Canvas
          </div>
          <div className="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
            Distributing your content, your way.
          </div>
          <span className="w-full border-b border-gray-500"></span>
          <div className="py-4 text-base md:text-2xl dark:text-neutral-200">
            Coming soon.
          </div>
          <div className="py-4 text-base text-gray-600 md:text-2xl">
            All enquiries please contact{" "}
            <a className="hover:underline" href="mailto:lth3@bath.ac.uk">
              lth30@bath.ac.uk
            </a>
          </div>
        </div>

        <footer className="flex h-12 w-full items-center justify-center">
          <Link href="https://github.com/Content-Canvas/ContentCanvas.dev">
            <Image
              src="./github-mark.svg"
              alt="GitHub"
              width={32}
              height={32}
            />
          </Link>
        </footer>
      </PageBackground>
    </main>
  );
}
