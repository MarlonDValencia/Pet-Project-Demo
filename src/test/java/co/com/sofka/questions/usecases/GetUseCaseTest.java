package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
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
class GetUseCaseTest {
    @MockBean
    private QuestionRepository questionRepository;
    @SpyBean
    private GetUseCase getQuestion;

    @Test
    public void getUseCaseTest(){

        var questionDTO = new QuestionDTO("123564GHGSD", "Qué significa POO", "OPEN (LONG OPEN BOX)", "TECHNOLOGY AND COMPUTER", "Mensaje");
        var question= new Question();
        question.setId("1asd2153453");
        question.setQuestion("What id DDD in software?");
        question.setUserId("123");
        question.setType("OPEN (LONG OPEN BOX)");
        question.setCategory("TECHNOLOGY AND COMPUTER");

        Mockito.when(questionRepository.findById(Mockito.any(String.class))).thenReturn(Mono.just(question));

        var respuesta = getQuestion.apply("123");
        Assertions.assertEquals(respuesta.block().getQuestion(), question.getQuestion());
    }
}