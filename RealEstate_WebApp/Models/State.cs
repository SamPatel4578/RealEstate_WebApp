using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class State
{
    public string StateCode { get; set; } = null!;

    public string StateName { get; set; } = null!;

    public virtual ICollection<PostCode> PostCodes { get; set; } = new List<PostCode>();
}
