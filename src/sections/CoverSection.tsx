import profile_picture from '../assets/profile.jpg';

const CoverSection = () => {
  return (
  <section id="cover" className="w-full h-screen bg-cover-image bg-cover bg-no-repeat flex justify-center items-center">
      <div className="flex flex-col justify-center items-center px-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <img src={profile_picture} alt="piyawutcha.github.io" className="relative w-40 md:w-52 rounded-full border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-3 text-white">
          <div className="text-4xl md:text-6xl font-light text-shadow-default">
            Piyawut Chantasrisawat
          </div>
          <div className="text-4xl md:text-6xl font-light mt-2 text-shadow-default">
            (Benz)
          </div>
          <div className="text-2xl md:text-4xl font-extralight mt-2 text-shadow-default">
            Web Developer based in Sydney, Australia
          </div>
        </div>
      </div>
    </section>
  )
}
export default CoverSection