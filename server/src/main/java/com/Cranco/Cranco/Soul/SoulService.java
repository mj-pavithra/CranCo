package com.Cranco.Cranco.Soul;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SoulService {

    private static SoulRepository soulRepository;
    @Autowired
    public SoulService(SoulRepository soulRepository) {
        this.soulRepository = soulRepository;
    }
    public SoulDto addSoul(SoulRequest request) {
        List<Soul> soulByRegNo = soulRepository.findByVehicleRegNo(request.getVehicleRegNo());
        if(!soulByRegNo.isEmpty()) {
            throw new IllegalStateException("Registration Number Already Taken!");
        }
        Soul newSoul = new Soul();
        newSoul.setVehicleProfileName(request.getVehicleProfileName());
        newSoul.setVehicleManufacturer(request.getVehicleManufacturer());
        newSoul.setVehicleType(request.getVehicleType());
        newSoul.setVehicleManuYear(request.getVehicleManuYear());
        newSoul.setVehicleRegNo(request.getVehicleRegNo());

        Soul savedSoul = soulRepository.save(newSoul);
        return mapToDto(savedSoul);
    }

    public SoulDto mapToDto(Soul soul) {
        SoulDto soulDto = new SoulDto();
        soulDto.setSoulId(soul.getSoulId());
        soulDto.setVehicleManufacturer(soul.getVehicleManufacturer());
        soulDto.setVehicleType(soul.getVehicleType());
        soulDto.setVehicleManuYear(soul.getVehicleManuYear());
        soulDto.setVehicleRegNo(soul.getVehicleRegNo());
        soulDto.setVehicleProfileName(soul.getVehicleProfileName());

        return soulDto;
    }

    public List<SoulDto> allSouls(){
        List<Soul> SoulList = soulRepository.findAll();
        return SoulList.stream().map(this::mapToDto).toList();
    }

    public SoulDto soulDetails(Long soulId){
        Optional<Soul> optionalSoul = soulRepository.findById(soulId);
        return optionalSoul.map(this::mapToDto).orElse(null);
    }

    public SoulDto updateSoul(SoulRequest request, Long soulId){
        Optional<Soul> optionalSoul = soulRepository.findById(soulId);
        if(optionalSoul.isEmpty()){
            throw new IllegalStateException("Soul not found");
        }

        Soul existingSoul = optionalSoul.get();
        existingSoul.setVehicleProfileName(request.getVehicleProfileName());
        existingSoul.setVehicleType(request.getVehicleType());
        existingSoul.setVehicleManufacturer(request.getVehicleManufacturer());
        existingSoul.setVehicleManuYear(request.getVehicleManuYear());
        existingSoul.setVehicleRegNo(request.getVehicleRegNo());

        Soul updateSoul = soulRepository.save(existingSoul);
        return mapToDto(updateSoul);
    }

    public Boolean deleteSoul(Long soulId) {
        Optional<Soul> optionalSoul = soulRepository.findById(soulId);
        if(optionalSoul.isEmpty()) {
            throw new IllegalStateException("Soul Not Found!");
        }
        soulRepository.deleteById((soulId));
        return true;
    }
}
