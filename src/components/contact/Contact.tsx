export default function Contact() {
  return (
    <section
      id='contact'
      className='section px-6 h-screen pt-16 md:pt-0 flex flex-col justify-between items-center'
    >
      <div className='flex flex-col h-full w-full prose md:justify-center items-center text-center mx-auto'>
        <h1>Get In Touch</h1>
        <p>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a className='btn'>Say Hello</a>
      </div>
    </section>
  )
}
