using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class InternetOption
{
    public string InternetOptionName { get; set; } = null!;

    public virtual ICollection<Property> Properties { get; set; } = new List<Property>();
}
