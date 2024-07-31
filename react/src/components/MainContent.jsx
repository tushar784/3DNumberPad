import React from 'react'

const MainContent = () => {
  return (
    <main className="w-1/2 flex flex-col justify-center p-8 bg-[#FFFBF5]">
      <h1 className="text-5xl font-bold text-[#fc6a03] mb-4 text-left">
        Supercharge Your Workflow
      </h1>
      <h2 className="text-xl font-normal text-gray-400 mb-4 text-left">
        The Ultimate Number Pad for Precision and Speed
      </h2>
      <p className="text-lg mb-6 text-gray-400 text-left">
        Transform your ideas into immersive 3D models and embed them seamlessly into your website. Share with a link and let your designs shine on any device.
      </p>
      <button className="px-4 py-2 rounded-lg bg-[#fc6a03] text-white font-bold mb-8 self-start hover:bg-[#E68000] glow-button">
  <span>Explore Product</span>
</button>

    </main>
  )
}

export default MainContent
