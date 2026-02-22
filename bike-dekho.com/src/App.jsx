import FAQ from './Component/FAQ';
import Footer from './Component/Footer';
import HeroSlider from './Component/HeroSlider';
import Navbar from './Component/Navbar';
import ImageFaq from './assets/Frame.png';

function App() {
  return (
    <main>
      <div className="max-w-275 mx-auto">
        <div className="mt-17.5">
          <Navbar />
        </div>
        <div className="mt-12.5">
          <HeroSlider />
        </div>
        <div>
          <div>
            <p>Fetured Bikes In This Year</p>
            <p>Best bike collection</p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>

        <div>
          <p className='font-semibold text-[48px] text-center mb-12.5'>Frequently Asked <span className='text-[#E76F51]'>Questions</span></p>
          <div className='flex '>
            <div >
              <img className='w-[80%] p-4 iteams-center justify-center' src={ImageFaq} alt="" />
            </div>
            <div className='w-2/4'><FAQ /></div>
        </div>
        </div>
        <Footer />
        
        </div>
          
    </main>
  );
}

export default App;
