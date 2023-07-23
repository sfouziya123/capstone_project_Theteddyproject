package com.theteddyProject.teddy.service;

import com.theteddyProject.teddy.model.teddy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface teddyService {
    public teddy create(teddy Information);

    public List<teddy> getAllteddy();

    public teddy update(teddy teddy );

    public String deleteTeddy(teddy teddy );

}
