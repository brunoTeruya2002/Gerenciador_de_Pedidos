package com.example.projeto.services;


import com.example.projeto.entities.Pedido;
import com.example.projeto.repositories.PedidoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
//@RequiredArgsConstructor
public class PedidoService {
    private final PedidoRepository pedidoRepository;
    public PedidoService(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

    @Transactional(readOnly = true)
    public List<Pedido> getAllPedidos(){
        List<Pedido> listaPedidos = new ArrayList<>();
        listaPedidos = pedidoRepository.findAll();
        return listaPedidos;
    }

    public Pedido salvarPedido(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    public Pedido atualizaPedido(Integer Id, Pedido pedido) {
        Pedido pedidoAtual = pedidoRepository.findById(Id).orElseThrow(() -> new RuntimeException("Id inexistente. Verificar!"));
        pedidoAtual.setDataPedido(pedido.getDataPedido());
        pedidoAtual.setValorPedido(pedido.getValorPedido());
        pedidoAtual.setValorBonificacao(pedido.getValorBonificacao());
        pedidoAtual.setMarca(pedido.getMarca());
        pedidoAtual.setStatus(pedido.getStatus());
        pedidoAtual = pedidoRepository.save(pedidoAtual);
        return pedidoRepository.save(pedidoAtual);
    }

    public void deletaPedido(Integer Id) {
        pedidoRepository.findById(Id).orElseThrow(() -> new RuntimeException("Id inexistente. Verificar!"));
        pedidoRepository.deleteById(Id);
    }




}
