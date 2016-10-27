package io.cn.controller;

import io.cn.domain.TimeCard;
import io.cn.repository.TimeCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by nazhirjackson on 10/26/16.
 */
@RestController
@CrossOrigin
public class TimeCardController {

    @Autowired
    TimeCardRepository timeCardRepository;

    @RequestMapping(value = "/timecard", method = RequestMethod.GET)
    public Iterable<TimeCard> getAllTimeCard(){
        return timeCardRepository.findAll();
    }


    @RequestMapping(value = "/timeCardAdd" , method = RequestMethod.POST)
    public @ResponseBody TimeCard submitTimeCard(@RequestBody TimeCard timeCard){
        timeCardRepository.saveAndFlush(timeCard);
        return timeCard;
    }

    @RequestMapping(value = "/timeCardEmail", method = RequestMethod.DELETE)
     public void delete(@RequestParam(name = "email") String email) {
        System.out.println(email);
       TimeCard timeCard = timeCardRepository.findByEmail(email);
        System.out.println(timeCard);
        timeCardRepository.delete(timeCard);



    }



}
