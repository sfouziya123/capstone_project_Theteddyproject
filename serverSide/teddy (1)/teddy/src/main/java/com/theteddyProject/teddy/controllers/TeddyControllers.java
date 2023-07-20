package com.theteddyProject.teddy.controllers;


import com.theteddyProject.teddy.model.teddy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/teddy")
public class teddycontrollers {
    @Autowired
    teddyService  teddyService;

    @PostMapping("/create")
    public teddy create (teddy teddy) {return teddyService.create(teddy);}

}
