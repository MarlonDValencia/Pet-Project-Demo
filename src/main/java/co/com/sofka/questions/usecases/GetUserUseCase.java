package co.com.sofka.questions.usecases;

import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.reposioties.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;
@Service
@Validated
public class GetUserUseCase implements Function<String, Mono<UserDTO>> {
    private final UserRepository userRepository;
    private final MapperUserUtils mapperUserUtils;

    public GetUserUseCase(MapperUserUtils mapperUserUtils,UserRepository userRepository) {
        this.userRepository = userRepository;
        this.mapperUserUtils = mapperUserUtils;
    }

    @Override
    public Mono<UserDTO> apply(String id) {
        Objects.requireNonNull(id, "Id is required");
        return userRepository.findById(id)
                .map(MapperUserUtils.mapEntityToUser());
    }


}
