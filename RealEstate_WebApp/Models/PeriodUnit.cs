using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class PeriodUnit
{
    public string PeriodUnitName { get; set; } = null!;

    public virtual ICollection<RentalProperty> RentalProperties { get; set; } = new List<RentalProperty>();
}
