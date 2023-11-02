package com.Cranco.Cranco.Soul;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/soul")
@CrossOrigin
public class SoulController {
    private final SoulService soulService;

    @Autowired
    public SoulController(SoulService soulService) {
        this.soulService = soulService;
    }

    @PostMapping("/addsoul")
    public ResponseEntity<SoulDto> addSoul(@RequestBody SoulRequest request) {
        SoulDto addedSoul = soulService.addSoul(request);
        return ResponseEntity.ok(addedSoul);
    }

    @GetMapping("/viewsoul")
    public List<SoulDto> getSoulList(){
        return soulService.allSouls();
    }

    @GetMapping("/viewsoul/{id}")
    public ResponseEntity<SoulDto> getSoulDetails(@PathVariable Long soulId) {
        SoulDto soul = soulService.soulDetails(soulId);

        if(soul != null){
            return ResponseEntity.ok(soul);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/updatesoul/{id}")
    public ResponseEntity<SoulDto> updateSoul(@RequestBody SoulRequest request, @PathVariable Long soulId) {
        SoulDto updateSoul = soulService.updateSoul(request, soulId);
        return ResponseEntity.ok(updateSoul);
    }

    @DeleteMapping("/deletesoul/{id}")
    public ResponseEntity<Boolean> deleteSoul(@PathVariable Long soulId) {
        Boolean deleteSoul = soulService.deleteSoul(soulId);
        return ResponseEntity.ok(deleteSoul);
    }
}
