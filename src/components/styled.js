import styled from "styled-components"

export const ItalicTitleStyled = styled.div`
  font-size: ${props => props.fontSize};
  font-style: italic;
  color: ${props => props.color};
`

export const TitleStyled = styled.h2`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: Poppins;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
`
export const Title2Styled = styled.h3`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: Poppins;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
`
export const Title3Styled = styled.h3`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: Poppins;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 1rem;
`

export const IntroStyled = styled.div`
  padding: ${props => props.padding};
  text-align: center;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position-x: center;
  background-position-y: 75%;
  filter: contrast(0.8);
   @media (min-width: 1200px) {
    padding: ${props => props.paddingDesktop};
  }
`

export const IntroColorStyled = styled.div`
  height: 100vh;
  padding: ${props => props.padding};
  text-align: center;
  background: ${props => props.color};
  background-size: cover;
  background-position-x: center;
  background-position-y: 75%;
  align-items: center;
  display: flex;
  //height: 40rem;
  //filter: contrast(0.8);
   @media (min-width: 1200px) {
    padding: ${props => props.paddingDesktop};
  }
  animation: pulse 6s 1;
`

IntroStyled.defaultProps = {
  padding: "200px 0",
  paddingDesktop: "350px 0",
}

export const FeatureBlockStyled = styled.div`
  background-color: ${props => props.backgroundColor};
  text-align:center;
  padding: 7%;
  width:100%;
  @media (min-width: 768px) {
    padding: 7%;
    width:50%;
  }  
  @media (min-width: 1200px) {
    width: 25%;
    padding: 2rem;
  }
`

export const FeatureContainerStyled = styled.div`
 display: flex;
 width:100%;
 flex-direction: column;
 
 @media (min-width: 768px) {
  flex-direction: unset;
  flex-wrap: wrap;
 } 
 @media (min-width: 1200px) {
  flex-direction: unset;
  flex-wrap: nowrap;
 }
`

export const SectionStyled = styled.div`
  text-align:center;
  padding: 2rem 0;
  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`

export const ColumnStyled = styled.div`
  color: black;
  column-count: unset;
  @media (min-width: 768px) {  
     column-count: 2;
     column-gap: 30px;
  }
`

export const BannerStyled = styled.div`
  //background-color: #f7a145;
  background-color: #dadada;
  padding: 1% 5%;
  width:30%;
  width: 100%;
  text-align:center;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:left;
  }  
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:left;

  }
`

export const BannerImgStyled = styled.div`
  border-radius: 50%;
  //width: 30%;
  padding: 30px;
`

export const BannerTextStyled = styled.div`
  //width: 70%;
   @media (min-width: 768px) {
      width: 100%;
    }  
  @media (min-width: 1200px) {
    width: 100%;
  }
`

export const FooterStyled = styled.footer`
  //background: #a2473e;
  background: #212121;
  color: #71717f;
  font-family: Poppins;
  font-size: 0.8rem;
  font-weight: 300;
  padding: 3rem;
  
  a{
    text-decoration: none;
    color: inherit;
    font-weight: 500;
  }
`

export const LeaderShipContainerStyled = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
      flex-wrap: wrap;

  }
`

export const LeaderShipStyled = styled.div`
    margin: 5rem auto 0 auto;
    width: 10%;
    text-align: center;

  
  img{
    border-radius: 0%;
    margin-bottom: 1rem;
  }
  
    @media (min-width: 768px) {
      margin: 1rem 5rem 4rem 5rem;
      max-width: 13%;
      flex-grow: 1;
      display: inline-block;
      flex: 1 0 21%;
  }
`

export const EventStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  border-bottom: 1px darkgray solid;
  padding-bottom: 1rem; 
  @media (min-width: 768px) {
    flex-direction: row;
  } 
  &:last-child {
     border-bottom: none;
  }

`

export const EventDayStyled = styled.div`
  width: 7.5rem;
  @media (min-width: 768px) {
    text-align: right;
  } 
`

export const EventDateStyled = styled.div`
  display: flex;
  width: 16rem;

`
export const AStyledContainer = styled.div`
  a{
      text-transform: capitalize;
      color: #a2473e;
      text-decoration: none;
      transition: 0.1s;
    }
  a:hover{
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`

