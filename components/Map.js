import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 250px;
  margin-top: 22px;
  position: relative;
  text-align: right;
  width: 100%;

  @media (min-width: 768px) {
    height: 500px;
  }
`;

const Canvas = styled.div`
  overflow: hidden;
  background: none !important;
  height: 250px;
  width: 100%;

  @media (min-width: 768px) {
    height: 500px;
  }
`;

const IFrame = styled.iframe`
  border: none;
  height: 250px;
  width: 100%;

  @media (min-width: 768px) {
    height: 500px;
  }
`;

export function Map() {
  return (
    <Wrapper>
      <Canvas>
        <IFrame
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=ruta%20n&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        />
      </Canvas>
    </Wrapper>
  );
}
