import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/questionActions'
import { Question } from '../components/Question'

const QuestionsPage = ({ dispatch, loading, questions, hasErrors }) => {

    const [state, setstate] = useState({
        category: ""
    })

    useEffect(() => {
        dispatch(fetchQuestions())
    }, [dispatch])

    const renderQuestions = (prop) => {
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>
        if (prop === "All") {
            return (questions.map(question => <Question key={question.id} question={question} excerpt />))
        }
        return (questions.filter(question => question.category === prop)).map(question => <Question key={question.id} question={question} excerpt />)
    }

    const onClickAll = () => {
        state.category = setstate({
            category: "All"
        });
    }

    const onClickTech = () => {
        state.category = setstate({
            category: "TECHNOLOGY AND COMPUTER"
        });
    }
    const onClickSciences = () => {
        state.category = setstate({
            category: "SCIENCES"
        });
    }
    const onClickDev = () => {
        state.category = setstate({
            category: "SOFTWARE DEVELOPMENT"
        });
    }
    const onClickSocial = () => {
        state.category = setstate({
            category: "SOCIAL SCIENCES"
        });
    }
    const onClickLang = () => {
        state.category = setstate({
            category: "LANGUAGE"
        });
    }

    return (
        <div className='container'>
            <div class="input-group rounded container">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
            </div>
            <section>
                <h3>Filters</h3>
                <div>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <button onClick={onClickAll} className="btn mx-1 button" >All</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={onClickTech} className="btn mx-1 button" >Tech</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={onClickSciences} className="btn mx-1 button" >Sciences</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={onClickDev} className="btn mx-1 button" >SoftwareDev</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={onClickSocial} className="btn mx-1 button" >Social</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={onClickLang} className="btn mx-1 button" >Language</button>
                        </li>
                    </ul>
                </div>
            </section>
            <h1>Questions</h1>
            {(state.category) ? (
                renderQuestions(state.category)
            ) : (renderQuestions())}
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    questions: state.question.questions,
    hasErrors: state.question.hasErrors,
})

export default connect(mapStateToProps)(QuestionsPage)
