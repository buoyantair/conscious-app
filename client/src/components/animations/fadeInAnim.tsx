import { keyframes } from '../../styled-components';

const fadeInAnim =  keyframes`
    from {
        opacity: 0;
        display: none;
    }
    to {
        opacity: 1;
        display: grid;
    }
`;

export default fadeInAnim;