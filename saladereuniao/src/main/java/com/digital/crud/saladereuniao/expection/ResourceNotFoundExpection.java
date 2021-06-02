package com.digital.crud.saladereuniao.expection;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExpection extends Exception {
	private static final long serialVersionUID = 1L;

	public ResourceNotFoundExpection(String message) {
		super(message);
	}

}
