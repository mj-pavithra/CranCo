package com.Cranco.Cranco.Profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    private final ProfileRepository profileRepository;

    @Autowired
    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public Profile createProfile(ProfileDTO profileDTO) {
        Profile profile = new Profile();
        profile.setusername(profileDTO.getusername());
        profile.setbio(profileDTO.getbio());
        profile.setemail(profileDTO.getemail());
        profile.setphone(profileDTO.getphone());
        profile.setaddress(profileDTO.getaddress());
        profile.setcity(profileDTO.getcity());
        profile.setstate(profileDTO.getstate());
        return profileRepository.save(profile);
    }

    public Profile editProfile(long id, ProfileDTO profileDTO) {
        Profile profile = profileRepository.findByid(id);
        if (profile != null) {
            profile.setusername(profileDTO.getusername());
            profile.setbio(profileDTO.getbio());
            profile.setemail(profileDTO.getemail());
            profile.setphone(profileDTO.getphone());
            profile.setaddress(profileDTO.getaddress());
            profile.setcity(profileDTO.getcity());
            profile.setstate(profileDTO.getstate());
            return profileRepository.save(profile);
        }
        return null;
    }

    public Profile viewProfile(long id) {
        return profileRepository.findByid(id);
    }

    public void deleteProfile(long id) {
        Profile profile = profileRepository.findByid(id);
        if (profile != null) {
            profileRepository.delete(profile);
        }
    }
}
