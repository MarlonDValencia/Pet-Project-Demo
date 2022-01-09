package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.User;
import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.reposioties.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

@Service
@Validated
public class CreateUserUseCase implements SaveUser{
    private final UserRepository userRepository;
    private final MapperUserUtils mapperUserUtils;

    public CreateUserUseCase(MapperUserUtils mapperUserUtils,UserRepository userRepository) {
        this.mapperUserUtils = mapperUserUtils;
        this.userRepository = userRepository;
    }

    @Override
    public Mono<String> apply(UserDTO newUser) {
        return userRepository
                .save(mapperUserUtils.mapperToUser().apply(newUser))
                .map(User::getEmail);
    }

}
