using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class School
{
    public string SchoolName { get; set; } = null!;

    public bool IsGovt { get; set; }

    public string SchoolLevel { get; set; } = null!;

    public string? SpecialType { get; set; }

    public string Gendered { get; set; } = null!;

    public virtual ICollection<PropertiesSchool> PropertiesSchools { get; set; } = new List<PropertiesSchool>();
}
