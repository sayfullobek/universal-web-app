import {Link} from "react-router-dom";
import about from '../assets/img/about.jpg'
import preview from '../assets/img/Untitled__3_-removebg-preview.png'
import read from '../assets/img/Untitled__4_-removebg-preview.png'
import real from '../assets/img/Untitled__1_-removebg-preview.png'
import sert from '../assets/img/Untitled__2_-removebg-preview.png'
import work from '../assets/img/Untitled_6-removebg-preview.png'
import inputs from '../assets/img/Untitled_5-removebg-preview.png'
import komp from '../assets/img/iStock-626288564 (1).jpg'
import web from '../assets/img/web-programming-languages-_1_.jpg'
import arch from '../assets/img/CTA-BIM-1-1000x600.jpg'
import smm from '../assets/img/How-does-the-SMM-panel-work.jpg'
import tri from '../assets/img/3Ds-Max-Extrude.jpg'
import graphik from '../assets/img/Banner-5-Rising-Graphic-Designers-and-What-Sets-Them-Apart-1-1280x720.jpg'
import ceo from '../assets/img/photo_2023-10-16_11-03-13.jpg'
import oybek from '../assets/img/photo_2023-10-16_11-43-43.jpg'
import dilbek from '../assets/img/IMG_9384.jpg'
import boja from '../assets/img/IMG_9406.jpg'

