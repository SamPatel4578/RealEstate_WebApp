using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class RentalProperty
{
    public int PropertyId { get; set; }

    public bool? OnRentalMarket { get; set; }

    public DateOnly OnMarketDate { get; set; }

    public DateOnly? AvailableFromDate { get; set; }

    public DateOnly? RentBeginDate { get; set; }

    public DateOnly? RentEndDate { get; set; }

    public int? OnMarketRent { get; set; }

    public int? Rent { get; set; }

    public string? RentRemarks { get; set; }

    public int? MinimumRentPeriod { get; set; }

    public string? MinimumRentPeriodUnit { get; set; }

    public string? DescriptionRent { get; set; }

    public virtual PeriodUnit? MinimumRentPeriodUnitNavigation { get; set; }

    public virtual Property Property { get; set; } = null!;
}
