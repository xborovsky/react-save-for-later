package cz.marek_b.save_for_later_backend.dao;

import cz.marek_b.save_for_later_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Long> {

    User findByProviderId(Long providerId);

}
