// NEXT
import Image from 'next/image';
// STYLES
import '@/styles/contact-page.css';

interface IContactPage {
  children: React.ReactNode;
}

export default function ContactPageLayout({children}: IContactPage) {
  return (
    <div className="container min-h-[90dvh] w-full flex justify-center items-stretch py-5">
      <div className="flex-1 hidden justify-center items-stretch backdrop-banner sm:flex">
        <Image
          src="/images/banner-md.jpg"
          alt="painting brush against a white wall background"
          style={{ width: "auto", height: "100%" }}
          width={0}
          height={0}
          sizes="100vw"
          objectFit="cover"
          objectPosition='center'
          quality={100}
          priority
        />
      </div>
      <main className="flex-1 self-stretch grid place-content-center z-10">
        {children}
      </main>
    </div>
  );
}