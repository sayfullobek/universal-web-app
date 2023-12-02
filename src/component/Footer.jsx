import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Bizning manzilimiz</h5>
                            <p><i className="fa fa-map-marker-alt me-3"/> Qashaqadaryo viloyati <br/> Kitob tumani Katta
                                yo'l ko'chasi</p>
                            <p><i className="fa fa-phone-alt me-3"/>+998 99 076 32 46</p>
                            <p><i className="fa fa-envelope me-3"/>uteam111111@gmail.com</p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white mb-4">Ommabop havola</h5>
                            <a className="btn btn-link" href="">Biz haqimiza</a>
                            <Link to={"/contact"} className="btn btn-link" href="">Biz bilan
                                bog'lanish</Link>
                        </div>
                    </div>
                </div>
                <div className="container px-lg-5">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Universal academy </a>, All Right Reserved.

                                Designed By <a className="border-bottom" href="">uTeam</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
