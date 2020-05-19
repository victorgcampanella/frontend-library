import styled from 'styled-components'

export const ContainerHeader = styled.div`
  background: #fff;
  padding: 0 30px;
`

export const Content = styled.div`
  height: 60px;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items:center;

    h1 {
      font-size: 35px;
      font-weight: bold;
      color: #2770B4;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #898C8C;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    h1 {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
      height: 40px;
      border-radius: 50%;
  }
`