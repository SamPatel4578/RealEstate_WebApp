using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class CarSpace
{
    public int PropertyId { get; set; }

    public string CarSpaceType { get; set; } = null!;

    public int NumberOfSpaces { get; set; }

    public bool IsLocked { get; set; }

    public virtual Property Property { get; set; } = null!;
}
