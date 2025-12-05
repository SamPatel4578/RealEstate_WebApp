using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class Offence
{
    public int OffenceId { get; set; }

    public string Offence1 { get; set; } = null!;

    public int Level { get; set; }

    public int? ParentOffenceId { get; set; }

    public virtual ICollection<FamilyDomesticCrime> FamilyDomesticCrimes { get; set; } = new List<FamilyDomesticCrime>();

    public virtual ICollection<Offence> InverseParentOffence { get; set; } = new List<Offence>();

    public virtual Offence? ParentOffence { get; set; }

    public virtual ICollection<PersonPropertyCrime> PersonPropertyCrimes { get; set; } = new List<PersonPropertyCrime>();
}
