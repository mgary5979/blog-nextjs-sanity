/* eslint-disable @next/next/no-html-link-for-pages */
import Container from 'components/BlogContainer'
function Banner() {
  return (
    <div className="mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5">
      <Container>
        <div>
          <h1 className="text-7xl">ChilledCat's Daily Blog</h1>
          <h2 className="mt-5 md:mt-0">
            Welcome to{' '}
            <span className="decoration[#F7AB0A] underline decoration-4">
              Everyone's
            </span>{' '}
            favourite blog in the ChilledCat world ^.^
          </h2>
        </div>

        <p className="mt-5 max-w-sm text-gray-400 md:mt-2">
          New innovative ways to become more happier | live more freely | become
          a better version of yourself!
        </p>
      </Container>
    </div>
  )
}

export default Banner
