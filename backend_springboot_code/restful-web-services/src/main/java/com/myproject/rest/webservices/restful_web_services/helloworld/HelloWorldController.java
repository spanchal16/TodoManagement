package com.myproject.rest.webservices.restful_web_services.helloworld;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping(path = "/hello-world")
    public HelloWorldBean helloWorld() {
        return new HelloWorldBean("Hello");
    }
}
