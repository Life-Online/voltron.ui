import Image from "next/image";
import Link from "next/link";


function Spleet() {
  return (
      <main>
        <section className="work-process work-process-carousel">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="carousel-container">
                    <div className="process-item">
                      <Image src="/assets/spleet.svg" width={50} height={50} alt="Spleet" className="Image landing-companies" />
                        <h4 className="process__title">Spleet</h4>
                        <p className="color-body"><strong>Founders:</strong> Dolapo Adebayo & Akintola Adesanmi</p>
                        <p className="process__desc">Spleet is a Nigerian-based prop-tech startup that offers its users a
                        subscription-based, living solution. Spleet provides access to Shared/entire living spaces with
                        flexible payment options (Daily, Monthly & Quarterly Subscriptions).</p>
                        <Link href="https://spleet.africa/" className="btn btn__secondary btn__link home-cards-link">
                        <span>Explore Spleet</span>
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


export default Spleet;