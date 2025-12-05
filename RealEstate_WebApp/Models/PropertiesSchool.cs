using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class PropertiesSchool
{
    public int PropertyId { get; set; }

    public string SchoolName { get; set; } = null!;

    public double? Distance { get; set; }

    public virtual Property Property { get; set; } = null!;

    public virtual School SchoolNameNavigation { get; set; } = null!;
}
