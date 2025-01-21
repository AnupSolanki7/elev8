import Image from "next/image";
import React from "react";
import TableIcon from "../../../../public/images/services_table_icon.png"

const ServicesSchedule = () => {
  return (
    <section className="our_schedule_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="our_schedule_content">
              <h5>OUR SCHEDULE</h5>
              <h2>CHECK OUR DAILY ROUTINE SCHEDULE</h2>
            </div>
          </div>
        </div>
        <div className="table_wrapper" data-aos="fade-up">
          <table>
            <tr>
              <th>
                <figure className="mb-0">
                  <Image
                    src={TableIcon}
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </th>
              <th>SUN</th>
              <th>MON</th>
              <th>TUE</th>
              <th>WED</th>
              <th>THU</th>
              <th>FRI</th>
            </tr>
            <tr>
              <td>08:00 AM</td>
              <td>
                <h6>CARDIO</h6>
                <p className="mb-0">Cardio Excersices</p>
              </td>
              <td>
                <h6>CARDIO</h6>
                <p className="mb-0">Cardio Excersices</p>
              </td>
              <td>
                <h6>CARDIO</h6>
                <p className="mb-0">Cardio Excersices</p>
              </td>
              <td>
                <h6>CARDIO</h6>
                <p className="mb-0">Cardio Excersices</p>
              </td>
              <td>
                <h6>CARDIO</h6>
                <p className="mb-0">Cardio Excersices</p>
              </td>
              <td>
                <h6>CARDIO</h6>
                <p className="mb-0">Cardio Excersices</p>
              </td>
            </tr>
            <tr>
              <td>10:00 AM</td>
              <td>
                <h6>YOGA</h6>
                <p className="mb-0">Yoga Session</p>
              </td>
              <td>
                <h6>YOGA</h6>
                <p className="mb-0">Yoga Session</p>
              </td>
              <td></td>
              <td>
                <h6>YOGA</h6>
                <p className="mb-0">Yoga Session</p>
              </td>
              <td>
                <h6>YOGA</h6>
                <p className="mb-0">Yoga Session</p>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>04:00 PM</td>
              <td>
                <h6>GYM</h6>
                <p className="mb-0">Mass Gain</p>
              </td>
              <td></td>
              <td>
                <h6>GYM</h6>
                <p className="mb-0">Mass Gain</p>
              </td>
              <td>
                <h6>GYM</h6>
                <p className="mb-0">Mass Gain</p>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>08:00 PM</td>
              <td>
                <h6>CROSSFIT</h6>
                <p className="mb-0">Streching</p>
              </td>
              <td>
                <h6>CROSSFIT</h6>
                <p className="mb-0">Streching</p>
              </td>
              <td>
                <h6>CROSSFIT</h6>
                <p className="mb-0">Streching</p>
              </td>
              <td></td>
              <td>
                <h6>CROSSFIT</h6>
                <p className="mb-0">Streching</p>
              </td>
              <td>
                <h6>CROSSFIT</h6>
                <p className="mb-0">Streching</p>
              </td>
            </tr>
            <tr>
              <td>10:00 PM</td>
              <td>
                <h6>BOXING</h6>
                <p className="mb-0">Boxing</p>
              </td>
              <td>
                <h6>BOXING</h6>
                <p className="mb-0">Boxing</p>
              </td>
              <td>
                <h6>BOXING</h6>
                <p className="mb-0">Boxing</p>
              </td>
              <td>
                <h6>BOXING</h6>
                <p className="mb-0">Boxing</p>
              </td>
              <td>
                <h6>BOXING</h6>
                <p className="mb-0">Boxing</p>
              </td>
              <td>
                <h6>BOXING</h6>
                <p className="mb-0">Boxing</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServicesSchedule;
