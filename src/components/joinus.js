import React from "react"
import { ButtonStyled, ItalicTitleStyled, JoinUsBannerStyled, JoinUsImageStyled, JoinUsTextStyled, SmallContactFormStyled, TitleStyled } from "./styled"

export const Joinus = () =>(
  <JoinUsBannerStyled>
    <JoinUsImageStyled/>
    <JoinUsTextStyled id="doe-met-ons-mee">
      <TitleStyled fontSize={"1.5rem"} color={"white"}>Wilt u lid worden? Doe met ons mee!</TitleStyled>
      <TitleStyled fontSize={"1.5rem"} color={"white"}>Contacteer ons!</TitleStyled>
      <div>Wij nodigen u graag uit voor een nadere kennismaking.</div>
      <SmallContactFormStyled method="post" action="#">
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Naam</ItalicTitleStyled></label>
          <div><input type="text" name="name" id="name" width="30rem"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Email</ItalicTitleStyled></label>
          <div><input type="email" name="email" id="email"/>
          </div>
        </div>
        {/*<div>
            <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Onderwerp</ItalicTitleStyled></label>
            <div><input type="text" name="subject" id="subject"/>
            </div>
          </div>*/}
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Bericht</ItalicTitleStyled></label>

          <div><textarea name="message" id="message" rows="5"/>
          </div>
        </div>
        <ButtonStyled type="submit">Stuur</ButtonStyled>
      </SmallContactFormStyled>

    </JoinUsTextStyled>
  </JoinUsBannerStyled>
)
