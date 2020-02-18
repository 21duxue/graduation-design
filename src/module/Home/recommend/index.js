import React, { Component } from 'react';
import { Row, Col } from 'antd';
import RecommendCard from './recommend-card'
import './index.less'

export class Recommend extends Component {
    render() {
        return (
            <div className="recommend">
                <div className="title">
                    <h3>特别推荐</h3>
                </div>
                <Row>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Recommend;