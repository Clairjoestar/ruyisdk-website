import React from "react";
import { Row, Col, QRCode, Card } from "antd";
import { translate } from "@docusaurus/Translate";

const QQGroupList = () => {
  const data = [
    {
      title: 'QQ-1',
      value: 'https://qm.qq.com/q/oAWlZnWV3y',
      qqGroupNumber: '544940413'
    },
    {
      title: ' ',
      value: null,
      qqGroupNumber: null
    },
    {
      title: ' ',
      value: null,
      qqGroupNumber: null
    },
    {
      title: ' ',
      value: null,
      qqGroupNumber: null
    },
    {
      title: ' ',
      value: null,
      qqGroupNumber: null
    },
    {
      title: ' ',
      value: null,
      qqGroupNumber: null
    },
    {
      title: ' ',
      value: null,
      qqGroupNumber: null
    },
    {
      title: ' ',
      value: null,
      qqGroupNumber: null
    },


  ]
  return (
    <Card style={{
      backgroundColor: "#f0f2f5",
      borderLeftColor: "grey",
      borderLeftColor: "#015e80",
      borderLeftWidth: "4px",
      borderRadius: '1rem'
    }}
      title={translate({ id: "您可以扫描二维码，或者点击二维码唤起 QQ 加入群聊", message: "您可以扫描二维码，或者点击二维码唤起 QQ 加入群聊" })}
    >
      <Row gutter={[16, 16]} align={'top'} justify={'start'}>
        {data.map((data, index) => (
          <Col xs={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              size={"small"}
              title={data.title}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderColor: "grey",
                borderLeftWidth: "4px"
              }}
              onClick={() => {
                if (data.value) {
                  window.open(data.value)
                }
              }}
            >{
                data.value ? <QRCode value={data.value} size={128} /> : <div style={{ height: '128px', width: "128px" }}></div>
              }
              {data.qqGroupNumber ? <p style={{
                height: "1rem",
                width: '100%',
                textAlign: "center",
                fontSize: "large",
                fontWeight: "bolder"
              }}>{data.qqGroupNumber}</p> :
                <p style={{
                  height: "1rem",
                  width: '100%'
                }}> </p>}
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default QQGroupList