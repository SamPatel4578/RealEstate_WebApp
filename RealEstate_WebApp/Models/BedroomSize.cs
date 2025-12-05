using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class BedroomSize
{
    public string BedroomSize1 { get; set; } = null!;

    public virtual ICollection<Bedroom> Bedrooms { get; set; } = new List<Bedroom>();
}
