import Image from "next/image";
import Link from "next/link";

function PiggyVest() {
    return (
        <main>
          <section className="work-process work-process-carousel">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="carousel-container">
                    <div className="process-item">
                      <Image src="/assets/piggyvest.svg" width={50} height={50} alt="PiggyVest" className="Image landing-companies" />
                      <h4 className="process__title">PiggyVest</h4>
                      <p className="color-body"><strong>Founders:</strong> Ayo Akinola, Joshua Chibueze, Nonso Eagle, Odunayo
                        Eweniyi and Somto Ifezue</p>
                      <p className="process__desc">PiggyVest is the leading online savings & investment platform in Nigeria,
                      helping individuals manage their finances effectively. The platform enables users to save small
                      amounts of money frequently with minimal effort.</p>
                      <Link href="https://www.piggyvest.com/"  className="btn btn__secondary btn__link home-cards-link">
                        <span>Explore PiggyVest</span>
                      </Link>                
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
    );
  }
  
  
  export default PiggyVest;