export const FirstMenu = () => {
    return (
        <>
            <div>
                <div className="container-xxl py-5">
                    <div className="container px-lg-5">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="section-title position-relative mb-4 pb-2">
                                    <h6 className="position-relative text-primary ps-4">Biz haqimizda</h6>
                                    <h2 className="mt-2">Tajribali ustozlardan ta'lim oling</h2>
                                </div>
                                <p className="mb-4">Universal akademy ko'p yillardan beri uz faoliyatini olib bormoqda
                                    Bu yerda tajribali ustozlardan ta'lim olasiz. Akademiyamizda ko'plab zamonaviy
                                    kasblarni o'rganishingiz mumkin Universal Akademy zamonaviy kasblarni biz bilan
                                    o'rganing</p>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <h6 className="mb-3"><i className="fa fa-check text-primary me-2"/>Qulay muhit
                                        </h6>
                                        <h6 className="mb-0"><i className="fa fa-check text-primary me-2"/>Professional
                                            xodimlar
                                        </h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h6 className="mb-3"><i className="fa fa-check text-primary me-2"/>24/7
                                            qo'llab-quvvatlash</h6>
                                        <h6 className="mb-0"><i className="fa fa-check text-primary me-2"/>Adolatli
                                            narxlar</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <a className="btn btn-outline-primary btn-square me-3" href=""><i
                                        className="fab fa-facebook-f"/></a>
                                    <a className="btn btn-outline-primary btn-square me-3" href=""><i
                                        className="fab fa-twitter"/></a>
                                    <a className="btn btn-outline-primary btn-square me-3" href=""><i
                                        className="fab fa-instagram"/></a>
                                    <a className="btn btn-outline-primary btn-square" href=""><i
                                        className="fab fa-linkedin-in"/></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img className="img-fluid wow zoomIn" data-wow-delay="0.5s"
                                     src={about} alt={"not"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container px-lg-5">
                        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                             data-wow-delay="0.1s">
                            <h6 className="position-relative d-inline text-primary ps-4">Bizning xizmatlarimiz</h6>
                            <h2 className="mt-2">TA'LIMGA
                                MUKAMMAL YONDASHUV</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "150px", height: "150px", marginLeft: "100px"}}
                                         src={preview} alt=""/>
                                    <h5 className="mb-3">O’zingizga mos kursni tanlash</h5>
                                    <p>Biz yurtimizdagi eng rivojlangan sohalar bo'yicha
                                        kurslarni taqdim etamiz va tanlash imkonini beramiz.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "150px", height: "150px", marginLeft: "100px"}}
                                         src={read} alt=""/>
                                    <h5 className="mb-3">O'quv jarayoni</h5>
                                    <p>O'quv jarayoni video darslar, amaliy mashqlar, mentor bilan ishlash imkoniyati
                                        orqali olib boriladi.</p>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "150px", height: "150px", marginLeft: "100px"}}
                                         src={real} alt=""/>
                                    <h5 className="mb-3">Real loyihalarni amalga oshirish</h5>
                                    <p>Har bir kursdagi mavzulashtirilgan video darslarda real loyihalardan qismlar
                                        orqali tushuntirib beriladi.</p>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "150px", height: "150px", marginLeft: "100px"}}
                                         src={sert} alt=""/>
                                    <h5 className="mb-3">Sertifikat bilan taqdirlash</h5>
                                    <p>Kurs so'nggida talabaning o'zlashtirish ko'rsatkichlari e'tiborga olingan holda sertifikat va diplom beriladi.</p>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "150px", height: "150px", marginLeft: "100px"}}
                                         src={work} alt=""/>
                                    <h5 className="mb-3">Ish bilan ta’minlashda amaliy ko’mak</h5>
                                    <p>Kurslarni muvaffaqiyatli tamomlagan talabalarga Universal akademiyasi tomonidan
                                        ish bilan ta’minlashda amaliy yordam ko’rsatiladi.</p>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                <div
                                    className="service-item d-flex flex-column justify-content-center text-center rounded">
                                    <img style={{width: "150px", height: "150px", marginLeft: "100px"}}
                                         src={inputs} alt=""/>
                                    <h5 className="mb-3">Ishga kiring va <br/> karyerangizni boshlang</h5>
                                    <p>Biz bilan kurslarni muvaffaqiyatli tamomlang va orzu qilgan ish o'rningiz egasiga
                                        aylaning.</p>

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
                            <h2 className="mt-2">Eng zamonaviy kasblar</h2>
                        </div>
                        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                        </div>

                        <Link to={"http://localhost:5173/learnPc"} className="row g-4 portfolio-container">
                            <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                                <div className="position-relative rounded overflow-hidden">
                                    <img className="img-fluid w-100" style={{width: "383px", height: "283px"}}
                                         src={komp} alt=""/>
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
                                            <Link to={"http://localhost:5173/webProgramming"}
                                                  style={{fontSize: "40px"}} className="h5 d-block text-white mt-1 mb-0"
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
                                         src={tri} alt=""/>
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
                                         src={graphik}
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


                <div className="container-xxl py-5">
                    <div className="container px-lg-5">
                        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                             data-wow-delay="0.1s">
                            <h6 className="position-relative d-inline text-primary ps-4">Bizning jamoa</h6>
                            <h2 className="mt-2">Jamoamiz a'zolari bilan tanishing</h2>
                        </div>
                        <div className="row g-4 ">
                            <div  className="col-lg-4 col-md-6 wow fadeInUp mr-3"
                                 data-wow-delay="0.1s">
                                <div className="team-item">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                                        >
                                            <Link to={"https://t.me/sayfullo_dev"}
                                                  className="btn btn-square text-primary bg-white my-1"><i
                                                className="bi bi-telegram fs-5"/></Link>
                                            <Link to={"https://github.com/sayfullobek/"} className="btn btn-square text-primary bg-white my-1"><i
                                                className="bi bi-github fs-5"/></Link>
                                            <Link className="btn btn-square text-primary bg-white my-1" to={"https://www.instagram.com/sayfullo_dev/"}><i
                                                className="fab fs-5 fa-instagram"/></Link>
                                        </div>
                                        <img className="img-fluid rounded " style={{height:"500px",width:"675px"}}
                                             src={ceo}
                                             alt=""/>
                                    </div>
                                    <div className="px-4 py-3">
                                        <h5 className="fw-bold m-0">Sayfullo Tuxtayev</h5>
                                        <small>CEO</small>
                                    </div>
                                </div>
                            </div>

                            <div  className="col-lg-4 col-md-6 wow fadeInUp"
                                 data-wow-delay="0.3s">
                                <div className="team-item">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                                        >
                                            <Link to={"https://t.me/Oybek_227"}
                                                  className="btn btn-square text-primary bg-white my-1"><i
                                                className="bi bi-telegram fs-5"/></Link>
                                            <Link to={""} className="btn btn-square text-primary bg-white my-1" href=""><i
                                                className="bi bi-github fs-5"/></Link>
                                            <Link  to={"https://instagram.com/_0ybek_?igshid=MzRlODBiNWFlZA=="} className="btn btn-square text-primary bg-white my-1" href=""><i
                                                className="fab fs-5 fa-instagram"/></Link>
                                        </div>
                                        <img  style={{height:"500px",width:"675px"}} className="img-fluid rounded w-100"
                                             src={oybek}
                                             alt=""/>
                                    </div>
                                    <div className="px-4 py-3">
                                        <h5 className="fw-bold m-0">Oybek Yusupov</h5>
                                        <small>Foundation mentor</small>
                                    </div>
                                </div>
                            </div>

                            <div  className="col-lg-4 col-md-6 wow fadeInUp mr-3"
                                 data-wow-delay="0.1s">
                                <div className="team-item">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                                        >
                                            <Link to={"https://t.me/dilbekk070"}
                                                  className="btn btn-square text-primary bg-white my-1"><i
                                                className="bi bi-telegram fs-5"/></Link>
                                            <Link to={"https://github.com/mukhtarovich-dev"} className="btn btn-square text-primary bg-white my-1" ><i
                                                className="bi bi-github fs-5"/></Link>
                                            <Link to={"https://instagram.com/dilbekk070?igshid=MzRlODBiNWFlZA=="} className="btn btn-square text-primary bg-white my-1"><i
                                                className="fab fs-5 fa-instagram"/></Link>
                                        </div>
                                        <img style={{height:"500px"}} className="img-fluid rounded "
                                             src={dilbek}
                                             alt=""/>
                                    </div>
                                    <div className="px-4 py-3">
                                        <h5 className="fw-bold m-0">Dilbek</h5>
                                        <small>Full stack mentor</small>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-lg-4 col-md-6 wow fadeInUp mr-3"
                                 data-wow-delay="0.1s">
                                <div className="team-item">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                                        >
                                            <Link to={""}
                                                  className="btn btn-square text-primary bg-white my-1"><i
                                                className="bi bi-telegram fs-5"/></Link>
                                            <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                                className="bi bi-github fs-5"/></a>
                                            <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                                className="fab fs-5 fa-instagram"/></a>
                                        </div>
                                        <img className="img-fluid rounded " width={"375px"}
                                             src={boja}
                                             alt=""/>
                                    </div>
                                    <div className="px-4 py-3">
                                        <h5 className="fw-bold m-0">Akmal Abduvasiyev</h5>
                                        <small>Graphic designer mentor</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i
                    className="bi bi-arrow-up"/></a>
            </div>
        </>
    )
}