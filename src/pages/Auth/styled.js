import styled from "styled-components";
import curved6 from '../../assets/images/curved-6.jpg';
export const RegisterSec = styled.div`
    width: 100%;
    height: 100vh;
    margin: -2rem -1rem;
    padding: 1.5rem 1rem;
    background: #fff;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    z-index: 1;
        .background_img {
            position: absolute;
            top: 0;
            right: -70px;
            width: 45%;
            height: 80%;
            transform: skewX(-10deg);
            border-radius: 1rem;
            background: url(${curved6}) 100% 100% / cover;
            z-index: -1;
        }
` 