import Image from 'next/image';


const BioData = () => {
  return (
    <section id="About"className="bg-gray-300 dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div className="grid grid-cols-2 gap-4 mt-8 " data-taos-offset="400">
         
      
         <Image 
            className="w-full rounded-lg shadow-2xl"
            src="/images/Myself_2.jpg"
            alt="office content 1"
            width={500}
            height={500}
          />
          <Image 
            className="mt-4 w-full lg:mt-10 rounded-lg shadow-2xl"
            src="/images/Myself_3.jpg"
            alt="office content 2"
            width={500}
            height={500}
          />
         
        </div>
        <div className="font-serif text-gray-900 sm:text-lg dark:text-gray-200">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Me</h2>
          <p className="mb-4">Hii! my name is <b>I Ketut Sugiantara</b>, I am a student at <b> SMK TI Bali Global Badung </b> who is diligent, disciplined, and responsible in handling matters related to technology. I have also created several types of web-related projects.</p>
        </div>
      </div>
    </section>
  );
}

export default BioData;