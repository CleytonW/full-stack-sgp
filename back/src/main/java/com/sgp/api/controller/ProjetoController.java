package com.sgp.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sgp.api.model.Projeto;
import com.sgp.api.service.ProjetoService;

@RestController
@RequestMapping("/projetos")
public class ProjetoController {

    @GetMapping
    public ResponseEntity<List<Projeto>> listarProjetos() {
        return ResponseEntity.ok().body(projetoService.carregarProjetos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Projeto>> buscarProjetoPeloId(@PathVariable("id") Long id) {
        Optional<Projeto> projeto = projetoService.carregarDadosProjetoPeloId(id);

        if (projeto.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(projeto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirProjeto(@PathVariable("id") Long id) {
        Optional<Projeto> projeto = projetoService.carregarDadosProjetoPeloId(id);

        if (projeto.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        projetoService.deletarProjeto(id);

        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<Projeto> cadastrarProjeto(@RequestBody Projeto projeto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(projetoService.salvarProjeto(projeto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Projeto> atualizarProjeto(@PathVariable("id") Long id, @RequestBody Projeto dadosProjeto) {
        Optional<Projeto> projeto = projetoService.carregarDadosProjetoPeloId(id);

        if (projeto.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        dadosProjeto.setId(id);

        return ResponseEntity.ok().body(projetoService.salvarProjeto(dadosProjeto));
    }

    @Autowired
    private ProjetoService projetoService;
}
