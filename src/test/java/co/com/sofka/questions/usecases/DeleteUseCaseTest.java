package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DeleteUseCaseTest {
    @MockBean
    private AnswerRepository answerRepository;
    @MockBean
    private QuestionRepository questionRepository;

    @SpyBean
    DeleteUseCase useCase;

    @Test
    void deleteUseCaseTest(){

        var question = new QuestionDTO("6s76578sf87d5f","Qué es un paradigma de programacion","OPEN(LONG OPEN BOX)","TECHNOLOGY AND COMPUTER");

        var answerDTO = new AnswerDTO("123564GHGSD", "xxxxx", "Programación orientada a objetos");

        var answer = new Answer("7654321", "xxxxx", "123564GHGSD", "Programación orientada a objetos", 1);

        Mockito.when(questionRepository.deleteById("1as")).thenReturn(Mono.empty());
        Mockito.when(answerRepository.deleteByQuestionId("1as")).thenReturn(Mono.empty());

        var result = useCase.apply("1as").block();
        Assertions.assertNull(result);

        Mockito.verify(answerRepository, Mockito.times(1)).deleteByQuestionId("1as");
    }
}