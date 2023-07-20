package com.theteddyProject.teddy.model;

import jakarta.persistence.*;
import org.springframework.boot.autoconfigure.web.WebProperties;

@Entity

public class teddy {
    @Id
    @GeneratedValue(Strategy = GenerationType.AUTO)
    private int Product_Id;

    @Column
    private String Product_Name;

    @Column
    private int Product_Price;

    @Column
    private int Product_Rating;

    @Column
    private String Product_description;

    @Column
    private int Product_Color;


    @Column
    private String Product_Image;

    public int getProduct_Id() {
        return Product_Id;
    }

    public void setProduct_Id(int product_Id) {
        Product_Id = product_Id;
    }

    public String getProduct_Name() {
        return Product_Name;
    }

    public void setProduct_Name(String product_Name) {
        Product_Name = product_Name;
    }

    public int getProduct_Price() {
        return Product_Price;
    }

    public void setProduct_Price(int product_Price) {
        Product_Price = product_Price;
    }

    public int getProduct_Rating() {
        return Product_Rating;
    }

    public void setProduct_Rating(int product_Rating) {
        Product_Rating = product_Rating;
    }

    public String getProduct_description() {
        return Product_description;
    }

    public void setProduct_description(String product_description) {
        Product_description = product_description;
    }

    public int getProduct_Color() {
        return Product_Color;
    }

    public void setProduct_Color(int product_Color) {
        Product_Color = product_Color;
    }

    public String getProduct_Image() {
        return Product_Image;
    }

    public void setProduct_Image(String product_Image) {
        Product_Image = product_Image;
    }
}
