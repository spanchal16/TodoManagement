package com.myproject.rest.webservices.restful_web_services.helloworld;

public class HelloWorldBean {
    String message;
    public HelloWorldBean(String msg) {
        this.message = msg;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}
