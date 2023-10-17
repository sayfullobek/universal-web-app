import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="m-0"><img src="src/assets/img/UniversalAcademy.png" alt="not"/>Universal<span className="fs-5"/>
                        </h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="" className="nav-item nav-link active">Bosh sahifa</a>
                            <Link to="http://localhost:5173/course" className="nav-item nav-link">Kurslar</Link>
                            <Link to="http://localhost:5173/contact" className="nav-item nav-link">Biz bilan bo'glanish</Link>
                        </div>
                    </div>
                </nav>

                <div className="container-xxl py-5 bg-primary hero-header mb-5">
                    <div className="container my-5 py-5 px-lg-5">
                        <div className="row g-5 py-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 style={{fontSize:"60px"}} className="text-white mb-4 animated zoomIn">Zamonaviy kasblarni biz bilan o'rganing</h1>
                                <p className="text-white pb-3 animated zoomIn">Dasturlash sohasida eng rivojlangan va talabi yuqori bo'lgan kurslardan birini tanlang. Kurs davomida portfolio to'plash, rezyume hosil qilish va ish topishingizga esa biz yordam beramiz.</p>
                                <Link to="http://localhost:5173/contact"
                                   className="btn btn-outline-light justify-content-end py-sm-3 px-sm-5 rounded-pill animated slideInRight">Biz bilan bog'lanish</Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-start">
                                <img className="img-fluid" src="src/assets/img/hero.png" alt="not"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}