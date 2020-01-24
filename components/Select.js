import styled from 'styled-components';

const BaseSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  text-transform: uppercase;
  border-radius: 20px;
  border: 0;
  display: block;
  font-size: 14px;
  font-weight: 900;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1.8em;
  max-width: 300px;
  text-align: center;
  text-transform: uppercase;
`;

export const SelectPrimary = styled(BaseSelect)`
  background-color: ${props => props.theme.cta.primary.background};
  background-image: url('data:image/svg+xml, \
    <svg width="100%" height="10px" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">\
      <path d="M 0 0 L 80 0 L 40 50 z" \
      style="fill: %23${props => props.theme.cta.primary.text.slice(1)};" />\
    </svg>');
  background-repeat: no-repeat;
  background-position: right 0.7em top 62%;
  background-size: 10px;
  color: ${props => props.theme.cta.primary.text};
`;
