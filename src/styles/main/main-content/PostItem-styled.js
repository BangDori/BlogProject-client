import styled from 'styled-components';

const StyledPostItem = styled.div`
  width: 260px;

  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ebebeb;

    width: 260px;
    height: 260px;

    cursor: pointer;
    img {
      object-fit: contain;
      vertical-align: middle;
    }
  }

  .title {
    font-size: 18px;

    margin: 12px 0 6px;
    cursor: pointer;
  }

  .content-slice {
    font-size: 14px;

    margin-bottom: 4px;
    color: #676767;
    cursor: pointer;
  }

  .date {
    font-size: 12px;
    padding: 4px 0;

    color: #bcbcbc;
  }
`;

export default StyledPostItem;
