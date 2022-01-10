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

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;
import static reactor.core.publisher.Mono.when;

@SpringBootTest
class UpdateUseCaseTest {

    @SpyBean
    private UpdateUseCase updateUseCase;

    @MockBean
    private QuestionRepository repository;

    @Test
    void updateUseCaseTest(){

        var questionDTO = new QuestionDTO("1", "123564GHGSD", "Qué significa POO", "OPEN (LONG OPEN BOX)", "TECHNOLOGY AND COMPUTER");

        var question = new Question("1","6s76578sf87d5f","Qué es un paradigma de programacion","OPEN(LONG OPEN BOX)","TECHNOLOGY AND COMPUTER");

        when(repository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));

        var result = updateUseCase.apply(questionDTO);

        Assertions.assertEquals(Objects.requireNonNull(result.block()),"1");
    }
}