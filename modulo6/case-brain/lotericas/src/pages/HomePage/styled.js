import styledComponents from "styled-components";

export const HomeContainer = styledComponents.div`

display: flex;
background-color: #EFEFEF;
height: 100vh;
width: 100vw;
font-family: 'Roboto', sans-serif;
justify-content: space-between;

.right-side{
  .balls{
    display: flex;
    width: 70vw;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 46vh;
  }
  .circle{   
    background: white;
    border-radius: 50%;
    padding: 1rem 1rem;
    margin: 3px;
    
  }
  .disclaimer{
    left: 47.62%;
    right: 11.75%;
    top: 89.17%;
    bottom: 8.98%;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    position: absolute;
  }
}

.left-side{
  display: flex;
  background-color: #6BEFA3;
  width: 30vw;
  // border-radius: 30px;

  select{
    border-radius: 5px;
    border: 0px solid white;
    position: absolute;
    height: 35px;
    width: 150px;
    left: 6%;
    right: 80.51%;
    top: 8.52%;
    bottom: 87.3%;
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.05));
  }

.result-logo{
  p{
    position: absolute;
    right: 73.57%;
    top: 45.43%;
    bottom: 49.52%;
    left: 9.81%;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 37px;
    color: #FFFFFF;
  }

  img{
    position: absolute;
    left: 5.99%;
    right: 90.31%;
    top: 48.43%;
    bottom: 49.52%;
    width: 36px;
    height: 32px;
  }
}

.contest-title{
  p{

    left: 6%;
    right: 84.83%;
    top: 84.76%;
    bottom: 11.84%;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 17px;
    letter-spacing: 0.135em;
    position: absolute;
    color: #FFFFFF;
  }
}

.name-and-date{
  left: 6%;
  right: 77.69%;
  top: 89.49%;
  bottom: 8.59%;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  color: #FFFFFF;
  position: absolute;
  }
}
`

