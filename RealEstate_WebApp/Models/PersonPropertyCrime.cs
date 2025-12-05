using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class PersonPropertyCrime
{
    public int CrimeId { get; set; }

    public int OffenceCount { get; set; }

    public DateOnly ReportedDate { get; set; }

    public string Suburb { get; set; } = null!;

    public string PostCode { get; set; } = null!;

    public int OffenceId { get; set; }

    public virtual Offence Offence { get; set; } = null!;

    public virtual Suburb SuburbNavigation { get; set; } = null!;
}
