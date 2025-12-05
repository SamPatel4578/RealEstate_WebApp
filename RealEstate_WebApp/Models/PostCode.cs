using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class PostCode
{
    public string PostCode1 { get; set; } = null!;

    public string State { get; set; } = null!;

    public virtual ICollection<FamilyDomesticCrime> FamilyDomesticCrimes { get; set; } = new List<FamilyDomesticCrime>();

    public virtual State StateNavigation { get; set; } = null!;

    public virtual ICollection<Suburb> Suburbs { get; set; } = new List<Suburb>();
}
