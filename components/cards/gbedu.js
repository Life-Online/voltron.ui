import Image from "next/image";
import Link from "next/link";

function Gbedu() {
  return (
      <main>
        <section className="work-process work-process-carousel">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="carousel-container">
                    <div className="process-item">
                      <Image src="/assets/gbedu.svg" width={50} height={50} alt="Gbedu" className="img landing-companies" />
                        <h4 className="process__title">Gbedu</h4>
                        <p className="color-body"><strong>Founders:</strong>Adedayo Ayoade</p>
                        <p className="process__desc">Gbedu is a music discovery and streaming service built to dispense the rich
                          sound of Africa. They have created an experience that gives young, upcoming artists
                          the chance to get discovered and earn per stream of their music content.</p>
                        <Link href="https://gbedu.live/" className="btn btn__secondary btn__link home-cards-link">
                          <span>Explore Gbedu</span>
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


export default Gbedu;