package com.Cranco.Cranco.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

//import javax.validation.ConstraintViolation;
//import javax.validation.Validation;
//import javax.validation.Validator;
//import javax.validation.ValidatorFactory;
//
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
public class Validator {

    public class FirstNameValidator {
        private static final String first_name_pattern = "^[a-zA-Z]+$";
        public boolean firstnameisValid(String firstname) {
            Pattern pattern = Pattern.compile(first_name_pattern);
            Matcher matcher = pattern.matcher(firstname);
            return matcher.matches();
        }
    }

    public class LastNameValidator {
        private static final String last_name_pattern = "^[a-zA-Z]+$";
        public boolean lastnameisValid(String lastname) {
            Pattern pattern = Pattern.compile(last_name_pattern);
            Matcher matcher = pattern.matcher(lastname);
            return matcher.matches();
        }
    }

    public class DOBValidator {
        private static final String dob_pattern = "^[0-9]{4}-[0-9]{2}-[0-9]{2}$";
        public boolean dobisValid(String dob) {
            Pattern pattern = Pattern.compile(dob_pattern);
            Matcher matcher = pattern.matcher(dob);
            return matcher.matches();
        }
    }

    public class EmailValidator {
        private static final String email_pattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]+$";
        public boolean emailisValid(String email) {
            Pattern pattern = Pattern.compile(email_pattern);
            Matcher matcher = pattern.matcher(email);
            return matcher.matches();
        }
    }

    public class PasswordValidator {
        private static final String password_pattern = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$";
        public boolean passwordisValid(String password) {
            Pattern pattern = Pattern.compile(password_pattern);
            Matcher matcher = pattern.matcher(password);
            return matcher.matches();
        }
    }

    public class PhoneNumberValidator {
        private static final String phone_pattern = "^(07|09|011)[0-9]{9}$";
        public boolean phonenumberisValid(String phonenumber) {
            Pattern pattern = Pattern.compile(phone_pattern);
            Matcher matcher = pattern.matcher(phonenumber);
            return matcher.matches();
        }
    }

//    public int validateParameters(
//            @NotBlank String firstname,
//            @NotBlank String lastname,
//            @Email String email,
//            @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$") String dob,
//            @Pattern(regexp = "^\\d{10}$") String phonenumber,
//            @NotBlank String password) {
//        // Create a ValidatorFactory.
//        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
//
//        // Get a Validator from the factory.
//        Validator = factory.getValidator();
//
//        // Validate the parameters.
//        Set<ConstraintViolation<Object>> violations = validator.validate(
//                new Object[] {firstname, lastname, email, dob, phonenumber, password});
//
//        // If there were any validation errors, return an error code.
//        if (!violations.isEmpty()) {
//            return violations.size();
//        }
//
//        // Otherwise, return 0.
//        return 0;
//    }
//}
}
