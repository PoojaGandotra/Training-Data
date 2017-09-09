package com.anz.travel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.anz.travel.models.Flight;
import com.anz.travel.repo.FlightRepository;

@Controller
public class FlightController {
	@Autowired
	private FlightRepository flightRepository;
	
	@RequestMapping ("/index")
	public String loadHome(Model model){
		
		model.addAttribute("flightList", flightRepository.findAll());
	
		System.out.println("Hello Inside Home");
		return "home";
	}
      @RequestMapping(value = "/addFlight", method= RequestMethod.POST)
	  public String createFlightData(@ModelAttribute Flight flight)
	  {
		  
    	  flightRepository.save(flight);
    	  return "redirect:index";
		  
	  }
	
}
