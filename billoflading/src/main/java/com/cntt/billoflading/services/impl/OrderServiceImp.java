package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.dto.OrderDTO;
import com.cntt.billoflading.domain.enums.OrderStatus;
import com.cntt.billoflading.domain.models.*;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import com.cntt.billoflading.mapper.CommonMapper;
import com.cntt.billoflading.repository.*;
import com.cntt.billoflading.services.BaseService;
import com.cntt.billoflading.services.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class OrderServiceImp extends BaseService implements OrderService {
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private final ServiceTransportationRepository serviceTransportationRepository;
    private final StockRepository stockRepository;
    private final CommonMapper mapper;


    @Override
    public MessageResponse CreateOrder(OrderDTO orderDTO) {
        Order order = Order.builder()
                .description(orderDTO.getDescription())
                .country(orderDTO.getCountry())
                .receiver_info(orderDTO.getReceiver_info())
                .sender_info(orderDTO.getSender_info())
                .weight(orderDTO.getWeight())
                .cod(orderDTO.getCod())
                .build();
        if (orderDTO.getCategory_id() != null) {
            Category category = categoryRepository.findById(orderDTO.getCategory_id())
                    .orElseThrow(() -> new IllegalArgumentException("Category is not exist!"));
            order.setCategory(category);
        }
        if (orderDTO.getServiceTransportation_Id() != null) {
            ServiceTransportation serviceTransportation = serviceTransportationRepository.findById(orderDTO.getServiceTransportation_Id())
                    .orElseThrow(() -> new IllegalArgumentException("Service Transportation is not exist!"));
            order.setServiceTransportation(serviceTransportation);
        }
            User user = userRepository.findById(getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User is not exist!"));
        order.setUser(user);
        order.setCreatedAt(LocalDateTime.now());
        order.setStatus(OrderStatus.STATUS_PENDING);
        orderRepository.save(order);
        return MessageResponse.builder().message("Gửi yêu cầu thành công.").build();
    }

    @Override
    public MessageResponse UpdateOrder(Long id, OrderDTO orderDTO) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Order is not exist!"));

        order.setReceiver_info(orderDTO.getReceiver_info());
        order.setCod(orderDTO.getCod());
        order.setSender_info(orderDTO.getSender_info());
        order.setCountry(orderDTO.getCountry());
        order.setWeight(order.getWeight());
        if (orderDTO.getServiceTransportation_Id() != null) {
            ServiceTransportation serviceTransportation = serviceTransportationRepository.findById(orderDTO.getServiceTransportation_Id())
                    .orElseThrow(() -> new IllegalArgumentException("Service Transportation is not exist!"));
            order.setServiceTransportation(serviceTransportation);
        }
        if (orderDTO.getCategory_id() != null) {
            Category category = categoryRepository.findById(orderDTO.getCategory_id())
                    .orElseThrow(() -> new IllegalArgumentException("Category is not exist!"));
            order.setCategory(category);
        }
        orderRepository.save(order);
        return MessageResponse.builder().message("Update Order Success").build();
    }

    @Override
    public MessageResponse CancelOrder(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Order is not exist!"));
        order.setStatus(OrderStatus.STATUS_CANCELLED);
        orderRepository.save(order);
        return MessageResponse.builder().message("Cancel Order Success").build();
    }

    @Override
    public MessageResponse UpdateStatusOrder(Long id, OrderStatus orderStatus) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Order is not exist!"));
        order.setStatus(orderStatus);
        orderRepository.save(order);
        return MessageResponse.builder().message("Update Order Success").build();
    }

    @Override
    public OrderDTO GetOrderById(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Order is not exist!"));
        return mapper.convertToResponse(order,OrderDTO.class);
    }

    @Override
    public Page<OrderDTO> getPagingOrderByStatusAndUser(long userId, OrderStatus orderStatus, Integer pageNo, Integer pageSize) {
        User user = userRepository.findById(getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User is not exist!"));
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Order> orderPage = orderRepository.findByUserAndStatus(user,orderStatus,pageable);
        return mapper.convertToResponsePage(orderPage, OrderDTO.class, pageable);
    }

    @Override
    public Page<OrderDTO> getPagingOrderByStock(long stockId, Integer pageNo, Integer pageSize) {
        Stock stock = stockRepository.findById(stockId)
                .orElseThrow(() -> new IllegalArgumentException("Stock is not exist!"));
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Order> orderPage = orderRepository.findByStock(stock,pageable);
        return mapper.convertToResponsePage(orderPage, OrderDTO.class, pageable);
    }

    @Override
    public Page<OrderDTO> getPagingOrderByServiceAndUser(long userId, int ServiceId, Integer pageNo, Integer pageSize) {
        User user = userRepository.findById(getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User is not exist!"));
        ServiceTransportation serviceTransportation = serviceTransportationRepository.findById(getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Service transportation is not exist!"));
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Order> orderPage = orderRepository.findByUserAndServiceTransportation(user,serviceTransportation,pageable);
        return mapper.convertToResponsePage(orderPage, OrderDTO.class, pageable);

    }
}
