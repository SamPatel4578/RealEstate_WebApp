using System;
using System.Collections.Generic;

namespace RealEstate_WebApp.Models;

public partial class Property
{
    public int PropertyId { get; set; }

    public string PropertyTypeCode { get; set; } = null!;

    public int? AddressUnit { get; set; }

    public int AddressHouseNumber { get; set; }

    public string AddressStreetName { get; set; } = null!;

    public string AddressStreetType { get; set; } = null!;

    public string AddressSuburb { get; set; } = null!;

    public string AddressPostCode { get; set; } = null!;

    public int? BathroomsWithToilets { get; set; }

    public int? BathroomsOnly { get; set; }

    public int? ToiletsOnly { get; set; }

    public int LandSize { get; set; }

    public int BuildingSize { get; set; }

    public bool? EnergyElectricity { get; set; }

    public bool EnergyGas { get; set; }

    public bool EnergySolar { get; set; }

    public string InternetOption { get; set; } = null!;

    public string PropertyImage { get; set; } = null!;

    public virtual StreetType AddressStreetTypeNavigation { get; set; } = null!;

    public virtual ICollection<Bedroom> Bedrooms { get; set; } = new List<Bedroom>();

    public virtual ICollection<CarSpace> CarSpaces { get; set; } = new List<CarSpace>();

    public virtual InternetOption InternetOptionNavigation { get; set; } = null!;

    public virtual ICollection<PropertiesSchool> PropertiesSchools { get; set; } = new List<PropertiesSchool>();

    public virtual PropertyType PropertyTypeCodeNavigation { get; set; } = null!;

    public virtual ICollection<RentalProperty> RentalProperties { get; set; } = new List<RentalProperty>();

    public virtual ICollection<SalesProperty> SalesProperties { get; set; } = new List<SalesProperty>();

    public virtual Suburb Suburb { get; set; } = null!;
}
