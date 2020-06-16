using CompanyManager.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CompanyManager.DatabaseContext
{
    public class CompanyManagerContext : DbContext
    {
        public CompanyManagerContext(DbContextOptions<CompanyManagerContext> context) : base(context)
        {

        }

        public DbSet<Company> Companies { get; set; }

        public DbSet<Office> Offices { get; set; }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<OfficeDocument> OfficeDocuments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Company>()
                .HasMany(c => c.Offices)
                .WithOne(e => e.Company)
                .HasForeignKey(e => e.CompanyId);

            modelBuilder.Entity<Office>()
                .HasMany(c => c.Employees)
                .WithOne(e => e.Office)
                .HasForeignKey(e => e.OfficeId);

            modelBuilder.Entity<Office>()
                .HasMany(c => c.OfficeDocuments)
                .WithOne(e => e.Office)
                .HasForeignKey(e => e.OfficeId);

        }
    }
}
