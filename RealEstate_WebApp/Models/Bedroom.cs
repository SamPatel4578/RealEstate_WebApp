using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class Bedroom
{
    public int PropertyId { get; set; }

    public int BedroomNo { get; set; }

    public string BedroomSize { get; set; } = null!;

    public bool HasBuiltInRobe { get; set; }

    public bool HasAc { get; set; }

    public bool HasFan { get; set; }

    public bool IsEnsuite { get; set; }

    public virtual BedroomSize BedroomSizeNavigation { get; set; } = null!;

    public virtual Property Property { get; set; } = null!;
}
