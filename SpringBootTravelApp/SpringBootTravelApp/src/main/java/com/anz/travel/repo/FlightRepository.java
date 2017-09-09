package com.anz.travel.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.transaction.annotation.Transactional;

import com.anz.travel.models.Flight;

@Transactional
public interface FlightRepository extends MongoRepository<Flight,String>{

}
