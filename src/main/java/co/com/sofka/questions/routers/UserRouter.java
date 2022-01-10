package co.com.sofka.questions.routers;

import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.usecases.CreateUseCase;
import co.com.sofka.questions.usecases.CreateUserUseCase;
import co.com.sofka.questions.usecases.GetUseCase;
import co.com.sofka.questions.usecases.GetUserUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.function.Function;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class UserRouter {

    @Bean
    public RouterFunction<ServerResponse> getUser(GetUserUseCase getUserUseCase) {
        return route(
                GET("/getUser/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(getUserUseCase.apply(
                                        request.pathVariable("id")),
                                UserDTO.class
                        ))
        );
    }


    @Bean
    public RouterFunction<ServerResponse> createUser(CreateUserUseCase createUserUseCase) {
        Function<UserDTO, Mono<ServerResponse>> executor = userDTO -> createUserUseCase.apply(userDTO)
                .flatMap(result -> ServerResponse.ok()
                        .contentType(MediaType.TEXT_PLAIN)
                        .bodyValue(result));
        return route(
                PUT("/createUser").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(UserDTO.class).flatMap(executor)
        );
    }
}
