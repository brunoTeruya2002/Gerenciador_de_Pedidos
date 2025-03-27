package com.example.projeto.controllers;

import com.example.projeto.entities.Pedido;
import com.example.projeto.services.PedidoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {
    private final PedidoService pedidoService;
    public PedidoController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }


    @GetMapping
    public ResponseEntity<List<Pedido>> listaPedidos() {
        List<Pedido> listaPedido = pedidoService.getAllPedidos();
        return ResponseEntity.ok(listaPedido);
    }

    @PostMapping
    public ResponseEntity<Pedido> salvaPedido(@RequestBody Pedido pedido) {
        var pedidoNovo = pedidoService.salvarPedido(pedido);
        return ResponseEntity.ok(pedidoNovo);
    }

    @PutMapping("/{Id}")
    public ResponseEntity<Pedido> atualizaPedido(@PathVariable Integer Id, @RequestBody Pedido pedido) {
        var pedidoNovo = pedidoService.atualizaPedido(Id, pedido);
        return ResponseEntity.ok(pedidoNovo);
    }

    @DeleteMapping("/{Id}")
    public ResponseEntity<Void> deletaPedido(@PathVariable Integer Id) {
        pedidoService.deletaPedido(Id);
        return ResponseEntity.noContent().build();
    }



}
