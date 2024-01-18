package com.cntt.billoflading.controller;

import com.cntt.billoflading.config.Constant;
import com.cntt.billoflading.controller.base.BaseController;
import com.cntt.billoflading.controller.base.message.ExtendedMessage;
import com.cntt.billoflading.domain.dto.OrderDTO;
import com.cntt.billoflading.domain.enums.OrderStatus;
import com.cntt.billoflading.services.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
@SecurityRequirement(name = "Bearer Authentication")
public class OrderController extends BaseController {

    private final OrderService orderService;

    @GetMapping("/user")
    @Operation(summary = "get paging of order")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "get detail order successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> getAllOrderByUserAndStatus(
            @RequestParam Long userid,
            @RequestParam OrderStatus orderStatus,
            @RequestParam Integer pageNo,
            @RequestParam Integer pageSize
    ){
        return createSuccessResponse("get detail order",orderService.getPagingOrderByStatusAndUser(userid,orderStatus,pageNo,pageSize));
    }

    @GetMapping("/{id}")
    @Operation(summary = "get paging of order")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "get detail order successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> getOrderById(@PathVariable Long id){
        return createSuccessResponse("get detail order",orderService.GetOrderById(id));
    }

    @GetMapping
    @Operation(summary = "get paging of order")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "get detail order successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> getAllOrder(@RequestParam Integer pageNo,
                                                      @RequestParam Integer pageSize){
        return createSuccessResponse("get detail order",orderService.getPagingOrder(pageNo,pageSize));
    }

    @PostMapping
    @Operation(summary = "create a new order")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "Create a new order successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> createOrder(
            @RequestBody OrderDTO orderDTO
    ){
        return createSuccessResponse("Create a new order",orderService.CreateOrder(orderDTO));
    }

    @PutMapping("/{id}")
    @Operation(summary = "update order")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "update a order successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> updateOrder(
            @PathVariable Long id,
            @RequestBody OrderDTO orderDTO
    ){
        return createSuccessResponse("update order", orderService.UpdateOrder(id,orderDTO));
    }

    @PutMapping("/cancel/{id}")
    @Operation(summary = "cancel order")
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_OK_STR, description = "cancel a order successful",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_BAD_REQUEST_STR, description = "Input invalid",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    @ApiResponse(responseCode = Constant.API_RESPONSE.API_STATUS_INTERNAL_SERVER_ERROR_STR, description = "Internal Server Error",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ExtendedMessage.class))})
    private ResponseEntity<?> cancelOrder(
            @PathVariable Long id
    ){
        return createSuccessResponse("cancel order",  orderService.CancelOrder(id));
    }

}
