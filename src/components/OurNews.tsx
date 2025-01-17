import Image from 'next/image'
import Link from 'next/link'

export default function OurNews() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-red-600 text-xl mb-2">OUR NEWS</h5>
          <h2 className="text-4xl font-bold">LATEST BLOG POSTS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image src="/assets/images/our_news_1.png" alt="" width={350} height={250} className="w-full" />
              <div className="absolute top-4 left-4 bg-red-600 text-white p-2 rounded-lg">
                <h4 className="text-2xl font-bold">07</h4>
                <span>Feb</span>
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-4">QUIS AUTEM VEA EUM IURE REPREHENDERIT</h5>
              <p className="text-gray-600 mb-4">Duis aute irure dolor in reprehenderi in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <Link href="#" className="text-red-600 hover:text-red-700 transition duration-300">
                Read more
              </Link>
            </div>
          </div>
          {/* Add more news items here */}
        </div>
      </div>
    </section>
  )
}

