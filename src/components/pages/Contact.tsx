import { SyntheticEvent, useState } from 'react'

export default function Contact() {
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

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

    setLoading(true)
    setError(false)
    setSuccess(false)
    const response = await fetch('/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    setLoading(false)

    if (response.status === 250) {
      setSuccess(true)
    } else {
      setError(true)
    }
  }
  return (
    <div className='prose mx-auto flex max-w-none flex-col items-center text-center'>
      {!success && (
        <>
          <h1 className='mb-1'>Get In Touch</h1>
          <p>
            Got something on your mind? Question, proposal, or just a friendly
            hello? Shoot!
          </p>
        </>
      )}

      {success ? (
        <div className='mt-6 flex items-center flex-col gap-4'>
          <svg
            stroke='currentColor'
            fill='none'
            strokeWidth='2'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
            height='6rem'
            width='6rem'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path
              className='stroke-neutral'
              d='M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6'
            ></path>
            <path className='stroke-neutral' d='M3 7l9 6l9 -6'></path>
            <path className='stroke-neutral' d='M15 19l2 2l4 -4'></path>
          </svg>

          <span className='inline-block max-w-sm'>
            Thank you for reaching out! I appreciate your message, and I’ll get
            back to you as soon as I can.
          </span>
        </div>
      ) : (
        <form className='prose-none w-full' onSubmit={(e) => handleSubmit(e)}>
          <fieldset disabled={loading} className='space-y-16 mt-6'>
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
                  className='cursor-text absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform opacity-80 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:opacity-100'
                >
                  Name
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
                  className='cursor-text absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform opacity-80 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:opacity-100'
                >
                  Email
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
                minLength={30}
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
                  className='cursor-text absolute opacity-100 top-0 z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:opacity-0 bg-base-100'
                >
                  <span className='opacity-80 select-none'>
                    Hi, I think we need a website for our Company. How soon can
                    you hop on to discuss this?
                  </span>
                </label>
              )}

              {error && (
                <span className='block mt-6 text-sm text-[#F87272]'>
                  Oops! Something went wrong, and we couldn’t deliver your
                  email.
                </span>
              )}
            </div>

            <button type='submit' className='btn' disabled={loading}>
              Shoot{loading ? 'ing...' : ''}
            </button>
          </fieldset>
        </form>
      )}
    </div>
  )
}
