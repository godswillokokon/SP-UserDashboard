import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../../constants/Colors";

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

    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector,
    .ant-select-single:not(.ant-select-customize-input)
      .ant-select-selector:focus {
      border: none !important;
    }

    .ant-select-selection-selected-value {
      color: #515c6f;
      font-weight: 500;
      font-size: 14.5341px;
    }
  }
`;

DashBoardBody.WalletBanner = styled.div`
  height: 256.95px;
  .background {
    height: 249px;
    background: #c2c2c2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
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
    position: absolute;
    right: 10%;
    top: 41%;
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
    /* or 133% */
    text-align: center;
    /* Primary Color */
    color: #fd901c;
  }
`;

DashBoardBody.WalletRecentActivity = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  card-container {
    padding-bottom: 1rem;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector,
  .ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector:focus {
    border: none !important;
  }

  .ant-select-selection-selected-value {
    color: #515c6f;
    font-weight: 500;
    font-size: 14.5341px;
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
export default DashBoardBody;
