using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using API_SYS.Context;
using System.Configuration;

namespace API_SYS.Models
{
    public partial class apiContext : DbContext
    {
        public apiContext()
        {
        }

        public apiContext(DbContextOptions<apiContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cargos> Cargos { get; set; }
        public virtual DbSet<Chamados> Chamados { get; set; }
        public virtual DbSet<Departamentos> Departamentos { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=1234;database=api");

            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cargos>(entity =>
            {
                entity.HasKey(e => e.IdCargos);

                entity.ToTable("cargos", "api");

                entity.Property(e => e.IdCargos)
                    .HasColumnName("idCargos")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Cargo)
                    .HasColumnName("cargo")
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Chamados>(entity =>
            {
                entity.HasKey(e => e.IdChamados);

                entity.ToTable("chamados", "api");

                entity.HasIndex(e => e.UsuarioId)
                    .HasName("fkUsuario_idx");

                entity.Property(e => e.IdChamados)
                    .HasColumnName("idChamados")
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status")
                    .HasColumnType("enum('0','1','2')");

                entity.Property(e => e.UsuarioId)
                    .HasColumnName("usuarioId")
                    .HasColumnType("int(11)");

                entity.HasOne(d => d.Usuario)
                    .WithMany(p => p.Chamados)
                    .HasForeignKey(d => d.UsuarioId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fkUsuario");
            });

            modelBuilder.Entity<Departamentos>(entity =>
            {
                entity.HasKey(e => e.IdDepartamento);

                entity.ToTable("departamentos", "api");

                entity.Property(e => e.IdDepartamento)
                    .HasColumnName("idDepartamento")
                    .HasColumnType("int(11)");

                entity.Property(e => e.departamento)
                    .IsRequired()
                    .HasColumnName("departamento")
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.HasKey(e => e.IdUsuarios);

                entity.ToTable("usuarios", "api");

                entity.HasIndex(e => e.CargoId)
                    .HasName("fkCargo_idx");

                entity.HasIndex(e => e.DepartamentoId)
                    .HasName("fkDepartamento_idx");

                entity.HasIndex(e => e.Email)
                    .HasName("email_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.IdUsuarios)
                    .HasName("idUsuarios_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.IdUsuarios)
                    .HasColumnName("idUsuarios")
                    .HasColumnType("int(11)");

                entity.Property(e => e.CargoId)
                    .HasColumnName("cargoId")
                    .HasColumnType("int(11)");

                entity.Property(e => e.DepartamentoId)
                    .HasColumnName("departamentoId")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("nome")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Cargo)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.CargoId)
                    .HasConstraintName("fkCargo");

                entity.HasOne(d => d.Departamento)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.DepartamentoId)
                    .HasConstraintName("fkDepartamento");
            });

            InitializeDb.Seed(modelBuilder);
        }
    }
}
