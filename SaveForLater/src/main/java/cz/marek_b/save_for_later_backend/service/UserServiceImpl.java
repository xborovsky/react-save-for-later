package cz.marek_b.save_for_later_backend.service;

import cz.marek_b.save_for_later_backend.dao.UserDao;
import cz.marek_b.save_for_later_backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User findById(long id) {
        return userDao.findById(id).get();
    }

    @Override
    public User findByProviderId(Long providerId) {
        return userDao.findByProviderId(providerId);
    }

    @Override
    @Transactional
    public User createUser(User user) {
        userDao.save(user);
        return user;
    }

}
