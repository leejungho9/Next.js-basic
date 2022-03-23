import { Col, Row } from "antd";

export default function BlogHeadline() {
    return (
        <Row align="middle" style={{height:400, textAlign:"center"}}>
            <Col span={24}>
                <h1 style={{
                    fontSize:70,
                    fontWeight : "bold",
                }}>Jung`s Blog</h1>
                <p style={{ fontSize:24}}> 
                 맛집 혹은 카페 돌아다니는 것을 좋아하고 귀여운 푸들 남자아이를 키우고 있습니다.
                </p>
            </Col>
        </Row>
    )
}