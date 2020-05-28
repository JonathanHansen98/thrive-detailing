import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Gallery = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"31130990322","first":15,"after":null}',
            );
            setData(result.data.data.user.edge_owner_to_timeline_media.edges);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Container>
                <Row className='py-5'>
                    { data.map((pic, index) => {

                        console.log(data)
                        return (
                                <Col key={index} className='p-4 d-flex align-items-center' xl={4}>
                                    <a href='https://www.instagram.com/thriveautodetail/' target='_blank'> <img src={pic.node.display_url} className='shadowImg  tealShadowHover'/></a>
                                </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Gallery
