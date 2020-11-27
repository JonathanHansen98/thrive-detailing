import React, { useState, useEffect } from "react"
import axios from "axios"
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"

const Gallery = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await axios(
        'https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"31130990322","first":15,"after":null}'
      )
      setData(result.data.data.user.edge_owner_to_timeline_media.edges)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Container>
        <Row className="py-5">
          <Col>
            <Row>
              <h1 className="underlined tealAccent">
                {" "}
                Check out our Instagram!{" "}
              </h1>
            </Row>
            <Card className="veryDark shadowImg p-3 my-5">
              <Row>
                {loading ? (
                  <Spinner style={{ margin: "0 auto" }} animation="border" />
                ) : (
                  data.map((pic, index) => {
                    console.log(data)
                    return (
                      <Col
                        key={index}
                        className="p-4 d-flex align-items-center justify-content-center"
                        xl={4}
                      >
                        <a
                          href="https://www.instagram.com/thriveautodetail/"
                          target="_blank"
                        >
                          {" "}
                          <img
                            src={pic.node.display_url}
                            className="shadowImg tealShadowHover"
                            style={{ maxHeight: 315 }}
                          />
                        </a>
                      </Col>
                    )
                  })
                )}
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery
