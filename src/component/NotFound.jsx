import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container px-lg-5 text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary"/>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Sahifa topilmadi</h1>
                            <p className="mb-4">Kechirasiz, siz qidirgan sahifa bizning veb-saytimizda mavjud emas!
                                Ehtimol, bizning bosh sahifamizga o'ting yoki qidiruvdan foydalanmoqchimisiz?</p>
                            <Link to={"http://localhost:5173/"} className="btn btn-primary rounded-pill py-3 px-5">Bosh sahifa</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}