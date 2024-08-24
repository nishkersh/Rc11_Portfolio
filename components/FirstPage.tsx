import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Image from "next/image";
import Link from "next/link";
import { SparklesCore} from './ui/Sparkles'
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from './MagicButton';
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle,} from './ui/TextRevealCard'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"


const FirstPage = () => {
  return (
    <div >
      <div className="h-[100vh] relative w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div>

      </div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.0}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div >
      
<div className="flex flex-col items-center justify-center min-h-screen space-y-10 mt-10 px-4">
  <div className="flex flex-col md:flex-row md:justify-center items-center space-y-6 md:space-y-0 md:space-x-10 w-full max-w-6xl">
    <CardContainer className="w-full md:w-[60%] lg:w-[60%] inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          Rc11
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/profile_Pic.jpeg"
            height="1000"
            width="1000"
            className="h-60 w-80 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Profile-pic"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} as={Link} href="https://github.com/nishkersh" target="__blank" className="flex items-center px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Github
            <Image src="/github.png" height="20" width="20" className="ml-2 h-5 w-5 object-cover rounded-xl group-hover/card:shadow-xl" alt="github_icon" />
          </CardItem>
          <CardItem translateZ={20} as="div" className="inline-block">
  <MagicButton
    title="Resume"
    icon={<FaLocationArrow />}
    position="right"
    otherClasses="text-xs font-bold"
    href="#about"
  />
</CardItem>
        </div>
      </CardBody>
    </CardContainer>

    <div className="w-full md:w-1/2 text-center md:text-left">
      <TextRevealCard revealText="I am Reek Chatterjee" text="A tech enthusiast">
        <TextRevealCardTitle>Hi There</TextRevealCardTitle>
        <TextRevealCardDescription className="mt-4">
          A software engineer who architects the digital future, blending code, cloud, and chains with a touch of artificial intelligence.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  </div>
</div>







      

      
    </div>

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      

    </div>
  )
}

export default FirstPage