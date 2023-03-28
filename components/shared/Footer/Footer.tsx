import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #000;
  color: white;
  padding: 40px;
  margin-top: 160px;
  font-size: 16px;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    line-height: 24px;

    & li {
      padding: 0 15px;
      font-family: "audi-wide-bold";

      & ul {
        list-style-type: none;
        margin-top: 10px;
        padding: 0;
        display: flex;
        flex-direction: column;
        font-size: 12px;

        & li {
          padding: 0;
        }
      }
    }
  }

  & p {
    font-size: 12px;
    margin-top: 60px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <ul>
        <li>车型展示</li>
        <li>
          购车工具
          <ul>
            <li>车型配置</li>
          </ul>
        </li>
        <li>
          进化不止
          <ul>
            <li>可持续理念</li>
            <li>设计美学</li>
            <li>数字化场景</li>
          </ul>
        </li>
        <li>
          奥迪世界
          <ul>
            <li>百年奥迪</li>
            <li>创见未来</li>
            <li>奥迪概念车</li>
          </ul>
        </li>
      </ul>
      <p>© 奥迪（中国）企业管理有限公司 版权所有</p>
    </FooterWrapper>
  );
}

export default Footer;
