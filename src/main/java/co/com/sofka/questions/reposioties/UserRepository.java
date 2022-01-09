package co.com.sofka.questions.reposioties;


import co.com.sofka.questions.collections.User;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface UserRepository extends ReactiveCrudRepository<User, String> {
    Mono<String> getUserByEmail(String email);
}
