import { Card, CardGroup } from "react-bootstrap";
import bus1 from "../images/bus-t1a-30.jpg";
import bus2 from "../images/bus-t1a-24.jpg";
import bus3 from "../images/bus-t1b-42.jpg";

function BasicExample() {
  return (
    <div>
      <h1>ประเภทรถ</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={bus1} />
          <Card.Body>
            <Card.Title>ม.1 (ก) VIP 30 ที่นั่ง</Card.Title>
            <Card.Text>
              คุณลักษณะ : รถปรับอากาศชั้น 1 : 30 ที่นั่ง เก้าอี้ปรับเอนนอนได้
              135องศา มีห้องสุขภัณฑ์
              <br /> การบริการ : พนักงานต้อนรับ อาหาร และเครื่องดื่ม
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={bus2} />
          <Card.Body>
            <Card.Title>ม.1 (ก) VIP 24 ที่นั่ง</Card.Title>
            <Card.Text>
              คุณลักษณะ: รถปรับอากาศชั้น 1 : 24 ที่นั่ง เก้าอี้ปรับเอนนอนได้ 135
              องศา มีห้องสุขภัณฑ์
              <br /> การบริการ: พนักงานต้อนรับ อาหาร และเครื่องดื่ม
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={bus3} />
          <Card.Body>
            <Card.Title>ม.1 (ข) 42 ที่นั่ง</Card.Title>
            <Card.Text>
              คุณลักษณะ: รถปรับอากาศชั้น 1 : 42 ที่นั่ง เก้าอี้ปรับเอนนอนได้ 125
              องศา มีห้องสุขภัณฑ์
              <br /> การบริการ: พนักงานต้อนรับ อาหาร และเครื่องดื่ม
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default BasicExample;
