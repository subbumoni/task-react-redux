import Accodian from "./Accordian";
import { Button } from "reactstrap";
import PropTypes from "prop-types"


export default function CartCard({
  data = {},
  dispatcher = () => {},
  quantityChange = () => {},
}) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="row-1">
          <div className="col-3">
            <img src="/image/1.jpg" width={150} alt="Book" />
          </div>
          <div className="col-9">
            <h4 className="mb-4">{data.title}</h4>
            <Accodian
              options={[
                {
                  title: "details & care",
                  description:
                    "We provide great looking book cover that pulls readers to buy this book.",
                },
                {
                  title: "Sustainability",
                  description:
                    "We provide great looking book cover that pulls readers to buy this book.",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="row d-flex justify-content-end">
              <div className="col-6">
                <select
                  defaultValue={data.quantity}
                  onChange={() => dispatcher(quantityChange(e.target.value))}
                >
                  <option value={0}>Select Quantity</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <div className="col-6">
                <h5>$1000</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Button color="link">Delete</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  data: PropTypes.object,
  dispatcher: PropTypes.func,
  quantityChange: PropTypes.func,
};
