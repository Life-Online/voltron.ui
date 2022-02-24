import Image from "next/image";
import Link from "next/link";


function Brass() {
  return (
      <main>
         <section className="work-process work-process-carousel">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="carousel-container">
                    <div className="process-item">
                      <Image src="/assets/brass.svg" width={50} height={50} alt="Brass" className="Image landing-companies" />
                        <h4 className="process__title">Brass</h4>
                        <p className="color-body">Founders: Sola Akindolu</p>
                        <p className="process__desc">Brass is a digital bank that provides small and medium businesses with a
                        suite of products and tools to help them grow. Brass provides bank-backed, fully insured current
                        account services to local companies in Nigeria.</p>
                        <Link href="https://www.trybrass.com/" className="btn btn__secondary btn__link home-cards-link">
                          <span>Explore Brass</span>
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


export default Brass;