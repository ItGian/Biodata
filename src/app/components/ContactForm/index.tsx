'use client'
import { Icon } from '@iconify/react'
import React, { FormEvent, useState } from 'react'
import Link from 'next/link'

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = (e:FormEvent) => {
    e.preventDefault()
    setIsModalOpen(!isModalOpen)
  }


  return (
    <>
      <Link
        href="#"
        onClick={toggleModal}
        className="block py-6 pl-6 pr-8 dark:hover:text-black dark:hover:bg-gray-400 text-gray-900 rounded focus:bg-slate-800 dark:focus:bg-slate-50 lg:bg-gray-200 hover:lg:bg-gray-900 hover:text-white dark:bg-slate-900 lg:text-gray-700 lg:p-0 dark:text-white focus:text-white dark:focus:text-gray-600 focus:ring-2 focus:ring-white"
        >
        <Icon icon="iconamoon:profile" className="inline mr-2" />
        Contact
      </Link>

      {isModalOpen && (
        <div
          id="crypto-modal"
          aria-hidden="false"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={toggleModal}
        >
          <div className="min-h-screen px-4 text-center">
            <div className="fixed inset-0 dark:bg-black bg-gray-800 bg-opacity-50" />
            
            <div 
              className="inline-block w-full max-w-md p-4 my-8 text-left align-middle transition-all transform"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative bg-gray-300 rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-700 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Get To Know Me :D
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={toggleModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <ul className="my-4 space-y-3">
                    <li>
                      <a
                        href="https://www.instagram.com/its.gian07/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      >
                        <Icon icon="skill-icons:instagram" className="h-4" />
                        <span className="flex-1 ms-3 whitespace-nowrap">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/qr/MGRREY4465I5N1"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      >
                        <Icon icon="logos:whatsapp-icon" className="h-5" />
                        <span className="flex-1 ms-3 whitespace-nowrap">Whatsapp</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/ItGian"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      >
                        <Icon icon="bytesize:github" className="h-5" />
                        <span className="flex-1 ms-3 whitespace-nowrap">GitHub</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactForm