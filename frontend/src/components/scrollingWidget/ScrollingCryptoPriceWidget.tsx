import React from 'react'
import { Helmet } from 'react-helmet';

const ScrollingCryptoPriceWidget = () => {
    return (
        <div className='flex justify-center'>
          <Helmet>
            <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>
          </Helmet>
          <div className="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10"></div>
        </div>
      );
}

export default ScrollingCryptoPriceWidget