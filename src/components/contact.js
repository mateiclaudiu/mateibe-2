import React from "react"
import { PageContainer } from "./page-container"
import { SectionTitleForDarkMode } from "./section-title"
import { ButtonStyled, ContactStyled, ItalicTitleStyled } from "./styled"
import Layout from "./layout"

export const Contact = () => (
  <ContactStyled>
    <PageContainer>
      <SectionTitleForDarkMode title={"Contact"} subtitle={"let me buy you an espresso"}/>
      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Name</ItalicTitleStyled></label>
          <div><input type="text" name="name" id="name" width="30rem"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Email</ItalicTitleStyled></label>
          <div><input type="email" name="email" id="email"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Subject</ItalicTitleStyled></label>
          <div><input type="text" name="subject" id="subject"/>
          </div>
        </div>
        <div>
          <label><ItalicTitleStyled fontSize={"0.8rem"} color={"white"}>Message</ItalicTitleStyled></label>

          <div><textarea name="message" id="message" rows="5"/>
          </div>
        </div>
        <ButtonStyled type="submit">Send</ButtonStyled>
      </form>
    </PageContainer>
  </ContactStyled>
)
