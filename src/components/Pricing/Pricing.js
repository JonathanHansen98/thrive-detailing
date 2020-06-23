import React from 'react'
import PriceCard from './PriceCard'
import { Container, Row, Col } from 'react-bootstrap'
import basicSmall from '../../images/Pricing/basic-wash-small.png'
import basicMid from '../../images/Pricing/basic-wash-mid.png'
import basicLrg from '../../images/Pricing/basic-wash-truck.png'
import ultimateSmall from '../../images/Pricing/ultimate-small.png'
import ultimateMid from '../../images/Pricing/ultimate-mid.png'
import ultimateLrg from '../../images/Pricing/ultimate-truck.png'
import paintSmall from '../../images/Pricing/paint-corr-small.png'
import paintMid from '../../images/Pricing/paint-corr-mid.png'
import paintLrg from '../../images/Pricing/paint-corr-truck.png'
import sanitation from '../../images/Pricing/sanitation.png'
import ceramic from '../../images/Pricing/ceramic.png'

const Pricing = () => {
  const basicImgs = [
    {
      imgUrl: basicSmall
    },
    {
      imgUrl: basicMid
    },
    {
      imgUrl: basicLrg
    }
  ]
  const ultimateImgs = [
    {
      imgUrl: ultimateSmall
    },
    {
      imgUrl: ultimateMid
    },
    {
      imgUrl: ultimateLrg
    }
  ]
  const paintImgs = [
    {
      imgUrl: paintSmall
    },
    {
      imgUrl: paintMid
    },
    {
      imgUrl: paintLrg
    }
  ]
  const miscImg = [
    {
      imgUrl: sanitation
    },
    {
      imgUrl: ceramic
    }
  ]
  return (
    <div>
      <Container className='my-5'>
        <Row>
          <Col className='text-center mt-3 tealAccent'>
            <h1 className='underlined hvr-forward'>
              Basic Wash
            </h1>
          </Col>
        </Row>
        <Row>
          {
            basicImgs.map((img, index) => {
              return (
                <Col lg={4} key={index} >
                  <PriceCard class='veryDark my-2 my-lg-3' img={img.imgUrl} />
                </Col>
              )
            })
          }
        </Row>
      </Container >
      <div className="w-100 veryDark py-5">
        <Container >
          <Row>
            <Col className='text-center mt-3 tealAccent' >
              <h1 className='underlined hvr-forward'>
                Ultimate Detail Package
            </h1>
            </Col>
          </Row>
          <Row>
            {
              ultimateImgs.map((img, index) => {
                return (
                  <Col lg={4} key={index} >
                    <PriceCard class='lightDark my-2 my-lg-3' img={img.imgUrl} />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
      <Container className='my-5'>
        <Row>
          <Col className='text-center  mt-3 tealAccent'>
            <h1 className='underlined hvr-forward'>
              Paint Correction
            </h1>
          </Col>
        </Row>
        <Row>
          {
            paintImgs.map((img, index) => {
              return (
                <Col lg={4} key={index} >
                  <PriceCard class='veryDark my-2 my-lg-3' img={img.imgUrl} />
                </Col>
              )
            })
          }
        </Row>
      </Container >
      <div className="w-100 veryDark">
        <Container className='pt-5'>
          <Row>
            <Col className='text-center  mt-3 tealAccent'>
              <h1 className='underlined hvr-forward'>Ceramic Coating/ Interior Sanitation</h1>
            </Col>
          </Row>
          <Row className='pb-5'>
            {
              miscImg.map((img, index) => {
                return (
                  <Col key={index} >
                    <PriceCard class='lightDark my-3' img={img.imgUrl} />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Pricing
