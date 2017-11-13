import { keyframes } from '../../../styled-components';

const fadeOutAnim =  keyframes`
    from {
        opacity: 1;
        display: grid;
    }
    to {
        opacity: 0;
        display: none;
    }
`;

export default fadeOutAnim;