export const LinkBlockStyled = styled.div`
  padding-bottom: 1rem;
  font-family: Poppins;
  font-size: 0.8rem;
`

export const ContactStyled = styled.div`
  background-color: #424555;
//  background-color: #25797f;
//  padding: 2%;
  color: white;
  padding-bottom: 3rem;
  input{
    width: 100%;
    border: 1px solid #eaebec;
  } 
  textarea{
    width: 100%;
    border: 1px solid #eaebec;
  }
`

export const ButtonStyled = styled.button`
  padding: 1rem;
  border-radius: 5%;
  border: 1px solid #eaebec;
  font-family: Poppins;
  font-weight: 600;
  text-transform: uppercase;
  color:#707176;
`

export const SmallContactFormStyled = styled.form`
  margin-top: 2rem;
  input{
    width: 100%;
    border: 1px solid #eaebec;
  }
  
  textarea{
    width: 100%;
    border: 1px solid #eaebec;
  }
`

export const JoinUsBannerStyled = styled.div`
 @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
  }  
`

export const JoinUsTextStyled = styled.div`
  color: white;
  background: #d97578;
  padding: 3rem;
  height: 36rem;
  @media (min-width: 768px) {
    padding: 4rem;
    width: 50%;
  }  
`

export const JoinUsImageStyled = styled.div`
  background: url("https://my-religion.cmsmasters.net/wp-content/uploads/2016/05/Depositphotos_76136149_original-1.jpg");
  height: 36rem;
  background-size: cover;
  background-position-x: center;
  background-position-y: 75%;
  filter: contrast(0.8);
  @media (min-width: 768px) {
    width: 50%;
    background-position-y: inherit;
  }  
`
export const TwoBlockTextStyled = styled.div`
  font-family: Poppins;
  color: black;
  background: ${props => props.background_color};
  padding: 3rem;
  //height: 25rem;
  border-bottom: 1px solid ${props => props.border_color} ;
  //border-top: 1px solid ${props => props.border_color} ;
  @media (min-width: 768px) {
    padding: 4rem;
    width: 50%;
    border: none;
    height: 25rem;
  }  
`
export const TwoBlockImgStyled = styled.div`
 // background: url("https://my-religion.cmsmasters.net/wp-content/uploads/2016/05/Depositphotos_76136149_original-1.jpg");
   color: white;
  background-color: ${props => props.background_color};
  //height: 25rem;
  padding: 3rem;
  background-size: cover;
  background-position-x: center;
  background-position-y: 75%;
  @media (min-width: 768px) {
    width: 50%;
    background-position-y: inherit;
    height: 25rem;
  }  
`
export const MyDotStyled = styled.span`
  color: ${props => props.color};
  font-family: Rokkitt;
`

MyDotStyled.defaultProps = {
  color: "#d97578",
}

export const ContactLabelStyled = styled.div

export const TrackingInContractTextStyled = styled.div`
    animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s both;
`

export const LinkedInButton = styled.div`
  background: rgba(0,115,177,0.26);
  color: white;
  text-align: center;
  border-radius: 2px;
  font-family: 'Muli', sans-serif;
  position: fixed;
  bottom: 0;
  right: 0;
  padding:1rem 0;
 
 a{
  padding: 1rem;
 }
 
 :hover{
  background: rgb(0, 115, 177);
    transition: .5s all;   
 }
`

export const BackToTopStyled = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: rgba(217,117,120,0.8);
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  text-align: center;
  padding: 0.9rem;
  color: white;
  font-family: Poppins;
  //border-right: 1px solid gray;
  //border-bottom: 1px solid gray;
  cursor:pointer;
   @media (min-width: 768px) {
   // display: none;
  } 
  
  : hover {
    background-color: rgba(217,117,120);
    transition-duration: 0.2s;
  }
`

export const FlexContainerStyled = styled.div`
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    text-align: center;
    margin-bottom: 4rem;

`

export const FlexItemStyled = styled.div`
    padding: 0 3rem;
    flex-basis: 33.333333%;
    img {
      height: 5rem;
    }
    
`

