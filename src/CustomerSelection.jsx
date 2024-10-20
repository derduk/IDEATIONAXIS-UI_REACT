export const CustomerSelection = (props) => {
  return (
    <div className="customerlist">
      <div className="filters">
        <div className="filterHead">Customer List</div>
        <div className="filterSection">
          <div className="allTime">
            All Time{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
              &nbsp;
            </span>
          </div>
          <div className="teamPlan">
            Team plan &nbsp;
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
              &nbsp;
            </span>
          </div>
          <div className="active">
            Active &nbsp;{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
              &nbsp;
            </span>
          </div>
          <div className="moreFilters">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-funnel"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
              </svg>
            </span>
            &nbsp;More Filters
          </div>
          <div className="searchBartwo">
            <input type="text" placeholder="Search..."className="searchInput" />
          </div>
        </div>
      </div>
      <div className="theTable">
        <table>
          <thead>
            <tr>
              <th>Full Name - Mail</th>
              <th>Billing Date</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Total Users</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {props.fullName[0]} <br />
                <span className="email">{props.email[0]}</span>
              </td>
              <td>{props.billing[0]}</td>
              <td>
                <span>{props.plan[0]}</span>
              </td>
              <td>{props.amount[0]}/year</td>
              <td>{props.user[0]} users</td>
              <td>
                <a href="#">{props.details}</a>
              </td>
            </tr>
            <tr>
              <td>
                {props.fullName[1]} <br />
                <span className="email">{props.email[1]}</span>
              </td>
              <td>{props.billing[1]}</td>
              <td>
                <span>{props.plan[1]}</span>
              </td>
              <td>{props.amount[1]}/year</td>
              <td>{props.user[1]} users</td>
              <td>
                <a href="#">{props.details}</a>
              </td>
            </tr>
            <tr>
              <td>
                {props.fullName[2]} <br />
                <span className="email">{props.email[2]}</span>
              </td>
              <td>{props.billing[2]}</td>
              <td>
                <span>{props.plan[2]}</span>
              </td>
              <td>{props.amount[2]}/year</td>
              <td>{props.user[2]} users</td>
              <td>
                <a href="#">{props.details}</a>
              </td>
            </tr>
            <tr>
              <td>
                {props.fullName[3]} <br />
                <span className="email">{props.email[3]}</span>
              </td>
              <td>{props.billing[3]}</td>
              <td>
                <span>{props.plan[3]}</span>
              </td>
              <td>{props.amount[3]}/year</td>
              <td>{props.user[3]} users</td>
              <td>
                <a href="#">{props.details}</a>
              </td>
            </tr>
            <tr>
              <td>
                {props.fullName[4]} <br />
                <span className="email">{props.email[4]}</span>
              </td>
              <td>{props.billing[4]}</td>
              <td>
                <span>{props.plan[4]}</span>
              </td>
              <td>{props.amount[4]}/year</td>
              <td>{props.user[4]} users</td>
              <td>
                <a href="#">{props.details}</a>
              </td>
            </tr>
            <tr>
              <td>
                {props.fullName[5]} <br />
                <span className="email">{props.email[5]}</span>
                
              </td>
              <td>{props.billing[5]}</td>
              <td>
                <span>{props.plan[5]}</span>
              </td>
              <td>{props.amount[5]}/year</td>
              <td>{props.user[5]} users</td>
              <td>
                <a href="#">{props.details}</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pageContainer">
          <div class="resultPage">
            <label for="results">Results per page:</label>
            <select id="results" name="results">
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
            </select>
          </div>

          <div class="pages">
            <a href="#" class="prev">
              &laquo; Previous
            </a>
            <a href="#">1</a>
            <a href="#" class="active">
              2
            </a>
            <a href="#">3</a>
            <span>...</span>
            <a href="#">8</a>
            <a href="#">9</a>
            <a href="#" class="next">
              Next &raquo;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
