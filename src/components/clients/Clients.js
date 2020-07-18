import React from 'react'
import style from '../CSS/Clients.module.css';
import { Carousel, Card } from 'react-bootstrap';
import slide01 from '../../images/slide01.png';
export const Clients = () => {
    return (
        <Carousel className={style.clients}>
            <Carousel.Item>
                <img src={slide01} className={style.img_clr} alt=" "/>
                <Carousel.Caption>
                    <div className={style.h_txt}>
                        <h1 className={style.h}>
                            Our clients like us
                    </h1>
                        <p className={style.p}>
                            Thank you for your trust! We say it’s a thing of synergy.
                    </p>
                        <Card className="text-center">
                            <Card.Header className={style.card_header}>Client 1</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide01} alt=" " className={style.img_clr}  />
                <Carousel.Caption>
                    <div className={style.h_txt}>
                        <h1 className={style.h}>
                            Our clients like us
                    </h1>
                        <p className={style.p}>
                            Thank you for your trust! We say it’s a thing of synergy.
                    </p>
                    <Card className="text-center">
                            <Card.Header className={style.card_header}>Client 2</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                We like working with Camo. They did our current webpage 					

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide01} alt=" " className={style.img_clr}  />
                <Carousel.Caption>
                    <div className={style.h_txt}>
                        <h1 className={style.h}>
                            Our clients like us
                    </h1>
                        <p className={style.p}>
                        With supporting text below as a natural lead-in to additional content.
                            
                    </p>
                    <Card className="text-center">
                            <Card.Header className={style.card_header}>Client 3</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    
Collaboration with Camo means fast and flexible solutions. 			
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Clients;
