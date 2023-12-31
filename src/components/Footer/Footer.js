import React from 'react';
import { footerInfoData } from './FooterData';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <img className="footerLogo" src="/images/logo.png" alt="footerLogo" />
        <div className="footerInfo">
          <div className="allfooterText">
            {footerInfoData.map((item, index) => (
              <span key={index} className="footerText">
                {item.text}
              </span>
            ))}
          </div>

          <div className="information">
            상호 : (주)꿀빵이와앙꼬 | 대표 : 김덕화 | 사업자등록번호 :
            122-81-35423 | 통신판매업신고번호 : 2011-서울강남-0115 |
            사업자정보확인 대표번호 : 1172-1902 | <br />
            이메일 : nnning21_se@jiwon.com | 주소 : 서울특별시 강남구 테헤란로
            1004-104 | 호스팅제공 : (주)꿀빵이와앙꼬 |<br /> © DukHwa Kim Corp.
            All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
