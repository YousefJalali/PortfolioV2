export default function Home() {
  return (
    // 4rem header height

    <div className='prose prose-sm w-full max-w-none md:prose-base prose-h1:mb-2 prose-p:m-0 md:prose-h1:text-7xl'>
      <span className='slide-up byline block'>Hi, my name is</span>

      <h1 className='slide-up'>Yousef Jalali.</h1>

      <h1 className='slide-up opacity-60'>Frontend Developer, </h1>

      <p className='slide-up max-w-3xl py-2 md:py-4'>
        With a genuine passion for crafting outstanding digital experiences,
        whether it&apos;s developing responsive layouts or optimizing
        performance, I am dedicated to delivering top-notch front end solutions
        that leave a lasting impact.
      </p>

      {/* <div >
        <a href='#about' className='btn mt-4'>
          About me
        </a>
      </div> */}
    </div>
  )
}
