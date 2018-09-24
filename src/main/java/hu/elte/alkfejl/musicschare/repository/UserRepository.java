package hu.elte.alkfejl.musicschare.repository;

import hu.elte.alkfejl.musicschare.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
}
