package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.User;
import co.com.sofka.questions.model.UserDTO;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class MapperUserUtils {
    public Function<UserDTO, User> mapperToUser() {
        return updateUser -> {
            var user = new User();
            user.setEmail(updateUser.getEmail());
            user.setFirstName(updateUser.getFirstName());
            user.setLastName(updateUser.getLastName());
            return user;
        };
    }

    public static Function<User, UserDTO> mapEntityToUser() {
        return entity -> new UserDTO(
                entity.getEmail(),
                entity.getFirstName(),
                entity.getLastName()
        );
    }
}
