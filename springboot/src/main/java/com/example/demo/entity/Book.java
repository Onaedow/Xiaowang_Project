package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@TableName("book")
@Data
public class Book {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String name;
    private BigDecimal price;
    private String author;
    @JsonFormat(pattern="yyyy-MM-dd", timezone = "GMT-5")
    private Date createTime;
    private String cover;
    private String user_id;
    // TableField注解表示数据库不存在的字段，而java中需要使用，加上这个注解就不会报错
    @TableField(exist = false)
    private String username;
}
