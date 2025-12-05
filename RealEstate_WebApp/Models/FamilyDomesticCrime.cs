using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class FamilyDomesticCrime
{
    public int CrimeId { get; set; }

    public int OffenceCount { get; set; }

    public int ReportedFinancialYear1 { get; set; }

    public int ReportedFinancialYear2 { get; set; }

    public string ReportedQuarter { get; set; } = null!;

    public string PostCode { get; set; } = null!;

    public int OffenceId { get; set; }

    public virtual Offence Offence { get; set; } = null!;

    public virtual PostCode PostCodeNavigation { get; set; } = null!;
}
