import Image from 'next/image';
import { FaChalkboardTeacher, FaGifts } from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs';
import { GiChestnutLeaf } from 'react-icons/gi';
import Link from 'next/link';
import Accordion from './Components/Accordion/Accordion';

export default function Home() {
  return (
    <main>
      <div className='w-full flex flex-row pb-7'>
        <div className='flex flex-col gap-y-5 m-auto w-[400px] justify-around'>
          <h1 className='text-[#414141] font-bold text-4xl'>
            Teach with us at Allgreenivy
          </h1>
          <p className='text-[#717171] text-sm'>
            Become an instructor with Allgreenivy and change the agricultural
            system positively
          </p>
          <button className='bg-[#121212] text-white rounded-md px-4 py-2 w-32 text-xs'>
            Get Started
          </button>
        </div>
        <div>
          <img
            src='/image1.png'
            alt='Home Image'
            className='h-[500px] m-auto w-[500px]'
          />
        </div>
      </div>
      <h2 className='text-[#717171] font-semibold text-xl text-center my-10'>
        Countless Benefits of Becoming Part of Our Teams
      </h2>
      <div className='flex flex-row justify-around w-full mt-5 pb-10'>
        <div className='flex flex-col gap-y-4 w-1/5'>
          <FaChalkboardTeacher className='text-4xl' />
          <p className='text-[#414141] font-semibold text-sm'>Teach your way</p>
          <p className='text-[#414141] font-light text-xs'>
            Teach and sell your agricultural ebooks and host courses on
            Allgreenivy. You'll have control over your content, unlimited
            storage and students.
          </p>
        </div>
        <div className='flex flex-col gap-y-4 w-1/5'>
          <FaGifts className='text-4xl' />
          <p className='text-[#414141] font-semibold text-sm'>Get Rewarded</p>
          <p className='text-[#414141] font-light text-xs'>
            Expand your professional network, enhance your skills. Earn income
            through each paid enrollment and benefit from your hard work and
            dedication.
          </p>
        </div>
        <div className='flex flex-col gap-y-4 w-1/5'>
          <BsPeople className='text-4xl' />
          <p className='text-[#414141] font-semibold text-sm'>
            Inspire Learners
          </p>
          <p className='text-[#414141] font-light text-xs'>
            Share your expertise and assist learners in discovering their
            passions, acquiring new abilities, and furthering their agri
            professional growth
          </p>
        </div>
        <div className='flex flex-col gap-y-4 w-1/5'>
          <GiChestnutLeaf className='text-4xl' />
          <p className='text-[#414141] font-semibold text-sm'>
            Impact the Agro Industry
          </p>
          <p className='text-[#414141] font-light text-xs'>
            Help grow the economy by sharing your knowledge in agriculture and
            assisting people in the agro industry to pursue financial
            opportunities.
          </p>
        </div>
      </div>
      <h2 className='text-[#717171] font-semibold text-xl text-center my-10'>
        How to Begin
      </h2>
      <div className='flex flex-row w-[80%] m-auto justify-between py-7'>
        <div className=''>
          <img
            src='/plan.png'
            alt='Plan your content'
            className='w-[300px] h-[270px]'
          />
        </div>
        <div className='flex flex-col w-[300px] m-auto gap-y-3'>
          <h3 className='text-[#414141] font-semibold tex-md'>
            Plan your content
          </h3>
          <p className='text-[#717171] text-xs'>
            Begin with your passion and expertise in the agri-business sector,
            then select a viable subject using our Marketplace Insights tool.
            Your approach to teaching is entirely up to you.
          </p>
          <Link
            href=''
            className='inline-flex items-center text-[#226C2D] text-xs font-bold underline'
          >
            Get started
          </Link>
        </div>
      </div>
      <div className='flex flex-row w-[80%] m-auto justify-between py-7'>
        <div className='flex flex-col w-[300px] m-auto gap-y-3'>
          <h3 className='text-[#414141] font-semibold tex-md'>
            Record your video
          </h3>
          <p className='text-[#717171] text-xs'>
            Record your course using simple equipment like a smartphone or DSLR
            camera, and enhance audio quality with a quality microphone, If you
            don’t like being on camera, screen recording is an option. You
            simply record the process! it is suggested to have a minimum of two
            hours of video content for a paid course.
          </p>
          <Link
            href=''
            className='inline-flex items-center text-[#226C2D] text-xs font-bold underline'
          >
            Get started
          </Link>
        </div>
        <div>
          <img
            src='/record.png'
            alt='Record your video'
            className='w-[300px] h-[270px]'
          />
        </div>
      </div>
      <div className='flex flex-row w-[80%] m-auto justify-between py-7'>
        <div>
          <img
            src='/create.png'
            alt='Create e-book'
            className='w-[300px] h-[270px]'
          />
        </div>
        <div className='flex flex-col w-[300px] m-auto gap-y-3'>
          <h3 className='text-[#414141] font-semibold tex-md'>Create Ebooks</h3>
          <p className='text-[#717171] text-xs'>
            Start creating your ebook with basic tools, such as a text editor or
            word processing software. Organize your content and incorporate
            images to enhance the reading experience. Aim for at least 20 pages
            of well-structured and engaging material for a paid ebook.
          </p>
          <Link
            href=''
            className='inline-flex items-center text-[#226C2D] text-xs font-bold underline'
          >
            Get started
          </Link>
        </div>
      </div>
      <div className='flex flex-row w-[80%] m-auto justify-between py-7'>
        <div className='flex flex-col w-[300px] m-auto gap-y-3'>
          <h3 className='text-[#414141] font-semibold tex-md'>
            Launch your course or ebook
          </h3>
          <p className='text-[#717171] text-xs'>
            Gather initial ratings and reviews by promoting your ebook or course
            through social media and professional networks. Your ebook will be
            listed in our marketplace, allowing you to earn revenue through paid
            enrollments.
          </p>
          <Link
            href=''
            className='inline-flex items-center text-[#226C2D] text-xs font-bold underline'
          >
            Get started
          </Link>
        </div>
        <div>
          <img
            src='/launch.png'
            alt='Launch your course or ebook'
            className='w-[300px] h-[270px]'
          />
        </div>
      </div>
      <dir className='flex flex-row w-full m-auto justify-between py-7 bg-gradient-to-r from-[#468f47] my-9'>
        <div className='flex flex-col w-[300px] m-auto gap-y-3'>
          <h3 className='text-[white] font-semibold tex-md'>How We Help</h3>
          <p className='text-[white] text-xs'>
            At Allgreenivy, we believe in empowering our instructors to achieve
            their full potential and make a positive impact on the world of
            agriculture. That's why we provide ample resources and user-friendly
            tools to help you create your first course or e-book with ease. Our
            instructor dashboard and curriculum pages are designed to keep you
            organized, so you can focus on what you do best - teaching.
          </p>
        </div>
        <div>
          <img
            src='/last.jpeg'
            alt='How we help'
            className='w-[400px] h-[300px]'
          />
        </div>
      </dir>
      <div className='w-[80%] mx-auto'>
        <h3 className='text-[#414141] font-semibold text-xl text-center mb-5'>
          Join a Supportive Community and Achieve More Together
        </h3>
        <p className='text-center text-xs text-[#717171] mb-5'>
          Our Instructor Support Team is here to answer your questions and
          review your test video and preview your ebook, while our Teaching
          Center gives you plenty of resources to help you through the process.
          Plus, get the support of experienced instructors in our online
          community.
        </p>
        <div className='flex flex-row justify-between py-5'>
          <div>
            <img src='/comm1.svg' alt='Community' className='w-[120px] mb-3' />
            <p className='text-[#414141] font-semibold text-sm text-center'>
              Bernerd Stone
            </p>
            <p className='text-[#717171] font-normal text-xs text-center'>
              Ceo of Agrofarm
            </p>
          </div>
          <div>
            <img src='/comm2.svg' alt='Community' className='w-[120px] mb-3' />
            <p className='text-[#414141] font-semibold text-sm text-center'>
              Bernerd Stone
            </p>
            <p className='text-[#717171] font-normal text-xs text-center'>
              Ceo of Agrofarm
            </p>
          </div>
          <div>
            <img src='/comm3.svg' alt='Community' className='w-[120px] mb-3' />
            <p className='text-[#414141] font-semibold text-sm text-center'>
              Bernerd Stone
            </p>
            <p className='text-[#717171] font-normal text-xs text-center'>
              Ceo of Agrofarm
            </p>
          </div>
          <div>
            <img src='/comm4.svg' alt='Community' className='w-[120px] mb-3' />
            <p className='text-[#414141] font-semibold text-sm text-center'>
              Bernerd Stone
            </p>
            <p className='text-[#717171] font-normal text-xs text-center'>
              Ceo of Agrofarm
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-[80%] m-auto justify-between py-7 mt-10'>
        <div>
          <img
            src='/lastteach.png'
            alt='Teach on Allgreenivy'
            className='w-[300px] h-[270px]'
          />
        </div>
        <div className='flex flex-col w-[300px] m-auto gap-y-3'>
          <h3 className='text-[#414141] font-semibold tex-md'>
            Teach on Allgreenivy
          </h3>
          <p className='text-[#717171] text-xs'>
            Instructors from around the world teach millions of students on
            Allgreenivy. We provide the tools and skills to equip and allow you
            teach what you love.
          </p>
          <button className='bg-[#121212] text-white rounded-md px-4 py-2 w-32 text-xs'>
            Teach with Us
          </button>
        </div>
      </div>
      <div className='bg-[#F5F5F5]'>
        <Accordion />
      </div>
    </main>
  );
}
