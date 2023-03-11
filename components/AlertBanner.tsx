/* eslint-disable @next/next/no-html-link-for-pages */
import Container from 'components/BlogContainer'
function Banner() {
    return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <Container>
     <div>
     <h1 className="text-7xl">ChilledCat's Daily Blog</h1>
     <h2 className="mt-5 md:mt-0">
        Welcome to{" "}
        <span className="underline decoration-4 decoration[#F7AB0A]">
            Everyone's
        </span>{" "}
        favourite blog in the ChilledCat world ^.^
     </h2>
     </div>

    <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
     New innovative ways to become more happier | live more freely | become a better version of yourself!
    </p>

    </Container>
    </div>
    )
}

export default Banner