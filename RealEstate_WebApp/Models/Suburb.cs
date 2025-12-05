using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class Suburb
{
    public string Suburb1 { get; set; } = null!;

    public string PostCode { get; set; } = null!;

    public virtual ICollection<PersonPropertyCrime> PersonPropertyCrimes { get; set; } = new List<PersonPropertyCrime>();

    public virtual PostCode PostCodeNavigation { get; set; } = null!;

    public virtual ICollection<Property> Properties { get; set; } = new List<Property>();
}
