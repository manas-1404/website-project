import React from 'react';

function FrontPage() {

    //change the image link here
  const backgroundImageUrl = "https://lh3.googleusercontent.com/pw/AJFCJaUFvUU6BvhILoe0CaVJ1zx01Rfc1y2KRk0Wbzwyr0cZ9-s2ZC-FlXISVlI9hFHJvA3iWO8E0I8iFrKhl__ka_MVJM_tu7EJ_ui1z0u3P7E5DkRaJly6Q0zAm1qZygaXZaYcziGKRPe3XTrXBpfAbapZ8w=w1111-h855-s-no?authuser=0";

  return (
    <div className="s-bg-image s-bg-blurred s-bg-light-text s-new-title-section s-section _animate-background background-image lazyloaded transition" style={{
      backgroundRepeat: 'no-repeat',
      backgroundSize: '1519.2px 854.356px',
      backgroundColor: 'transparent',
      backgroundPosition: '0px -107.678px',
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundAttachment: 'fixed',
      minHeight: '0px',
      paddingTop: '274px',
      paddingBottom: '275px'
    }}>
      <div className="blurred-layer loaded css-1tnf9eu css-1ksxsxc0 loaded"></div>
      <div className="container" style={{ zIndex: 3 }}>
        <div className="sixteen columns">
          <div className="s-title-group s-only-title-group">
            <div className="s-subtitle">
              <div className="s-component s-text s-animation-page-slide_in">
                <div>
                  <div className="s-component-content s-font-heading" style={{ whiteSpace: 'pre-wrap' }}>
                    <h4>
                      <p style={{ fontSize: '130%' }} className="s-text-color-white">
                        <em>Hey, I'm</em>
                      </p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-title sb-title-center-align">
              <div className="s-component s-text s-animation-page-slide_in">
                <div>
                  <div className="s-component-content s-font-title" style={{ whiteSpace: 'pre-wrap' }}>
                    <h1>
                      <p style={{ textAlign: 'center', fontSize: '130%' }}>
                        <strong>MANAS GOWDA</strong>
                      </p>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
