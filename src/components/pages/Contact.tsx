import { SyntheticEvent, useState } from 'react'

export default function Contact() {
  const [msg, setMsg] = useState('')

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      name: { value: string }
      email: { value: string }
      message: { value: string }
    }

    const data = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    }
    console.log(data)

    const response = await fetch('/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    console.log({ response })
  }
  return (
    <>
      <div className='prose mx-auto flex max-w-none flex-col items-center text-center'>
        <h1 className='mb-1'>Get In Touch</h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>

        <form
          className='prose-none w-full space-y-10 mt-6'
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className='flex flex-col md:flex-row gap-10'>
            <div className='relative z-0 text-left flex-1'>
              <input
                required
                type='text'
                id='name'
                className='peer block w-full appearance-none border-b bg-transparent px-0 py-4 text-sm text-neutral autofill:!bg-transparent focus:border-primary focus:bg-transparent focus:opacity-100 focus:outline-none focus:ring-0'
                placeholder=' '
              />
              <label
                htmlFor='name'
                className='absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform opacity-80 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:opacity-100'
              >
                Your Name
              </label>
            </div>

            <div className='relative z-0 text-left flex-1'>
              <input
                required
                type='email'
                id='email'
                className='peer block w-full appearance-none border-b bg-transparent px-0 py-4 text-sm text-neutral autofill:!bg-transparent focus:border-primary focus:bg-transparent focus:opacity-100 focus:outline-none focus:ring-0'
                placeholder=' '
              />
              <label
                htmlFor='email'
                className='absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform opacity-80 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:opacity-100'
              >
                Your Email
              </label>
            </div>
          </div>

          <div className='relative z-0 text-left'>
            <textarea
              required
              id='message'
              className='peer resize-none block w-full appearance-none border-b bg-transparent px-0 py-4 text-sm text-neutral autofill:!bg-transparent focus:border-primary focus:bg-transparent focus:opacity-100 focus:outline-none focus:ring-0'
              placeholder=' '
              rows={3}
              onBlur={(e) => setMsg(e.target.value)}
            ></textarea>
            <label
              htmlFor='message'
              className='absolute opacity-80 top-3 z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:opacity-100'
            >
              Message
            </label>
            {msg.length <= 0 && (
              <label
                htmlFor='message'
                className='absolute opacity-100 top-0 z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:opacity-0 bg-base-100'
              >
                <span className='opacity-80'>
                  Hi, I think we need a website for our Company X. How soon can
                  you hop on to discuss this?
                </span>
              </label>
            )}
          </div>

          {/* <div className='w-full text-left [&>label]:block'>
            <label>Message</label>
            <textarea
              className='textarea'
              placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?'
            ></textarea>
          </div> */}

          <button type='submit' className='btn'>
            Send
          </button>
        </form>
      </div>

      <footer className='byline absolute bottom-0 left-0 h-fit w-full p-12 text-center text-neutral'>
        Designed & Built by <strong>Yousef Jalali</strong>
      </footer>
    </>
  )
}
