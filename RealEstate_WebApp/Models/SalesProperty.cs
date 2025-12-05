using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class SalesProperty
{
    public int PropertyId { get; set; }

    public bool? OnSaleMarket { get; set; }

    public DateOnly OnMarketDate { get; set; }

    public string? OnMarketSaleOption { get; set; }

    public string? SaleSaleOption { get; set; }

    public DateOnly? ExpectedSaleDate { get; set; }

    public DateOnly? SaleDate { get; set; }

    public int? OnMarketPrice { get; set; }

    public int? SalePrice { get; set; }

    public string? DescriptionSale { get; set; }

    public virtual Property Property { get; set; } = null!;
}
