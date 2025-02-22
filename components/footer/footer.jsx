import React from 'react'
import{Linkedin,Instagram} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#3A4E78] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-2 mb-8">
          <img src="/logo1.png" alt="JustLiv Logo" className="w-28" />
        </div>
        <p className="mb-4 flex justify-center items-center space-x-2">
          <Instagram height={20} width={20} className="text-white"/>
          <span className="text-white text-[16px] font-medium font-lato">
            <a
              href="https://www.instagram.com/justlivatx?igsh=MWo3czd1MXh3cQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with us on Instagram ♡
            </a>
          </span>
        </p>
        <div className="flex flex-col gap-4 items-center pt-16 space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[16px] font-lato">
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy policy
              </a>
            </p>
            <p className="text-[16px] font-lato">
              <a href="/accessibility-statement" target="_blank" rel="noopener noreferrer">
                Accessibility Statement
              </a>
            </p>
          </div>
          <p className="flex justify-center items-center">
            <a
              href="https://www.linkedin.com/company/justliv-app-for-busy-parents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin height={20} width={20} className="text-white"/>
            </a>
          </p>
          <p className="text-white text-[16px] font-normal font-lato">© 2024 by JustLiv</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer