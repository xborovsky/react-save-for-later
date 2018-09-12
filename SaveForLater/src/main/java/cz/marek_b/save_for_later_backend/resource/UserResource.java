package cz.marek_b.save_for_later_backend.resource;

import cz.marek_b.save_for_later_backend.entity.User;
import cz.marek_b.save_for_later_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserResource {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity createIfNotExists(@RequestBody User user) {
        if (userService.findByProviderId(user.getProviderId()) == null) {
            userService.createUser(user);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
