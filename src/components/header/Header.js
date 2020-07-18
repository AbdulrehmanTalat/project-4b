import React from 'react'
import style from '../CSS/Header.module.css';
import Button from '@material-ui/core/Button';
// import useWebAnimations from "@wellyshen/use-web-animations";
export const Header = () => {
    // const { ref: headimg } = useWebAnimations({
    //     keyframes: [
    //         {
    //             transform: "translateY(0px)"
    //         },
    //         {
    //             transform: "translateY(-15px)"
    //         },
    //     ],
    //     timing: {
    //         duration: 1000,
    //         iterations: Infinity,
    //         direction: 'alternate',
    //         easing: 'ease-in-out',
    //     },
    // });
    return (
        <section className={style.container}>
            <div className={style.wavy}>

            </div>
            <div className={style.banner_content}>
                <div className="row">
                <div className={style.txt_banner}>
                    <h1>
                        Your web presence just got so
                        much better
                    </h1>
                    <p>
                        Your company’s website isn’t just a digital business card or a few
                        brush strokes here and there. It’s an essential sales channel, and it
                        has rules. You need it to survive in the jungle of business.
                    </p>
                    <div className={style.banner_button}>
                        <Button variant="contained" className={style.btn_primary}>
                            Work With US
                            </Button>&nbsp;&nbsp;
                            <Button variant="outlined" className={style.btn}>
                            View Our Projects
                            </Button>
                    </div>
                </div>
                {/* <div ref={headimg} className={style.imgdiv}> */}
                {/* <img src={headerimg} alt="  " className={style.img_header} /> */}
                {/* </div> */}
                </div>
            </div>


        </section>
    )
}
export default Header;