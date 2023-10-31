import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/common/FlexWrapper.styled'
import { Container } from '../../../components/common/Container.styled'
import { theme } from '../../../styles/Theme'
import photo from '../../../assets/images/gigaChad.jpg'
import { font } from '../../../styles/Common'

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align='center' justify='space-around' wrap='wrap'>

					<div>
						<SmallText>Hi There</SmallText>
						<Name>I am <span>Giga Chad</span></Name>
						<MainTitle>A Web Developer.</MainTitle>
					</div>

					<PhotoWrapper>
						<Photo src={photo} />
					</PhotoWrapper>

				</FlexWrapper>
			</Container>
		</StyledMain>
	)
}

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;

  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  margin-top: 65px;

  &::before {
    content: '';
    width: 360px;
    height: 470px;

    border: 5px solid ${theme.colors.accentColor};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;

      top: -20px;
      left: 17px;
    }
  }
`

const MainTitle = styled.h1`
  ${font({ weight: 400, Fmax: 27, Fmin: 20 })}
`

const Name = styled.h2`
  margin: 10px 0;

  ${font({ family: 'Josefin Sans', weight: 700, Fmax: 50, Fmin: 36 })}
  letter-spacing: 2.5px;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accentColor};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`


const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

