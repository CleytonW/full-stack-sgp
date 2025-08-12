package com.sgp.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgp.api.model.Tarefa;
import com.sgp.api.repository.TarefaRepository;

@Service
public class TarefaService {

    public List<Tarefa> carregarTarefas() {
        return tarefaRepository.findAll();
    }

    public Optional<Tarefa> carregarTarefasPeloId(Long id) {
        return tarefaRepository.findById(id);
    }

    public void deletarTarefa(Long id) {
        tarefaRepository.deleteById(id);
    }

    public Tarefa salavarTarefa(Tarefa tarefa) {
        return tarefaRepository.save(tarefa);
    }

    @Autowired
    private TarefaRepository tarefaRepository;
}
