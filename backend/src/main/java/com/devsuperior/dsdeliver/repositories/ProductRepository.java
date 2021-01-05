package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	//Busca todos os produtos ordenados pelo campo Name de forma ascendente!
	//Ao construir o método as definições ficam no próprio nome!
	//findAllBy --> Buscar todos
	//  OrderBy --> Para ordenar..
	//  Name    --> Campo a ser ordenado
	//  Asc     --> Tipo de Ordenação
	List<Product> findAllByOrderByNameAsc();
}
