import Link from "next/link"
import Image from "next/image"
import { Mail, Facebook, Youtube } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header */}
      <header className="bg-zinc-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="LarPar Life Logo"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </Link>
          <div className="flex gap-4">
            <Link href="#" className="text-sky-400 hover:text-sky-300">
              <Youtube className="w-6 h-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-sky-400 hover:text-sky-300">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-sky-400 hover:text-sky-300">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-amber-500 border-t-4 border-b-4 border-red-900">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-8 py-2">
            <li>
              <Link
                href="/"
                className="text-zinc-900 hover:text-zinc-700 font-semibold px-4 py-2"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/why-stent"
                className="text-zinc-900 hover:text-zinc-700 font-semibold px-4 py-2"
              >
                WHY STENT?
              </Link>
            </li>
            <li>
              <Link
                href="/stories"
                className="text-zinc-900 hover:text-zinc-700 font-semibold px-4 py-2"
              >
                STORIES
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="text-zinc-900 hover:text-zinc-700 font-semibold px-4 py-2"
              >
                MAIN MENU
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto bg-zinc-800 p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h1 className="text-6xl font-bold text-white mb-2">LARPAR?</h1>
                <h2 className="text-6xl font-bold text-white mb-4">LIFE!</h2>
                <p className="text-amber-500 text-xl">— 799d 11h 43m 44s —</p>
              </div>
              
              <h2 className="text-2xl font-bold text-white mt-8">
                The 21st Century Guide to Laryngeal Paralysis in Dogs
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-amber-500">
                  The Lar Par Dog's Best Friend
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Lar Par dogs' best friends are the people who love them enough to make informed choices for them. 
                  The laryngeal paralysis journey isn't an easy one. There have been encouraging developments in 
                  treatment recently, but the sad fact is that there's still no cure for laryngeal paralysis in dogs. 
                  This website is devoted to providing reliable, up-to-date information so that people can make the 
                  best decisions for their beloved canine companions who suffer from laryngeal paralysis.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-amber-500">
                  Lar Par: The Deadly Little Defect
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With laryngeal paralysis, the larynx (the 'voicebox' that dogs use to bark) 
                  gradually loses its ability to function properly, making it increasingly difficult 
                  for affected dogs to breathe.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="about:blank"
                  title="Featured video about laryngeal paralysis in dogs"
                  allowFullScreen
                />
              </div>
              
              <div className="flex justify-center gap-4">
                <span className="text-gray-400">Share on:</span>
                <Link href="#" className="text-amber-500 hover:text-amber-400">
                  <Youtube className="w-5 h-5" />
                  <span className="sr-only">Share on YouTube</span>
                </Link>
                <Link href="#" className="text-amber-500 hover:text-amber-400">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Share on Facebook</span>
                </Link>
                <Link href="#" className="text-amber-500 hover:text-amber-400">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Share via Email</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}