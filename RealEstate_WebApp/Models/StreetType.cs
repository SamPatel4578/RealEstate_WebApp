using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class StreetType
{
    public string StreetTypeCode { get; set; } = null!;

    public string StreetTypeName { get; set; } = null!;

    public virtual ICollection<Property> Properties { get; set; } = new List<Property>();
}
