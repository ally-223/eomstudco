import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";
import Button from "components/misc/Buttons";

const Container = tw(ContainerBase)`my-8 lg:my-10 bg-white text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl text-green-900 mb-0`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`
const StatKey = tw.div`text-base font-medium`
const StatValue = tw.div`text-base sm:text-base md:text-base lg:text-base font-black`

export default ({
  subheading = "See more:",
  heading = "Important Links",
  description = "N/A",
  stats = [
    {
      key: "Tuesday, September 9th",
      value: "First day of school",
    },
    {
      key: "Thursday, September 11th",
      value: "Spirit Day",
    },
    {
      key: "October 19th",
      value: "Midterm Report Cards",
    },
  ]
}) => {
  return (
    <Container>

      <ContentWithPaddingXl>
        <HeadingContainer>
          <Heading>Important Links</Heading>
          {/* {description && <Description>{description}</Description>} */}
        </HeadingContainer>
      </ContentWithPaddingXl>
      <StatsContainer>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vS-f7LWijhh1wbUjIHE4x2svPY_eKjvcIdMFyqXnmHxcMU1FnbO9iNOifOdBMTJmOMeRPTe3EVKAy-o/pub?embedded=true" height= "800px" width= "900px" ></iframe>
      </div>
      </StatsContainer>
      {/* <ContentWithPaddingXl>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
        </HeadingContainer>
      </ContentWithPaddingXl> */}
    </Container>
  );
};