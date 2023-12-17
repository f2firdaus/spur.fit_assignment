import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import User from "../assets/User.png";
import chat from "../assets/ChatSparkle.png";
const Home = () => {
  const allTableData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
  }));

  return (
    <>
      <div>
        <div className="home_heading">
          <div className="home_nav">
            <p className="active">
              {" "}
              <span> Active</span> <span className="span">16</span>
            </p>
            <p>
              {" "}
              <span>Pending</span> <span className="span"> 16</span>
            </p>
            <p>
              <span>Archived</span> <span className="span"> 8</span>
            </p>
          </div>
          <div className="home_btn_filter">
            <div className="border-btn">
              <button className="btn_new">Add New</button>
            </div>

            <span className="home_search_icons">
              <FiSearch />
            </span>
            <input
              type="search"
              className="home_input"
              placeholder="Search Anything"
            />
            <p className="filter">
              <span>
                <CiFilter />
              </span>
              <span>Filter by</span>
              <span>
                <RiArrowDropDownLine />
              </span>
            </p>
          </div>
        </div>
        <div className="home_table">
          <table>
            <tbody>
              <tr>
                <th className="checkbox">
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Trainee</th>
                <th>Compliance</th>
                <th>Last Workout</th>
                <th>Workout Plan</th>
                <th>Last Modified</th>
                <th>Diet Plan</th>
                <th>Last Modified</th>
                <th>Last Modified</th>
                <th>Actions</th>
              </tr>

              {allTableData.map((index) => (
                <>
                  <tr className="tr" key={index.id}>
                    <td className="checkbox">
                      <input type="checkbox" />
                    </td>
                    <td className="image_td">
                      {" "}
                      <span>
                        <img src={User} alt="" />
                      </span>{" "}
                      Rahul Last Name
                    </td>
                    <td>44.5%</td>
                    <td>Jun 10th’ 23</td>
                    <td className="work_out">Plan 2 - Beginner</td>
                    <td>Jun 10th’ 23</td>
                    <td>Plan 2 - Beginner</td>
                    <td>Jun 10th’ 23</td>
                    <td>Tim Deboar</td>
                    <td>
                      <div className="td_img">
                        <img src={chat} alt="" />
                        <span className="td_dot">...</span>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Home;
