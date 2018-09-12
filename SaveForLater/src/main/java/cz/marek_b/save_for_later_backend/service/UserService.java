package cz.marek_b.save_for_later_backend.service;

import cz.marek_b.save_for_later_backend.entity.User;

public interface UserService {

    User findById(long id);

    User findByProviderId(Long providerId);

    User createUser(User user);

}
