import {Footer} from "../component/Footer";
import {Link} from "react-router-dom";
import logo from '../assets/img/UniversalAcademy.png'
import bio from '../assets/img/newsletter.png'
import kopSav from '../assets/img/iStock-626288564 (1).jpg'
import arch from '../assets/img/CTA-BIM-1-1000x600.jpg'
import smm from '../assets/img/How-does-the-SMM-panel-work.jpg'
import max from '../assets/img/3Ds-Max-Extrude.jpg'
import graph from '../assets/img/Banner-5-Rising-Graphic-Designers-and-What-Sets-Them-Apart-1-1280x720.jpg'
import web from '../assets/img/web-programming-languages-_1_.jpg'

export const Course = () => {
    return (
        <>
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="m-0"><img src={logo} alt="not"/>Universal</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to={"http://localhost:5173/"} className="nav-item nav-link">Bosh sahifa</Link>
                            <Link to="http://localhost:5173/course" className="nav-item active nav-link">Kurslar</Link>
                            <Link to="http://localhost:5173/contact" className="nav-item nav-link">Biz bilan
                                bog'lanish</Link>
                        </div>
                    </div>
                </nav>

                <div className="container-xxl py-5 bg-primary hero-header mb-5">
                    <div className="container my-5 py-5 px-lg-5">
                        <div className="row g-5 py-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 style={{fontSize: "50px"}} className="text-white mb-4 animated zoomIn">Zamonaviy
                                    kasblarni biz bilan o'rganing</h1>
                                <p className="text-white pb-3 animated zoomIn">Bizning o'quv markazimiz sizga bir nechta
                                    zamonaviy kasblarni tanlsha imkoniyatini beradi</p>
                                <Link to="http://localhost:5173/contact"
                                      className="btn btn-outline-light justify-content-end py-sm-3 px-sm-5 rounded-pill animated slideInRight">Biz
                                    bilan bog'lanish</Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-start">
                                <img style={{width: "880px"}} className="img-fluid " src={bio}
                                     alt="not"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container px-lg-5">
                    <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                         data-wow-delay="0.1s">
                        <h6 className="position-relative d-inline text-primary ps-4">Bizning kurslar</h6>
                        <h2 className="mt-2">Eng ommabop kurslar</h2>
                    </div>
                    <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                    </div>

                    <Link to={"http://localhost:5173/learnPc"} className="row g-4 portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                            <div className="position-relative rounded overflow-hidden">
                                <img className="img-fluid w-100" style={{width: "383px", height: "283px"}}
                                     src={kopSav} alt=""/>
                                <div className="portfolio-overlay">
                                    <div className="mt-auto">
                                        <Link to={""} style={{fontSize: "40px"}}
                                              className="h5 d-block text-white mt-1 mb-0"
                                        >Komyuter savodxonligi</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to={"http://localhost:5173/webProgramming"}
                              className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                            <div className="position-relative rounded overflow-hidden">
                                <img className="img-fluid w-100" style={{width: "383px", height: "283px"}}
                                     src={web}
                                     alt=""/>
                                <div className="portfolio-overlay">
                                    <div className="mt-auto">
                                        <Link to={"http://localhost:5173/webProgramming"} style={{fontSize: "40px"}}
                                              className="h5 d-block text-white mt-1 mb-0"
                                        >Web dasturlash</Link>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to={"http://localhost:5173/archDesign"}
                              className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                            <div className="position-relative rounded overflow-hidden">
                                <img className="img-fluid w-100" style={{width: "383px", height: "283px"}}
                                     src={arch} alt=""/>
                                <div className="portfolio-overlay">
                                    <div className="mt-auto">
                                        <Link to={""} style={{fontSize: "40px"}}
                                              className="h5 d-block text-white mt-1 mb-0"
                                        >Arxitektura va dizayn</Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={"http://localhost:5173/smm&mobilograph"}
                              className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                            <div className="position-relative rounded overflow-hidden">
                                <img className="img-fluid w-100" style={{width: "383px", height: "283px"}}
                                     src={smm} alt=""/>
                                <div className="portfolio-overlay">
                                    <div className="mt-auto">
                                        <Link to={""} style={{fontSize: "40px"}}
                                              className="h5 d-block text-white mt-1 mb-0"
                                        >SMM & Mobilografia</Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={"http://localhost:5173/3dmac&autocad"}
                              className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                            <div className="position-relative rounded overflow-hidden">
                                <img className="img-fluid w-100" style={{width: "383px", height: "283px"}}
                                     src={max} alt=""/>
                                <div className="portfolio-overlay">
                                    <div className="mt-auto">
                                        <Link to={""} style={{fontSize: "40px"}}
                                              className="h5 d-block text-white mt-1 mb-0"
                                        >3DsMAX & AUTOCAD</Link>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to={"http://localhost:5173/graphDesign"}
                              className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                            <div className="position-relative rounded overflow-hidden">
                                <img className="img-fluid w-100" style={{width: "383px", height: "283px"}}
                                     src={graph}
                                     alt=""/>
                                <div className="portfolio-overlay">
                                    <div className="mt-auto">
                                        <Link to={""} style={{fontSize: "40px"}}
                                              className="h5 d-block text-white mt-1 mb-0"
                                        >Grafik dizayn</Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Link>
                </div>
            </div>

            <Footer/>
        </>
    )
}