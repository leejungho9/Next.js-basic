import SanityBlockContent from "@sanity/block-content-to-react";
import { Col, Row } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";


const serializers = {
    types : {
        code : ({node}) => {
            const {code} = node;
            return <SyntaxHighlighter language="javscript" >{code}</SyntaxHighlighter>
        },
        video : ({node}) => {
            return <p>video</p>
        },
        link : ({node}) => {
            return <p>link</p>
        },
        imageGallery : ({node}) => {
            return <p>imageGallery</p>
        },
        
    }
}


export default function BolgPostDetail({blocks}) {
    return <Row>
        <Col span={24}>
    <SanityBlockContent
        blocks={blocks}
        projectId="fw2nw9sx"
        dataset="production"
        serializers={serializers}/>
        </Col>
    </Row>
}