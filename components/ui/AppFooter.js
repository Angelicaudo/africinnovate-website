import Image from 'next/image'
import AfricInnovateLogo from '@/public/svg-icons/Africinnovate.svg'
import FaceBook from '@/public/svg-icons/facebook.svg'
import Instagram from '@/public/svg-icons/instagram.svg'
import LinkedIn from '@/public/svg-icons/linkedin.svg'
import Twitter from '@/public/svg-icons/twitter.svg'
import Contact from '@/public/svg-icons/call-us.svg'
import Location from '@/public/svg-icons/location.svg'
import Mail from '@/public/svg-icons/email.svg'

const AppFooter = () => {
  return (
    <footer className=" z-20 max-md:flex-col ml-[6.9rem] max-md:ml-[0.9rem] max-md:pl-[0px]   mt-9  text-[#d9d9e8] py-8 justify-center items-center  flex">
      {/* Column 1 */}
      <div className="w-full   flex items-start justify-start  flex-col sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
        <div className="flex items-center justify-center">
          <div className="w-[45.41px] h-[23.49px] relative">
            <Image
              src={AfricInnovateLogo}
              alt="AfricInnovate-Logo"
              className="w-full h-full object-cover"
            />
          </div>{' '}
          <div className="[#d9d9e8] text-[26.10px] font-medium font-['Raleway'] leading-normal">
            Africinnovate
          </div>
        </div>
        <ul>
          <li>
            <div className="[#d9d9e8]  mt-5 text-base font-medium font-['DM Sans'] leading-normal">
              Follow us on
            </div>
          </li>
          <li>
            <div className=" flex gap-2 mt-5" id="social-icons">
              <div className="w-6 h-6 relative">
                <Image
                  src={FaceBook}
                  alt="facebook-logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-6 h-6 relative">
                <Image
                  src={Instagram}
                  alt="Instagram"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-6 h-6 relative">
                <Image
                  src={LinkedIn}
                  alt="LinkedIn-Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-6 h-6 relative">
                <Image
                  src={Twitter}
                  alt="twitter-logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>

      {/* Column 2 */}
      <div className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
        <div className="flex mt-5 ">
          <div className="[#d9d9e8]   text-lg font-medium font-['DM Sans'] leading-normal">
            Contact Us
          </div>
        </div>
        <ul>
          <li>
            <div className="flex mt-3 ">
              <div className="w-6 h-6 relative">
                <Image
                  src={Mail}
                  alt="mail-com"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="[#d9d9e8] text-base ml-2  font-medium font-['DM Sans'] leading-normal">
                Info@africinnovate.com
              </div>
            </div>
          </li>
          <li>
            <div className="flex mt-3 ">
              <div className="w-6 h-6 relative">
                <Image
                  src={Contact}
                  alt="contact-mail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="[#d9d9e8] text-base ml-2  font-medium font-['DM Sans'] leading-normal">
                +234 815 886 8727
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center    ml-1 mt-3 ">
              <div className="w-6 h-6 relative justify-center items-center">
                <Image
                  src={Location}
                  alt="Description of the image"
                  className=" h-full object-cover"
                />
              </div>
              <div className="w-[180px]text-[#d9d9e8] text-base font-medium font-['DM Sans'] leading-normal  mt-1 ml-2">
                16, Uqua Road, Eket
                <br />
                Akwa Ibom State
              </div>{' '}
            </div>
          </li>

          {/* Add more links as needed */}
        </ul>
      </div>

      {/* Column 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
        <div className="flex items-center justify-start">
          <div className="w-[200px]text-[#d9d9e8] text-lg font-medium font-['DM Sans'] leading-normal ">
            Let's build something awesome together!
          </div>
        </div>
        <div className="w-[158px] h-12 justify-start items-start inline-flex">
          <div className="px-6 py-3 bg-slate-300 mt-5 rounded-3xl justify-start items-center gap-2 flex">
            <div className="text-blue-950 text-base font-medium font-['DM Sans'] leading-normal">
              Start a project
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
