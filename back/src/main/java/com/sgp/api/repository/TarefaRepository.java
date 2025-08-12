package com.sgp.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sgp.api.model.Tarefa;

public interface TarefaRepository extends JpaRepository<Tarefa, Long>{
    
}
