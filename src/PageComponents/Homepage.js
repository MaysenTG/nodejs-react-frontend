import { react, Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: props.settings,
    };
  }

  render() {
    const data = this.state.settings;
    if (data === null) {
      return (
        <main className="page landing-page">
          <section
            style={{ marginTop: "-2rem" }}
            className="portfolio-block block-intro"
          >
            <div className="avatar" style={{ backgroundImage: `` }}></div>
            <div className="container">
              <div className="about-me">
                <div
                  className="ph-item"
                  style={{ border: "none", width: "100%" }}
                >
                  <div>
                    <div className="ph-row">
                      <div
                        className="ph-col-10 big"
                        style={{ margin: "0 auto" }}
                      ></div>
                      <div
                        className="ph-col-4 big"
                        style={{ margin: "10px auto" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="portfolio-block skills">
            <div className="container">
              <div style={{ marginTop: "-3rem" }} className="heading">
                <h2>Skills</h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0">
                      <i className="icon ion-ios-star-outline"></i>
                    </div>
                    <div className="ph-item">
                      <div className="ph-col-12">
                        <div className="ph-row">
                          <div className="ph-col-12 big"></div>
                          <div className="ph-col-8 empty"></div>
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                        </div>
                      </div>
                      <div>
                        <div className="ph-row">
                          <div className="ph-col-2 empty"></div>
                          <div className="ph-col-8"></div>
                          <div className="ph-col-2 empty"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0">
                      <i className="icon ion-ios-lightbulb-outline"></i>
                    </div>
                    <div className="ph-item">
                      <div className="ph-col-12">
                        <div className="ph-row">
                          <div className="ph-col-12 big"></div>
                          <div className="ph-col-8 empty"></div>
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                        </div>
                      </div>
                      <div>
                        <div className="ph-row">
                          <div className="ph-col-2 empty"></div>
                          <div className="ph-col-8"></div>
                          <div className="ph-col-2 empty"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0">
                      <i className="icon ion-ios-gear-outline"></i>
                    </div>
                    <div className="ph-item">
                      <div className="ph-col-12">
                        <div className="ph-row">
                          <div className="ph-col-12 big"></div>
                          <div className="ph-col-8 empty"></div>
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                          <div className="ph-col-12"></div>
                        </div>
                      </div>
                      <div>
                        <div className="ph-row">
                          <div className="ph-col-2 empty"></div>
                          <div className="ph-col-8"></div>
                          <div className="ph-col-2 empty"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    }
    if (data) {
      return (
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <img
                  style={{ marginTop: -2 + "rem", borderRadius: 100 + "%" }}
                  alt="self portrait of Maysen Greenwood, owner/developer of this website"
                  src="https://ik.imagekit.io/maysentg/tr:w-175,h-175/self-portrait.jpg"
                />
                <p className="lead mt-2">{data.button_subtext}</p>
                <p>
                  <a
                    href="/my-projects"
                    style={{ border: "#0f9fff", backgroundColor: "#0f9fff" }}
                    className="btn btn-primary my-2"
                  >
                    {data.button_label}
                  </a>
                </p>
              </div>
            </div>
          </section>
          <section
            className="portfolio-block skills"
            style={{ marginTop: -3 + "rem" }}
          >
            <div className="container">
              <div className="heading">
                <h2 className="text-center mb-5">Skills</h2>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div
                      className="card-header bg-transparent border-0"
                      style={{ textAlign: "center" }}
                    >
                      <img
                        src="https://ik.imagekit.io/maysentg/star-icon.webp"
                        height="75"
                        alt="star icon"
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-center">
                        {data.skill_1_title}
                      </h4>
                      <p
                        className="card-text text-center text-muted"
                        style={{ fontSize: 0.85 + "rem" }}
                      >
                        {data.skill_1_description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div
                      className="card-header bg-transparent border-0"
                      style={{ textAlign: "center" }}
                    >
                      <img
                        src="https://ik.imagekit.io/maysentg/light-icon.webp"
                        height="75"
                        alt="star icon"
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-center">
                        {data.skill_2_title}
                      </h4>
                      <p
                        className="card-text text-center text-muted"
                        style={{ fontSize: 0.85 + "rem" }}
                      >
                        {data.skill_2_description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div
                      className="card-header bg-transparent border-0"
                      style={{ textAlign: "center" }}
                    >
                      <img
                        src="https://ik.imagekit.io/maysentg/settings-icon.webp"
                        height="75"
                        alt="star icon"
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-center">
                        {data.skill_3_title}
                      </h4>
                      <p
                        className="card-text text-center text-muted"
                        style={{ fontSize: 0.85 + "rem" }}
                      >
                        {data.skill_3_description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    }
  }
}

export default Homepage;
