export const MainSection = (props) => {
  return (
    <div className="main">
      <div className="headSection">
        <div className="customerName">Welcome back Mr. David</div>
        <div className="options">
          <div className="download">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="39"
              fill="currentColor"
              class="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>
          </div>
          <div className="date">
            <input type="date" />
          </div>
          <div className="addCustomer">
            <button>Add Customer + </button>
          </div>
        </div>
      </div>
      <div className="customerCards">
        <div className="cardOne">
          <div className="cardHead">
            <div className="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </div>
            <div className="info">Total Customer </div>
          </div>
          <div className="cardBody">
            <div className="content">
              <div className="number noOne">{props.figure[0]}</div>
              <div className="percent One">{props.percent[0]}⬆</div>
              <div className="theDate">{props.theDate}</div>
            </div>
          </div>
        </div>
        <div className="cardTwo">
          <div className="cardHead">
            <div className="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
            </div>
            <div className="info">Team Plan</div>
          </div>
          <div className="cardBody">
            <div className="content">
              <div className="number">{props.figure[1]}</div>
              <div className="percent Two">{props.percent[0]}⬆</div>
              <div className="theDate">{props.theDate}</div>
            </div>
          </div>
        </div>
        <div className="cardThree">
          <div className="cardHead">
            <div className="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-person-workspace"
                viewBox="0 0 16 16"
              >
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
              </svg>
            </div>
            <div className="info">Basic Plan</div>
          </div>
          <div className="cardBody">
            <div className="content">
              <div className="number">{props.figure[2]}</div>
              <div className="percent Three">{props.percent[0]}⬆</div>
              <div className="theDate">{props.theDate}</div>
            </div>
          </div>
        </div>
        <div className="cardFour">
          <div className="cardHead">
            <div className="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </div>
            <div className="info">Stopped</div>
          </div>
          <div className="cardBody">
            <div className="content">
              <div className="number">{props.figure[3]}</div>
              <div className="percent Four">{props.percent[1]}⬇</div>
              <div className="theDate">{props.theDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
