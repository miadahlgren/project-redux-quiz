/* eslint-disable max-len */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { quiz } from 'reducers/quiz'
import { SummaryStyling } from 'styling/SummaryStyling'
// import { nextBtn } from 'components/CurrentQuestion'
import restartBtn from 'assets/svg/undo-icon.svg';
/* import background from 'assets/welcome-page.jpg' */
import { Footer } from 'components/Footer';
import styled from 'styled-components/macro';
import { InnerWrapper, OuterWrapper } from 'styling/Wrappers';
/* import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'; */
import summaryImage from 'assets/cinema.jpg'

export const Summary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const answers = useSelector((store) => store.quiz.answers)
  const nrOfCorrect = useSelector((store) => store.quiz.answers.filter((answer) => answer.isCorrect));
  console.log(nrOfCorrect);
  const nrOfQuestion = useSelector((store) => store.quiz.questions);

  const handleRestart = () => {
    dispatch(quiz.actions.restart())
    navigate('/')
  }
  return (
    <OuterWrapper>
      <SummaryWrapper>
        <BackgroundWrapper>
          <SummaryStyling>
            <h1>The End!</h1>
            <div className="credits-wrapper">
              {answers.map((answer) => (
                <SummaryContainer
                  className="table-div"
                  key={answer.question.id}>
                  <tr>
                    <td><p className="question-p">Question {answer.question.id}</p></td>
                    <td>
                      <span className="isCorrect-span"> {answer.isCorrect ? ' ✅' : ' ❌'}
                      </span>
                    </td>
                    {/* <td><p className="answer-p">{answer.answer}</p> </td> */}
                  </tr>
                </SummaryContainer>
              ))}
            </div>
            <CorrectContainer>
              <h2> {`${nrOfCorrect.length}`}/{nrOfQuestion.length} correct </h2>
            </CorrectContainer>
            <Restart>
              <nextBtn onClick={handleRestart} type="button"><img
                src={restartBtn}
                width="50"
                height="50"
                viewBox="0 0 24 24"
                alt="next question"
                className="" />
              </nextBtn>
            </Restart>
          </SummaryStyling>
        </BackgroundWrapper>
        <Footer />
      </SummaryWrapper>
    </OuterWrapper>
  )
}

const SummaryWrapper = styled(InnerWrapper)`
width: 100%;
height: 100vh;
`

const BackgroundWrapper = styled.div`
background-image: url(${summaryImage});
width: 100%;
height: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
`

const Restart = styled.div`
position: absolute;
top: 74%;
left: 74%;

@media (min-width:768px){
top: 7%;
left: 80%
}

//Iphone SE
@media (max-width:389px){
  top: 70%;
left: 74%;
}

`
const SummaryContainer = styled.div`

`

const CorrectContainer = styled.div`
margin: 20px auto;

h2 {
  color: orange;
  font-size: 50px;
}
`