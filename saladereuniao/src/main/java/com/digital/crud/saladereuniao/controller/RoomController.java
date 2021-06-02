package com.digital.crud.saladereuniao.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.digital.crud.saladereuniao.expection.ResourceNotFoundExpection;
import com.digital.crud.saladereuniao.model.Room;
import com.digital.crud.saladereuniao.repository.RoomRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api/v1/rooms")
public class RoomController {

	@Autowired
	private RoomRepository roomRepository;

	@RequestMapping(method = RequestMethod.GET)
	public List<Room> getAllRooms() {
		return roomRepository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Room> getRoomById(@PathVariable(value = "id") long roomId) throws ResourceNotFoundExpection {
		Room room = roomRepository.findById(roomId)
				.orElseThrow(() -> new ResourceNotFoundExpection("Room not found: " + roomId));
		return ResponseEntity.ok().body(room);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Room createRoom(@Valid @RequestBody Room room) {
		return roomRepository.save(room);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Room> updateRoom(@PathVariable(value = "id") Long roomId,
			@Valid @RequestBody Room roomDetails) throws ResourceNotFoundExpection {
		Room room = roomRepository.findById(roomId)
				.orElseThrow(() -> new ResourceNotFoundExpection("Room not found for this id: " + roomId));
		room.setName(roomDetails.getName());
		room.setDate(roomDetails.getDate());
		room.setStartHour(roomDetails.getStartHour());
		room.setEndHour(roomDetails.getEndHour());
		final Room updateRoom = roomRepository.save(room);
		return ResponseEntity.ok(updateRoom);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public Map<String, Boolean> deleteRoom(@PathVariable(value = "id") Long roomId) throws ResourceNotFoundExpection {
		Room room = roomRepository.findById(roomId)
				.orElseThrow(() -> new ResourceNotFoundExpection("Room not found for this id: " + roomId));

		roomRepository.delete(room);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
