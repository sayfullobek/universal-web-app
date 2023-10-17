import {Footer} from "../../component/Footer";
import {Link} from "react-router-dom";

export const WebProgramming = () => {
    return (
        <>
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="m-0"><img src="src/assets/img/UniversalAcademy.png" alt="not"/>Universal<span
                            className="fs-5"/>
                        </h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to={"http://localhost:5173/"} className="nav-item nav-link">Bosh sahifa</Link>
                            <Link to="http://localhost:5173/course" className="nav-item nav-link">Kurslar</Link>
                            <Link to="http://localhost:5173/contact" className="nav-item nav-link">Biz bilan
                                bo'glanish</Link>
                        </div>
                    </div>
                </nav>

                <div className="container-xxl py-5 bg-primary hero-header mb-5">
                    <div className="container my-5 py-5 px-lg-5">
                        <div className="row g-5 py-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 style={{fontSize: "50px"}}
                                    className="text-white mb-4 animated zoomIn">WEB <br/> DASTURLASH</h1>
                                <Link to="http://localhost:5173/contact"
                                      className="btn btn-outline-light justify-content-end py-sm-3 px-sm-5 rounded-pill animated slideInRight">Biz
                                    bilan bog'lanish</Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-start">
                                <img className="img-fluid" style={{width: "650px", marginTop: "-50px"}}
                                     src="src/assets/img/360_F_278374738_ypRn0utOVnebuhmpSrDiwkzFsdqEm0aa-removebg-preview.png  "
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
                                    {/*<h6 className="position-relative text-primary ps-4">Biz haqimizda</h6>*/}
                                    <h1 className="mt-2" style={{fontSize: "50px"}}>KURSIMIZ KIMLARGA<br/> TO’G’RI
                                        KELADI</h1>
                                </div>
                                <p className="mb-4 fs-4">Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan
                                    har qanday inson dasturlash saboqlarini o’rganishi mumkin</p>
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
                                <img className="img-fluid wow"
                                     src="src/assets/img/webdev-removebg-preview.png" alt={"not"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container px-lg-5">
                        <div className="row ">
                            <div className="col-lg-6 wow fadeInUp">
                                <div className="section-title position-relative mb-4 pb-2">
                                    <h1 className="mt-2" style={{fontSize: "50px"}}>NIMALARNI
                                        O’RGANASIZ</h1>
                                </div>
                                <div className="row my-5">
                                    <div className="col-lg-4 col-md-4 wow zoomIn">
                                        <div
                                            className="d-flex flex-column justify-content-center text-center ">
                                            <li className={"fs-3 text-primary"}>Java</li>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 wow zoomIn">
                                        <div
                                            className="d-flex flex-column justify-content-center text-center rounded">
                                            <li className={"fs-3 text-primary"}>Python</li>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 wow zoomIn">
                                        <div
                                            className="d-flex flex-column justify-content-center text-center rounded">
                                            <li className={"fs-3 text-primary"}>Node JS</li>
                                        </div>
                                    </div>

                                </div>
                                <div className="row my-5">
                                    <div className="col-lg-3 col-md-4 wow zoomIn">
                                        <div
                                            className="d-flex flex-column justify-content-center text-center ">
                                            <li className={"fs-3 text-primary"}>HTML</li>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 wow zoomIn">
                                        <div
                                            className="d-flex flex-column justify-content-center text-center rounded">
                                            <li className={"fs-3 text-primary"}>CSS</li>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 wow zoomIn">
                                        <div
                                            className="d-flex flex-column justify-content-center text-center rounded">
                                            <li className={"fs-3 text-primary"}>JS</li>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 wow zoomIn">
                                        <div
                                            className="d-flex flex-column justify-content-center text-center rounded">
                                            <li className={"fs-3 text-primary"}>React</li>
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
                            <div className="col-lg-4 col-md-4 wow zoomIn">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "100px", height: "100px", marginLeft: "75px"}}
                                         src="src/assets/img/Untitled__4_-removebg-preview.png" alt=""/>
                                    <h5 className="mb-3">Video darslarni ko’rib borish</h5>
                                    <p>Har kuni dars videolari yozib olinadi. Siz dars videolarini mustaqil
                                        ko'rishingiz
                                        va bilimingizni mustahkamlasingiz mumkin.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow zoomIn">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "100px", height: "100px", marginLeft: "75px"}}
                                         src="src/assets/img/Untitled__3_-removebg-preview.png" alt=""/>
                                    <h5 className="mb-3">Amaliy
                                        mashqlar</h5>
                                    <p>Har bir mavzuga oid amaliy mashqlar beriladi va bu mashqlarni talaba mustaqil
                                        bajaradi</p>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow zoomIn">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "100px", height: "100px", marginLeft: "75px"}}
                                         src="src/assets/img/Untitled__1_-removebg-preview.png" alt=""/>
                                    <h5 className="mb-3">Loyihalarda ishlash</h5>
                                    <p>Uzingizning yunalishingizga mos loyihalarda ishlash imkoniyati</p>

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
                                    <p>11 oy</p>
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
                                         src="src/assets/img/pngtree-2-5d-electronic-device-laptop-vector-element-png-image_4391586-removebg-preview.png"
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