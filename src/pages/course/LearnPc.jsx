import {Footer} from "../../component/Footer";
import {Link} from "react-router-dom";
import logo from '/src/assets/img/UniversalAcademy.png'
import bio from '/src/assets/img/basic-computer-training-banner-removebg-preview.png'
import bio2 from '/src/assets/img/webdev-removebg-preview.png'
import vid from '/src/assets/img/Untitled__4_-removebg-preview.png'
import vid2 from '/src/assets/img/Untitled__3_-removebg-preview.png'
import laptop from '/src/assets/img/pngtree-2-5d-electronic-device-laptop-vector-element-png-image_4391586-removebg-preview.png'


export const LearnPc = () => {
    return (
        <>
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="m-0"><img src={logo} alt="not"/>Universal<span
                            className="fs-5"/>
                        </h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to={"/"} className="nav-item nav-link">Bosh sahifa</Link>
                            <Link to="/course" className="nav-item nav-link">Kurslar</Link>
                            <Link to="/contact" className="nav-item nav-link">Biz bilan
                                bo'glanish</Link>
                        </div>
                    </div>
                </nav>

                <div className="container-xxl py-5 bg-primary hero-header mb-5">
                    <div className="container my-5 py-5 px-lg-5">
                        <div className="row g-5 py-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 style={{fontSize: "45px"}} className="text-white mb-4 animated zoomIn">KOMPYUTER
                                    SAVODXONLIGI</h1>
                                <p className="text-white pb-3 animated zoomIn">Kopyuterdan ilk tushunchlarni biz bilan
                                    o'rganing</p>
                                <Link to="/contact"
                                      className="btn btn-outline-light justify-content-end py-sm-3 px-sm-5 rounded-pill animated slideInRight">Biz
                                    bilan bog'lanish</Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-start">
                                <img className="img-fluid" style={{width: "450px", marginTop: "-20px"}}
                                     src={bio}
                                     alt="not"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container-xxl py-5">
                    <div className="container px-lg-5">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp">
                                <div className="section-title position-relative mb-4 pb-2">
                                    <h1 className="mt-2" style={{fontSize: "40px"}}>KURSIMIZ KIMLARGA<br/> TO’G’RI
                                        KELADI</h1>
                                </div>
                                <p className="mb-4 fs-4">Kopmyuter sohasi bo’yicha hech qanday bilimga ega bo’lmagan har
                                    qanday inson kompyuter saboqlarini o’rganishi mumkin</p>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <h6 className="mb-3"><i className="fa fa-check text-primary me-2"/>Qulay muhit
                                        </h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h6 className="mb-3"><i className="fa fa-check text-primary me-2"/>Professional
                                            xodimlar</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img className="img-fluid wow zoomIn"
                                     src={bio2} alt={"not"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container px-lg-5">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp">
                                <div className="section-title position-relative mb-4 pb-2">
                                    <h1 className="mt-2" style={{fontSize: "40px"}}>NIMALARNI
                                        O’RGANASIZ</h1>
                                </div>
                                <div className="row my-5">
                                    <div className="col-lg-4 col-md-4 wow zoomIn">
                                        <div
                                            className="d-flex flex-column justify-content-center text-center ">
                                            <p className={"fs-3"}>Microsoft Word</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 wow zoomIn">
                                        <div
                                            className="d-flex flex-column justify-content-center text-center rounded">
                                            <p className={"fs-3"}>Microsoft Excel</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 wow zoomIn">
                                        <div
                                            className="d-flex flex-column justify-content-center text-center rounded">
                                            <p className={"fs-3"}>Microsoft Pover Point</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container px-lg-5">
                        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                        >
                            <h1 className="mt-2">TA’LIM
                                JARAYONI</h1>
                        </div>
                        <div className="row g-4">
                            <div className=" col-lg-4 col-md-6 wow zoomIn">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "150px", height: "150px", marginLeft: "50px"}}
                                         src={vid} alt=""/>
                                    <h5 className="mb-3">Video darslarni ko’rib borish</h5>
                                    <p>Har kuni dars videolari yozib olinadi. Siz dars videolarini mustaqil
                                        ko'rishingiz mumkin</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow zoomIn">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "150px", height: "150px", marginLeft: "50px"}}
                                         src={vid2} alt=""/>
                                    <h5 className="mb-3">Amaliy
                                        mashqlar</h5>
                                    <p>Har bir mavzuga oid amaliy mashqlar beriladi va bu mashqlarni talaba mustaqil
                                        bajaradi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="contact spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6  text-center">
                                <div className="contact__widget">
                                    <i className="bi bi-clock-fill text-primary fs-3"/>
                                    <h4>Davomiyligi</h4>
                                    <p>2 oy</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <i className="bi bi-house-fill fs-3 text-primary"/>
                                    <h4>Oflayn</h4>
                                    <p>Sizga qulay vaqatda</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <i className="bi bi-lightning-charge-fill fs-3 text-primary"/>
                                    <h4>Intensiv</h4>
                                    <p>Amaliy mashg’ulotlar</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <img style={{width: '140px', marginTop: '-20px'}}
                                         src={laptop}
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i
                    className="bi bi-arrow-up"/></a>
            </div>

            <Footer/>
        </>
    )
}
