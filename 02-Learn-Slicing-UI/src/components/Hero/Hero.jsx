import Header from "../Header/Header";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="heroBg container">
        <div className="row">
          <div className="badge pb-2">
            <span>NUMBER ONE CREATIVE DIGITAL AGENCY</span>
          </div>

          <div className="titleHero pb-2">
            <span>Smart Choices</span>
            <br />
            <span>For Your Business Growth</span>
          </div>

          <div className="subtitleHero pb-2">
            <span>We're a team of experienced designers, developers,</span>
            <br />
            <span>
              and marketers, passionate about delivering exceptional digital
              solutions.
            </span>
          </div>

          <div className=" lg:flex lg:justify-center mb-5">
            <a
              href="#"
              className="btnContact text-sm font-semibold leading-6 text-gray-900"
            >
              Contact Us
            </a>
          </div>

          <div className="cardHero">
            <span>Benefit of improving your business</span>

            <div className="flex content-center">
              <div className="columns-3">
                <h1>Expanding the Market</h1>
              </div>

              <div className="columns-3">
                <h1>Expanding the Market</h1>
              </div>

              <div className="columns-3">
                <h1>Expanding the Market</h1>
              </div>

              <div className="columns-3">
                <h1>Expanding the Market</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
