import {Link} from "react-router-dom";
import {Footer} from "../../component/Footer";
import logo from '/src/assets/img/UniversalAcademy.png'
import bio from '/src/assets/img/social-media-marketing-concept_263670-101-removebg-preview.png'
import rasm1
    from '/src/assets/img/young-photographer-team-use-camera-lighting-flash-tripod-studio-taking-photo_1150-48748-removebg-preview.png'
import vid from '/src/assets/img/Untitled__4_-removebg-preview.png'
import vid2 from '/src/assets/img/Untitled__1_-removebg-preview.png'
import rasm2 from '/src/assets/img/images-removebg-preview.png'


export const Smm = () => {
    return (
        <>
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
                                    <h1 style={{fontSize: "40px"}}
                                        className="text-white mb-4 animated zoomIn">SMM <br/> MOBILOGRAFIA</h1>
                                    <Link to="/contact"
                                          className="btn btn-outline-light justify-content-end py-sm-3 px-sm-5 rounded-pill animated slideInRight">Biz
                                        bilan bog'lanish</Link>
                                </div>
                                <div className="col-lg-6 text-center text-lg-start">
                                    <img className="" style={{width: "340px", marginTop: "-30px", marginLeft: "0px"}}
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
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="section-title position-relative mb-4 pb-2">
                                        {/*<h6 className="position-relative text-primary ps-4">Biz haqimizda</h6>*/}
                                        <h1 className="mt-2" style={{fontSize: "40px"}}>KURSIMIZ KIMLARGA<br/> TO’G’RI
                                            KELADI</h1>
                                    </div>
                                    <p className="mb-4 fs-5">Social Media Marketing va Mobilografia sohasiga qiziquvhchi
                                        yoshlar uchun talim</p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <h6 className="mb-3"><i className="fa fa-check text-primary me-2"/>Qulay
                                                muhit
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
                                         src={rasm1}
                                         alt={"not"}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className="row g-5">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="section-title position-relative mb-4 pb-2">
                                        <h1 className="mt-2" style={{fontSize: "40px"}}>NIMALARNI
                                            O’RGANASIZ</h1>
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-lg-6 col-md-4 wow zoomIn">
                                            <p className={"fs-3 col-12 text-primary"}>Video montaj</p>
                                        </div>
                                        <div className="col-lg-4 col-md-4 wow zoomIn">
                                            <p className={"fs-3 text-primary"}>Telegram</p>
                                        </div>
                                        <div className="col-lg-6 col-md-4 wow zoomIn">
                                            <p className={"fs-3 col-12 text-primary"}>Instagram</p>
                                        </div>
                                        <div className="col-lg-4 col-md-4 wow zoomIn">
                                            <p className={"fs-3 text-primary"}>SMM</p>
                                        </div>
                                        <div className="row my-1">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                                 data-wow-delay="0.1s">
                                <h1 className="mt-2">TA’LIM
                                    JARAYONI</h1>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                    <div
                                        className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <img style={{width: "150px", height: "150px", marginLeft: "50px"}}
                                             src={vid} alt=""/>
                                        <h5 className="mb-3">Amaliy
                                            mashqlar</h5>
                                        <p>Har bir mavzuga oid amaliy mashqlar beriladi va bu mashqlarni talaba mustaqil
                                            bajaradi</p>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                    <div
                                        className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <img style={{width: "150px", height: "150px", marginLeft: "50px"}}
                                             src={vid2} alt=""/>
                                        <h5 className="mb-3">Yangiliklar</h5>
                                        <p>Har kuni yangi narsalarni kashf eting <br/> Jamoamiz bilan birga ishlash</p>

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
                                        <img style={{width: '100px', marginTop: '-20px'}}
                                             src={rasm2}
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer/>
            </>
        </>
    )
}
