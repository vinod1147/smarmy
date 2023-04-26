import Head from 'next/head';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <Head>
        {/* <title>AKSHAYKUMAR UPADHYAY - SCIENCEMADNESS ARMY</title> */}
        <title>AkshayKumar Upadhyay - ScienceMadness</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <div className='block-hoe'>
          <div className='w-[100%] flex fontfamily py-12 indexc'>
            <div className=" w-[40%] flex justify-center items-center alig-middle sections images">
              <Image className='profile rounded-xl shadow-10xl' src="/sample6.png" alt="Profile Photo" width="330" height="400" />
            </div>
            <div className=" w-[60%] sections contents">
              <div className='container py-[2.4%] px-[10%]'>
                <div className='mb-2 NType82'>
                  Hello Students, Myself
                </div>
                <div className='text-[2.5rem] mb-2 bolt'>
                  AkshayKumar Upadhyay
                </div>
                <div className='mb-2 NType82'>
                  Hello students, how are you? I Akshay Kumar Upadhyay your science educator at Unacademy have more than 7 years of experience in teaching both offline and online. I have completed my master&apos;s in physics and completed my education at B.K Birla college and C.H.M College then started teaching offline and founded Akshay classes later in 2020 I joined Unacademy which is India&apos;s Largest Learning Platform here I teach both in Plus/Iconic and Free classes. You can use my code AKLIVE10 to get 10% on any Plus/Iconic subscription.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
