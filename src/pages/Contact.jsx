import {Link} from "react-router-dom";

export const Contact = () => {
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
                            <Link to="" className="nav-item nav-link">Biz haqimizda</Link>
                            <Link to="http://localhost:5173/contact" className="nav-item nav-link active  ">Biz bilan
                                bog'lanish</Link>
                        </div>
                    </div>
                </nav>

                <div className="container-xxl py-5 bg-primary hero-header mb-5">
                    <div className="container my-5 py-5 px-lg-5">
                        <div className="row g-5 py-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h3 style={{fontSize: "50px"}} className="text-white mb-4 animated zoomIn">Biz bilan
                                    aloqa </h3>
                                <p className="text-white pb-3 animated zoomIn">Bizni ijtimoiy tarmoqlarda kuzatib boring
                                    Biz sizga eng yaxshizini tavsia etamiz Muammoga duch kelsangiz qo'llab quvvatlash
                                    jamoamizga murojat qiling </p>
                                <Link to="http://localhost:5173/course"
                                      className="btn btn-outline-light justify-content-end py-sm-3 px-sm-5 rounded-pill animated slideInRight">Kurslar</Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-start">
                                <img style={{width: "350px", marginLeft: "20px", marginTop: "-60px"}}
                                     className="img-fluid " src="src/assets/img/contactUs.png" alt="not"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container px-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                                 data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">Biz bilan bog'lanish</h6>
                                <h2 className="mt-2">Har qanday so'rov uchun murojaat qiling</h2>
                            </div>
                            <div className="wow fadeInUp" data-wow-delay="0.3s">
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
                                <i className="bi bi-telephone-fill text-primary fs-3"/>
                                <h4>Telefon</h4>
                                <p>+998 99 076 32 46</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <i className="bi bi-geo-alt-fill fs-3 text-primary"/>
                                <h4>Manzil</h4>
                                <p>Qashqadaryo viloyati Kitob tumani <br/>Katta yo'l kuchasi</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <i className="bi bi-clock-fill fs-3 text-primary"/>
                                <h4>Ish vaqti</h4>
                                <p>8:00 dan 20:00 gacha</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <i className="bi bi-envelope-fill fs-3 text-primary"/>
                                <h4>Email</h4>
                                <p>universalacdemy@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map justify-content-center d-flex align-items-center w-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d727.6939220993924!2d66.87719743354744!3d39.118088613643735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1697260450639!5m2!1sen!2s"
                    width="412px" height="450" style={{border: "0;"}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
            </div>


            <div className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Bizning haqimizda</h5>
                            Biz bilan kurslarni muvaffaqiyatli tamomlang va orzu qilgan ish o'rningiz egasiga
                            aylaning.Har bir kursdagi mavzulashtirilgan video darslarda real loyihalardan qismlar
                            orqali tushuntirib beriladi.
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Ommabop havola</h5>
                            <a className="btn btn-link" href="">Biz haqimiza</a>
                            <Link to={"http://localhost:5173/contact"} className="btn btn-link">Biz bilan bog'lanish</Link>
                        </div>
                    </div>
                </div>

                <div className="container px-lg-5">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                                Designed By <a className="border-bottom" href="https://htmlcodex.com">uTeam</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}