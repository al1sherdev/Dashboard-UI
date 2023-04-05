import curved6 from '../../assets/images/curved-6.jpg';
import curved14 from '../../assets/images/curved14.jpg';
import styled from 'styled-components';

export const RegisterSec = styled.div`
    width: 100%;
    height: 100vh;
    margin: -1rem 0rem;
    padding: 1.5rem 1rem;
    background: #fff;
    position: relative;
    overflow-x: hidden;
    z-index: 1;
        .background_img {
            position: absolute;
            top: 0;
            right: -70px;
            width: 45%;
            height: 95%;
            transform: skewX(-10deg);
            border-radius: 1rem;
            background: url(${curved6}) 100% 100% / cover;
            z-index: -1;    
        }
        .top__nav {
        width: 90%;
        height: 80px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(255, 255, 255, 0.75);
        border-radius: 12px;
        box-shadow: 0 1px 10px -5px rgba(12, 12, 12, 0.61);
        h4 {
            color: var(--gray2);
            font-size: 1.4rem;
            font-weight: 700;
        }
        button {
            color: #fff;
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
` 
export const FormSec = styled.div`
    width: 60%;
    min-height: 70vh;
    margin: 2rem auto;
   .intro {
        h2 {
            font-size: 36px;
            font-weight: 700;
            color: var(--blue);
        }
        p {
            color: var(--gray)
        }
   }
   form {
    border: none;
    outline: none;
    input {
        margin: 0.8rem 0;
        font-size: .9rem;
        padding: 8px;
    }
    label {
        color: var(--gray2);
        font-size: .9rem;
        font-weight: 600;
    }
    button {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 700;
        width: 100%;
        &:hover {
            color: #fff;
        }
    }
    p {
        font-size: 1rem;
        font-weight: 500;
        color: var(--gray);
        padding: 1rem 0;
        span {
            margin-left: 8px;
            color: var(--blue);
        }
    }
   }
   .remember {
    color: var(--gray);
    font-size: .9rem;
   }
`
export const AuthFooterSec = styled.div`
    width: 50%;
    margin: auto;
    .nav_links {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .nav_link {
            font-size: 1rem;
            font-weight: 600;
            a {
                color: var(--gray);
                &:hover {
                    color: var(--gray2);
                }
            }
        }
    }
` 
export const SignUpBacImg = styled.div`
    position: absolute;
    top: 5%;
    left: 0;
    transform: translateX(1%);
    width: 98%;
    height: 60%;
    margin: auto;
    border-radius: 1rem;
    background: url(${curved14}) 100% / cover;
    z-index: -1;
`
export const SignUpSec = styled.div`
    width: 50%;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 3.6rem;
        color: #fff;
        font-weight: 700;
    }
    p {
        color: #fff;
        font-weight: 500;
        font-size: 1.1rem;
        text-align: center;
    }
    .card {
        width: 70%;
        height: 100%;
        border-radius: 18px;
        padding: 1.2rem 0;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        box-shadow: 0 1px 10px -5px rgba(12, 12, 12, 0.61);
        .title {
            font-size: 1.4rem;
            color: var(--gray2);
        }
        .with {
            display: flex;
            justify-content: space-evenly;
            margin: 10px 0;
            div {
                width: 50px;
                height: 50px;
                border-radius: 14px;
                padding: 14px;
                background-color: #f2f4f5;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                margin: 0 6px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
        .more {
            border-bottom: 1px solid var(--gray);
            font-size: 1rem;
            font-weight: 600;
            color: var(--gray);
        }
        form {
            margin: 10px 0;
            label, input {
                font-size: 0.9rem;
                font-weight: 600;
                color: var(--gray);
            }
            input {
                margin: 8px 0;
            }
            .remember {
                font-size: 1rem;
                font-weight: 600;
                color: var(--gray);
            }
            button {
                color: #fff;
                font-size: 1.1rem;
                font-weight: 700;
            }
            p {
                color: var(--gray);
                margin: 8px 0;
                span {
                    color: var(--blue);
                    margin-left: 6px;
                    font-weight: 600;
                }
            }
        }
    }
`