import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import evverest from '../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Igracias',
                    subTitle: 'Re-Design Igracias Mobile',
                    imgSrc: devgrub,
                    link: 'https://drive.google.com/file/d/14cQeg5fGjX27P4K-SgJE6xQ8GrxE8pbG/view?usp=sharing',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Rian Cintiyo',
                    subTitle: 'Github Profile',
                    imgSrc: youtube,
                    link: 'https://github.com/riancintiyo',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Spotify New Design',
                    subTitle: 'Music Player',
                    imgSrc: evverest,
                    link: 'https://drive.google.com/file/d/1fu-2cplRE550c3SFOxwbvaLbAu3bvFH5/view?usp=sharing',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;