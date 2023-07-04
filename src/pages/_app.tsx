import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='gtm-script' strategy='lazyOnload'>
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Head>
        <title>Yousef Jalali</title>
        <meta
          name='description'
          content='Discover captivating web experiences by a skilled React front-end developer. Seamlessly blending creativity and expertise, I craft intuitive interfaces that engage and delight. Explore the power of modern web development in my portfolio.'
        />
        <meta
          name='keywords'
          content='React, React Native, Next.js, NX, Expo, MongoDB, Tailwind CSS, Front-end development, Mobile app development, Web development, JavaScript, Native mobile apps, Cross-platform development, Server-side rendering, Static site generation, User interface (UI), User experience (UX), Mobile app design, Mobile app optimization, State management, API integration, Front-end frameworks, Version control (e.g., Git), Front-end optimization, Performance tuning, Mobile app testing, Code organization and modularization, NoSQL databases, Database management, Mobile app deployment, Mobile app security, Tailwind CSS, Responsive design, Mobile-first development, CSS frameworks, Mobile app UI components, Expo CLI, Expo SDK, Mobile app theming, Mobile app navigation, Expo push notifications, Expo permissions, Mobile app authentication, MongoDB Atlas, MongoDB CRUD operations, MongoDB data modeling, Tailwind CSS utility classes, Responsive mobile app layouts, Serverless architecture, Full-stack development, API development, RESTful APIs, GraphQL, Next.js API routes, Next.js server-side rendering, Next.js static site generation, Next.js data fetching, Next.js routing, Next.js authentication, Next.js deployment, Next.js and Tailwind CSS integration, NX monorepo, Code sharing, Scalable architecture, Workspace management.'
        />
        <meta name='author' content='Yousef Jalali' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:title' content='Yousef Jalali' />
        <meta
          property='og:description'
          content='Discover captivating web experiences by a skilled React front-end developer. Seamlessly blending creativity and expertise, I craft intuitive interfaces that engage and delight. Explore the power of modern web development in my portfolio.'
        />
        <meta
          property='og:image'
          content='https://dummyimage.com/640x360/fff/aaa'
        />
        <meta property='og:url' content='https://jalaliyousef.com' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Yousef Jalali' />
        <meta
          name='twitter:description'
          content='Discover captivating web experiences by a skilled React front-end developer. Seamlessly blending creativity and expertise, I craft intuitive interfaces that engage and delight. Explore the power of modern web development in my portfolio.'
        />
        <meta
          name='twitter:image'
          content='https://dummyimage.com/640x360/fff/aaa'
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
