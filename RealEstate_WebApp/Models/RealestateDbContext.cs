using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace RealEstate_WebApp.Models;

public partial class RealestateDbContext : DbContext
{
    public RealestateDbContext()
    {
    }

    public RealestateDbContext(DbContextOptions<RealestateDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Bedroom> Bedrooms { get; set; }

    public virtual DbSet<BedroomSize> BedroomSizes { get; set; }

    public virtual DbSet<CarSpace> CarSpaces { get; set; }

    public virtual DbSet<CarSpaceType> CarSpaceTypes { get; set; }

    public virtual DbSet<FamilyDomesticCrime> FamilyDomesticCrimes { get; set; }

    public virtual DbSet<InternetOption> InternetOptions { get; set; }

    public virtual DbSet<Offence> Offences { get; set; }

    public virtual DbSet<PeriodUnit> PeriodUnits { get; set; }

    public virtual DbSet<PersonPropertyCrime> PersonPropertyCrimes { get; set; }

    public virtual DbSet<PostCode> PostCodes { get; set; }

    public virtual DbSet<PropertiesSchool> PropertiesSchools { get; set; }

    public virtual DbSet<Property> Properties { get; set; }

    public virtual DbSet<PropertyType> PropertyTypes { get; set; }

    public virtual DbSet<RentalProperty> RentalProperties { get; set; }

    public virtual DbSet<SalesProperty> SalesProperties { get; set; }

    public virtual DbSet<School> Schools { get; set; }

    public virtual DbSet<State> States { get; set; }

    public virtual DbSet<StreetType> StreetTypes { get; set; }

    public virtual DbSet<Suburb> Suburbs { get; set; }

    public virtual DbSet<User> Users { get; set; }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=tcp:realestatedata.database.windows.net,1433;Initial Catalog=RealestateDb;Persist Security Info=False;User ID=Realestate;Password=Password@1;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bedroom>(entity =>
        {
            entity.HasKey(e => new { e.BedroomNo, e.PropertyId });

            entity.Property(e => e.BedroomNo)
                .ValueGeneratedOnAdd()
                .HasColumnName("bedroomNo");
            entity.Property(e => e.PropertyId).HasColumnName("propertyID");
            entity.Property(e => e.BedroomSize)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.HasAc).HasColumnName("hasAC");
            entity.Property(e => e.HasBuiltInRobe).HasColumnName("hasBuiltInRobe");
            entity.Property(e => e.HasFan).HasColumnName("hasFan");
            entity.Property(e => e.IsEnsuite).HasColumnName("isEnsuite");

            entity.HasOne(d => d.BedroomSizeNavigation).WithMany(p => p.Bedrooms)
                .HasForeignKey(d => d.BedroomSize)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Bedrooms_BedroomSizes");

            entity.HasOne(d => d.Property).WithMany(p => p.Bedrooms)
                .HasForeignKey(d => d.PropertyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Bedrooms_Properties");
        });

        modelBuilder.Entity<BedroomSize>(entity =>
        {
            entity.HasKey(e => e.BedroomSize1);

            entity.Property(e => e.BedroomSize1)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("BedroomSize");
        });

        modelBuilder.Entity<CarSpace>(entity =>
        {
            entity.HasKey(e => new { e.CarSpaceType, e.PropertyId });

            entity.Property(e => e.CarSpaceType)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.PropertyId).HasColumnName("propertyID");
            entity.Property(e => e.IsLocked).HasColumnName("isLocked");
            entity.Property(e => e.NumberOfSpaces).HasColumnName("numberOfSpaces");

            entity.HasOne(d => d.Property).WithMany(p => p.CarSpaces)
                .HasForeignKey(d => d.PropertyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CarSpaces_Properties");
        });

        modelBuilder.Entity<CarSpaceType>(entity =>
        {
            entity.HasKey(e => e.CarSpaceType1);

            entity.Property(e => e.CarSpaceType1)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("CarSpaceType");
        });

        modelBuilder.Entity<FamilyDomesticCrime>(entity =>
        {
            entity.HasKey(e => e.CrimeId);

            entity.Property(e => e.CrimeId)
                .ValueGeneratedNever()
                .HasColumnName("crimeID");
            entity.Property(e => e.OffenceId).HasColumnName("offenceID");
            entity.Property(e => e.PostCode)
                .HasMaxLength(5)
                .IsUnicode(false)
                .HasColumnName("postCode");
            entity.Property(e => e.ReportedFinancialYear1).HasColumnName("reportedFinancialYear1");
            entity.Property(e => e.ReportedFinancialYear2).HasColumnName("reportedFinancialYear2");
            entity.Property(e => e.ReportedQuarter)
                .HasMaxLength(3)
                .IsUnicode(false)
                .HasColumnName("reportedQuarter");

            entity.HasOne(d => d.Offence).WithMany(p => p.FamilyDomesticCrimes)
                .HasForeignKey(d => d.OffenceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_FamilyDomesticCrimes_Offences");

            entity.HasOne(d => d.PostCodeNavigation).WithMany(p => p.FamilyDomesticCrimes)
                .HasForeignKey(d => d.PostCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_FamilyDomesticCrimes_Postcodes");
        });

        modelBuilder.Entity<InternetOption>(entity =>
        {
            entity.HasKey(e => e.InternetOptionName);

            entity.Property(e => e.InternetOptionName)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("internetOptionName");
        });

        modelBuilder.Entity<Offence>(entity =>
        {
            entity.HasIndex(e => e.Offence1, "AK_Offences").IsUnique();

            entity.Property(e => e.OffenceId)
                .ValueGeneratedNever()
                .HasColumnName("offenceID");
            entity.Property(e => e.Level).HasColumnName("level");
            entity.Property(e => e.Offence1)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("offence");
            entity.Property(e => e.ParentOffenceId).HasColumnName("parentOffenceID");

            entity.HasOne(d => d.ParentOffence).WithMany(p => p.InverseParentOffence)
                .HasForeignKey(d => d.ParentOffenceId)
                .HasConstraintName("FK_Offences_Offences");
        });

        modelBuilder.Entity<PeriodUnit>(entity =>
        {
            entity.HasKey(e => e.PeriodUnitName);

            entity.Property(e => e.PeriodUnitName)
                .HasMaxLength(7)
                .IsUnicode(false)
                .HasColumnName("periodUnitName");
        });

        modelBuilder.Entity<PersonPropertyCrime>(entity =>
        {
            entity.HasKey(e => e.CrimeId);

            entity.Property(e => e.CrimeId)
                .ValueGeneratedNever()
                .HasColumnName("crimeID");
            entity.Property(e => e.OffenceId).HasColumnName("offenceID");
            entity.Property(e => e.PostCode)
                .HasMaxLength(5)
                .IsUnicode(false)
                .HasColumnName("postCode");
            entity.Property(e => e.ReportedDate).HasColumnName("reportedDate");
            entity.Property(e => e.Suburb)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("suburb");

            entity.HasOne(d => d.Offence).WithMany(p => p.PersonPropertyCrimes)
                .HasForeignKey(d => d.OffenceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PersonPropertyCrimes_Offences");

            entity.HasOne(d => d.SuburbNavigation).WithMany(p => p.PersonPropertyCrimes)
                .HasForeignKey(d => new { d.Suburb, d.PostCode })
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PersonPropertyCrimes_Suburbs");
        });

        modelBuilder.Entity<PostCode>(entity =>
        {
            entity.HasKey(e => e.PostCode1);

            entity.Property(e => e.PostCode1)
                .HasMaxLength(5)
                .IsUnicode(false)
                .HasColumnName("postCode");
            entity.Property(e => e.State)
                .HasMaxLength(4)
                .IsUnicode(false)
                .HasColumnName("state");

            entity.HasOne(d => d.StateNavigation).WithMany(p => p.PostCodes)
                .HasForeignKey(d => d.State)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PostCodes_States");
        });

        modelBuilder.Entity<PropertiesSchool>(entity =>
        {
            entity.HasKey(e => new { e.PropertyId, e.SchoolName });

            entity.Property(e => e.PropertyId).HasColumnName("propertyID");
            entity.Property(e => e.SchoolName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("schoolName");
            entity.Property(e => e.Distance).HasColumnName("distance");

            entity.HasOne(d => d.Property).WithMany(p => p.PropertiesSchools)
                .HasForeignKey(d => d.PropertyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PropertiesSchools_Properties");

            entity.HasOne(d => d.SchoolNameNavigation).WithMany(p => p.PropertiesSchools)
                .HasForeignKey(d => d.SchoolName)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PropertiesSchools_Schools");
        });

        modelBuilder.Entity<Property>(entity =>
        {
            entity.Property(e => e.PropertyId)
                .ValueGeneratedNever()
                .HasColumnName("propertyID");
            entity.Property(e => e.AddressHouseNumber).HasColumnName("addressHouseNumber");
            entity.Property(e => e.AddressPostCode)
                .HasMaxLength(5)
                .IsUnicode(false)
                .HasColumnName("addressPostCode");
            entity.Property(e => e.AddressStreetName)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("addressStreetName");
            entity.Property(e => e.AddressStreetType)
                .HasMaxLength(3)
                .IsUnicode(false)
                .HasColumnName("addressStreetType");
            entity.Property(e => e.AddressSuburb)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("addressSuburb");
            entity.Property(e => e.AddressUnit)
                .HasDefaultValueSql("(NULL)")
                .HasColumnName("addressUnit");
            entity.Property(e => e.BathroomsOnly)
                .HasDefaultValue(0)
                .HasColumnName("bathroomsOnly");
            entity.Property(e => e.BathroomsWithToilets)
                .HasDefaultValue(0)
                .HasColumnName("bathroomsWithToilets");
            entity.Property(e => e.BuildingSize).HasColumnName("buildingSize");
            entity.Property(e => e.EnergyElectricity)
                .HasDefaultValue(true)
                .HasColumnName("energyElectricity");
            entity.Property(e => e.EnergyGas).HasColumnName("energyGas");
            entity.Property(e => e.EnergySolar).HasColumnName("energySolar");
            entity.Property(e => e.InternetOption)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("internetOption");
            entity.Property(e => e.LandSize).HasColumnName("landSize");
            entity.Property(e => e.PropertyImage)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("propertyImage");
            entity.Property(e => e.PropertyTypeCode)
                .HasMaxLength(3)
                .IsUnicode(false);
            entity.Property(e => e.ToiletsOnly)
                .HasDefaultValue(0)
                .HasColumnName("toiletsOnly");

            entity.HasOne(d => d.AddressStreetTypeNavigation).WithMany(p => p.Properties)
                .HasForeignKey(d => d.AddressStreetType)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Properties_StreetTypes");

            entity.HasOne(d => d.InternetOptionNavigation).WithMany(p => p.Properties)
                .HasForeignKey(d => d.InternetOption)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Properties_InternetOptions");

            entity.HasOne(d => d.PropertyTypeCodeNavigation).WithMany(p => p.Properties)
                .HasForeignKey(d => d.PropertyTypeCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Properties_PropertyTypes");

            entity.HasOne(d => d.Suburb).WithMany(p => p.Properties)
                .HasForeignKey(d => new { d.AddressSuburb, d.AddressPostCode })
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Properties_Suburbs");
        });

        modelBuilder.Entity<PropertyType>(entity =>
        {
            entity.HasKey(e => e.PropertyTypeCode);

            entity.HasIndex(e => e.PropertyTypeName, "AK_PropertyTypes").IsUnique();

            entity.Property(e => e.PropertyTypeCode)
                .HasMaxLength(3)
                .IsUnicode(false);
            entity.Property(e => e.PropertyTypeName)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<RentalProperty>(entity =>
        {
            entity.HasKey(e => new { e.PropertyId, e.OnMarketDate });

            entity.Property(e => e.PropertyId).HasColumnName("propertyID");
            entity.Property(e => e.OnMarketDate).HasColumnName("onMarketDate");
            entity.Property(e => e.AvailableFromDate).HasColumnName("availableFromDate");
            entity.Property(e => e.DescriptionRent)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("descriptionRent");
            entity.Property(e => e.MinimumRentPeriod).HasColumnName("minimumRentPeriod");
            entity.Property(e => e.MinimumRentPeriodUnit)
                .HasMaxLength(7)
                .IsUnicode(false)
                .HasColumnName("minimumRentPeriodUnit");
            entity.Property(e => e.OnMarketRent).HasColumnName("onMarketRent");
            entity.Property(e => e.OnRentalMarket)
                .HasDefaultValue(false)
                .HasColumnName("onRentalMarket");
            entity.Property(e => e.Rent).HasColumnName("rent");
            entity.Property(e => e.RentBeginDate).HasColumnName("rentBeginDate");
            entity.Property(e => e.RentEndDate).HasColumnName("rentEndDate");
            entity.Property(e => e.RentRemarks)
                .HasMaxLength(300)
                .IsUnicode(false)
                .HasColumnName("rentRemarks");

            entity.HasOne(d => d.MinimumRentPeriodUnitNavigation).WithMany(p => p.RentalProperties)
                .HasForeignKey(d => d.MinimumRentPeriodUnit)
                .HasConstraintName("FK_Properties_PeriodUnits");

            entity.HasOne(d => d.Property).WithMany(p => p.RentalProperties)
                .HasForeignKey(d => d.PropertyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RentalProperties_Properties");
        });

        modelBuilder.Entity<SalesProperty>(entity =>
        {
            entity.HasKey(e => new { e.PropertyId, e.OnMarketDate });

            entity.Property(e => e.PropertyId).HasColumnName("propertyID");
            entity.Property(e => e.OnMarketDate).HasColumnName("onMarketDate");
            entity.Property(e => e.DescriptionSale)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("descriptionSale");
            entity.Property(e => e.ExpectedSaleDate).HasColumnName("expectedSaleDate");
            entity.Property(e => e.OnMarketPrice).HasColumnName("onMarketPrice");
            entity.Property(e => e.OnMarketSaleOption)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("onMarketSaleOption");
            entity.Property(e => e.OnSaleMarket)
                .HasDefaultValue(false)
                .HasColumnName("onSaleMarket");
            entity.Property(e => e.SaleDate).HasColumnName("saleDate");
            entity.Property(e => e.SalePrice).HasColumnName("salePrice");
            entity.Property(e => e.SaleSaleOption)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("saleSaleOption");

            entity.HasOne(d => d.Property).WithMany(p => p.SalesProperties)
                .HasForeignKey(d => d.PropertyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_SalesProperties_Properties");
        });

        modelBuilder.Entity<School>(entity =>
        {
            entity.HasKey(e => e.SchoolName);

            entity.Property(e => e.SchoolName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("schoolName");
            entity.Property(e => e.Gendered)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("gendered");
            entity.Property(e => e.IsGovt).HasColumnName("isGovt");
            entity.Property(e => e.SchoolLevel)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("schoolLevel");
            entity.Property(e => e.SpecialType)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("specialType");
        });

        modelBuilder.Entity<State>(entity =>
        {
            entity.HasKey(e => e.StateCode);

            entity.HasIndex(e => e.StateName, "AK_States").IsUnique();

            entity.Property(e => e.StateCode)
                .HasMaxLength(4)
                .IsUnicode(false)
                .HasColumnName("stateCode");
            entity.Property(e => e.StateName)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("stateName");
        });

        modelBuilder.Entity<StreetType>(entity =>
        {
            entity.HasKey(e => e.StreetTypeCode);

            entity.HasIndex(e => e.StreetTypeName, "AK_StreetTypes").IsUnique();

            entity.Property(e => e.StreetTypeCode)
                .HasMaxLength(3)
                .IsUnicode(false);
            entity.Property(e => e.StreetTypeName)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Suburb>(entity =>
        {
            entity.HasKey(e => new { e.Suburb1, e.PostCode });

            entity.Property(e => e.Suburb1)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("suburb");
            entity.Property(e => e.PostCode)
                .HasMaxLength(5)
                .IsUnicode(false)
                .HasColumnName("postCode");

            entity.HasOne(d => d.PostCodeNavigation).WithMany(p => p.Suburbs)
                .HasForeignKey(d => d.PostCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Suburbs_PostCodes");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
