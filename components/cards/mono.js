
import Image from "next/image";
import Link from "next/link";

function Mono() {
  return (
      <main>
        <section className="work-process work-process-carousel">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="carousel-container">
                    <div className="process-item">
                      <Image src="/assets/mono.svg" width={50} height={50} alt="Mono" className="landing-companies" />
                        <h4 className="process__title">Mono</h4>
                        <p className="color-body"><strong>Founders:</strong> Abdulhamid Hassan and Prakhar Singh</p>
                        <p className="process__desc">Mono is an API financial technology software designed to become the go-to
                        financial data infrastructure API platform in Africa. Mono is bringing access to financial accounts
                        across Africa securely and reliably.</p>
                        <Link href="https://mono.co/" className="btn btn__secondary btn__link home-cards-link">
                          <span>Explore Mono</span>
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


export default Mono;