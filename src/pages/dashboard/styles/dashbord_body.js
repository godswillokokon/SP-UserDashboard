import styled from "styled-components";

const DashBoardBody = styled.section`
  margin: 2rem 2rem;
  padding: 0 !important;
  .row-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1 {
      font-weight: 600;
      font-size: 20px;
      color: #515c6f;
      text-transform: capitalize;
    }
  }
`;

DashBoardBody.Header = styled.div`
  margin: 1rem 0rem;
  height: 66px;
  width: inherit;
  background: #fcad0a;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 26px;
    color: #ffffff;
    margin: 0;
  }
`;

DashBoardBody.Banner = styled.div`
  height: 256.95px;
  .background {
    height: 249px;
    background: #c2c2c2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;

    @media screen and (max-width: 767px) {
      overflow: scroll;
    }
    .wallet-header {
      margin: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: start;
      /* align-items: center; */

      .circle {
        height: 48px;
        width: 48px;
        background: white;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h2 {
        font-size: 11px;
        line-height: 16px;
        color: #ffffff;
      }
      h3 {
        margin-top: 1rem;
        font-size: 11px;
        line-height: 16px;
        color: #ffffff;
        text-transform: uppercase;
      }
      h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 40px;
        color: #ffffff;
      }
    }
    .wallet-card {
      margin: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: start;
      .cards {
        margin-top: 1rem;
        width: 199.52px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 1rem;
      }
    }
  }
  .fund-wallet {
    margin: -3% 0 0 82%;
    position: static;
    width: 134px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    box-shadow: -5px 5px 20px rgba(81, 92, 111, 0.12);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;

    text-align: center;

    color: #fd901c;
    @media screen and (max-width: 767px) {
      margin-left: 59%;
    }
  }
`;

DashBoardBody.WalletRecentActivity = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  card-container {
    padding-bottom: 1rem;
  }

  .transaction-card {
    margin-bottom: 1rem;
    height: 88px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f5f4f4;
    border-radius: 10px;
    border-left: 10px solid #fcad0a;
  }

  .transaction-card .leading-item {
    margin-left: 2rem;
  }

  .transaction-card .leading-item h1 {
    font-weight: bold;
    font-size: 18px;
    line-height: 150%;
    margin: 0;
    color: #515c6f;
  }

  .leading-item h2 {
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    color: #515c6f;
  }

  .transaction-card .trailing-item {
    margin-right: 2rem;
  }

  .trailing-item h1 {
    font-weight: bold;
    font-size: 18px;
    line-height: 150%;
    color: #fcad0a;
    margin: 0;
  }

  .trailing-item .date {
    width: 114px;
    font-size: 11px;
    line-height: 13px;
    color: #515c6f;
  }
`;

DashBoardBody.SoldCard = styled.div`
  width: 273.15px;
  margin-top: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  .sold-card .image,
  .sold-card .image img {
    width: 90%;
  }
  h1 {
    margin-top: 5px;
    font-size: 18px;
    line-height: 27px;
    color: #515c6f;
  }
`;

DashBoardBody.Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

DashBoardBody.SettingBanner = styled.div`
  .background {
    height: 221px;
    background: #c2c2c2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 54px;
      margin: 0;
      color: #ffffff;
      text-align: center;
    }
    h2 {
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;
      color: #ffffff;
      text-align: center;
    }
  }
  .circle {
    width: 150px;
    height: 150px;
    background: #ffffff;
    box-shadow: -7px 7px 20px rgba(81, 92, 111, 0.12);
    border-radius: 100%;
    position: static;
    margin: -9% 0 0 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
      top: 49%;
      left: 33%;
    }
  }
`;

DashBoardBody.Form = styled.form`
  margin-top: 3rem;
  padding-bottom: 1rem;
  .input-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .input-control {
      width: 48%;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
  .input-control {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .input-control input,
  .input-control select {
    color: #515c6f;
    border: 1px solid #c1c1c1;
    box-sizing: border-box;
    border-radius: 10px;
    background: #fbfbfb;
    font-size: 16px;
    height: 50px;
    padding: 0rem 1rem;
    :focus {
      outline-style: none;
    }
  }

  .prefix input {
    border-radius: 0px 10px 10px 0px;
    width: 82%;
    border: 1px solid #c1c1c1;
    border-bottom: 0;
    border-top: 0;
    border-right: 0;

    @media screen and (max-width: 767px) {
      width: 75%;
    }
  }
  .prefix span {
    color: #515c6f;
    padding: 0rem 1rem;
    box-sizing: border-box;

    background: #fbfbfb;
    font-size: 16px;
  }
  .prefix {
    border-radius: 10px;
    border-right: 0;
    border: 1px solid #c1c1c1;
    background: #fbfbfb;
  }
  .input-control label {
    font-size: 18px;
    line-height: 27px;
    color: #515c6f;
    margin-bottom: 5px;
  }
  button {
    border: none;
    background: #f9a602;
    border-radius: 10px;
    width: 229px;
    font-weight: 600;
    font-size: 20px;
    line-height: 16px;
    text-transform: capitalize;
    color: #ffffff;
    height: 48px;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
`;
export default DashBoardBody;
