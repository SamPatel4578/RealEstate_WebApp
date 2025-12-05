using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class PropertyType
{
    public string PropertyTypeCode { get; set; } = null!;

    public string PropertyTypeName { get; set; } = null!;

    public virtual ICollection<Property> Properties { get; set; } = new List<Property>();
}
