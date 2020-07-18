import React from 'react'
import style from '../CSS/Services.module.css';
import Button from '@material-ui/core/Button';
import useWebAnimations from "@wellyshen/use-web-animations";
import { Box } from '@material-ui/core';
import img from '../../images/mainpage.gif';
export const Services = () => {
    const { ref: animdiv, getAnimation } = useWebAnimations({
        autoPlay: true,
        keyframes: [
            {
                transform: "translate(0)"
            },
            {
                transform: "translate(3em)"
            },
        ],
        timing: {
            duration: 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
        },
    });
    function animate() {
        getAnimation().play();
    }

    return (
        <div className={style.services} >
            <div className={style.container}>
                <div className="row">
                    <div className={style.services}>
                        <div className={style.services_ban} onMouseOver={animate} ref={animdiv}>
                            <h2 className={style.services_ban_title}>
                                What we’re great at
                            </h2>
                            <p className={style.services_ban_content}>
                                Fourteen years and 400+ finished web projects have gifted us a unique experience on how to create something that is easy to use, looks great and earns a profit for your company.
                            <br />
                            </p>
                            <Button className={style.services_ban_btn}>
                                Explore full services
                            </Button>
                            <Box color="text.primary" clone>
                                <Button />
                            </Box>
                        </div>
                    </div>
                    <div >
                    <img src={img} alt="  " className={style.img} />
                    </div>
                    {/* <div className={style.right_Services}>
                        <div className={style.services_list}>
                             
                        </div>

                    </div> */}

                </div>
            </div>
        </div>
    )
}
export default Services;
